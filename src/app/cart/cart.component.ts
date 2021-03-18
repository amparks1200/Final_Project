import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  removeFromCart(index) {
    this.service.cart.splice(index, 1);
  }
  
  constructor(public service: UsaServiceService, public router: Router) { }

  ngOnInit(): void {
  }

}
