import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsaServiceService } from '../usa-service.service';


interface Results {
  product_name: string;
  product_price: number;
  product_image: any;
} 
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

public item: any;
  constructor(public service: UsaServiceService, public router:Router) { }

  ngOnInit(): void {
    this.service.getItems()
    this.item=this.service.selectedProduct
  }

}
