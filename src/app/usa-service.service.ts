import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsaServiceService {

  constructor(private http: HttpClient) { }

  getItems(){
    this.http.get("http://localhost:3000").subscribe(
      (response: any) => {
        console.log(response);

      },
      (error) => {
        console.error(error);
      }
    )
  }

}
