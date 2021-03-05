import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsaServiceService {

  categories: any[] = [];

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



}
