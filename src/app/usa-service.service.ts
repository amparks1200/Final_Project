import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsaServiceService {

  public url: string = "http://localhost:3000/";

  categories: any[] = [];
  items: any[] = []

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

  filterItems(itemSearch){
      this.http.get(this.url + itemSearch).subscribe( 
        (response: any) => {
          console.log(response);
        this.items = response;
      });
    }
  }

