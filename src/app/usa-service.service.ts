import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

interface Results {
  product_name: string;
  product_price: number;
  product_image: any;
  quantity?: number; 
  price?: number;
} 
const API_URL: string = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UsaServiceService {

  showCart: boolean = true;
  public url: string = "http://localhost:3000/";
  description: any[] =[];
  selectedProduct: Results;
  categories: any[] = [];
  items: any[] = [];
  results: any[] = [];
  public cart: Results[] = [];
  favorite: any[] = [];
  size: string = "";

  constructor(private http: HttpClient) { }

  public getItems(){
    this.http.get("https://usa-products.herokuapp.com/api").subscribe(
      (response: any) => {
        console.log(response);
        for (let items of response){
          if (!this.categories.includes(items.category)){
            this.categories.push(items.category);
          }
        }
      },
      (error) => {
        console.error(error);
      }
    )
  }

  public filterItems(itemSearch, size?, state?){
      this.items = [];
      let url = API_URL + itemSearch;
      if (size && state){
        url += `?size=${size}&state=${state}`;
      } else if (state){
        url += `?state=${state}`;
      } else if (size){
        url += `?size=${size}`;
      }
      this.http.get(API_URL).subscribe( 
        (response: any) => {
          console.log(response);
        this.items = response.map( (item) => {
          item.quantity = 1;
          return item;
        })
        console.log(this.items);
      });
    }

    public selectCategory(catSelected){
      this.http.get(API_URL + "category/" + catSelected).subscribe( 
        (response: any) => {
          console.log(response);
        this.items = response.map( (item) => {
          item.quantity = 1;
          return item;
        })
      });
    }

    public favoritesPage(favoriteItem){
      this.http.get(API_URL + "favorites/" + favoriteItem).subscribe(
        (response:any) => {
          console.log(response);
          this.items = response;
        });
    }

    public getSubTotal(){
      let total = 0;
      for (let item of this.cart) {
        total += (item.price * item.quantity);
      }
      return total;
    }

    public getTaxes() {
      let taxes = (this.getSubTotal() * .06).toFixed(2);
      return taxes;
    }

   public getGrandTotal() {
      let grandTotal = (this.getSubTotal() *1.06).toFixed(2);
      return grandTotal;
       }

      public moreDetails (itemDetails){
        this.http.get(API_URL + "description/" + itemDetails).subscribe(
          (response: any) => {
            console.log(response);
            this.items = response.results;
          })
      }
    }
  
    
        



