import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subscriber } from 'rxjs';

interface Results {
  product_name: string;
  product_price: number;
  product_image: any;
  quantity?: number; 
  price?: number;
} 


@Injectable({
  providedIn: 'root'
})
export class UsaServiceService {

  showCart: boolean = true;
  public url: string = "http://localhost:3000/";
  categories: any[] = [];
  items: any[] = [];
  results: any[] = [];
  public cart: Results[] = [];
  favorite: any[] = [];
  size: string = "";

  constructor(private http: HttpClient) { }

  getItems(){
    this.http.get("http://localhost:3000").subscribe(
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

  filterItems(itemSearch, size?, state?){
      this.items = [];
      let url = this.url + itemSearch;
      if (size && state){
        url += `?size=${size}&state=${state}`;
      } else if (state){
        url += `?state=${state}`;
      } else if (size){
        url += `?size=${size}`;
      }
      this.http.get(url).subscribe( 
        (response: any) => {
          console.log(response);
        this.items = response.map( (item) => {
          item.quantity = 1;
          return item;
        })
        console.log(this.items);
      });
    }

    selectCategory(catSelected){
      this.http.get(this.url + "category/" + catSelected).subscribe( 
        (response: any) => {
          console.log(response);
        this.items = response.map( (item) => {
          item.quantity = 1;
          return item;
        })
      });
    }

    favoritesPage(favoriteItem){
      this.http.get(this.url + "favorites/" + favoriteItem).subscribe(
        (response:any) => {
          console.log(response);
          this.items = response;
        });
    }

    getSubTotal(){
      let total = 0;
      for (let item of this.cart) {
        total += (item.price * item.quantity);
      }
      return total;
    }

    getTaxes() {
      let taxes = (this.getSubTotal() * .06).toFixed(2);
      return taxes;
    }

    getGrandTotal() {
      let grandTotal = (this.getSubTotal() *1.06).toFixed(2);
      return grandTotal;
    }
  }



