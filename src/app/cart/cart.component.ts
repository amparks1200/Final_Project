import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';
import { Router } from '@angular/router';

interface Results {
  product_name: string;
  product_price: number;
  product_image: any;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  addCart = function (cart: Results): void {
    this.service.cart.push({
      cart: cart
    });
  }

  getCartResults(cart): void {
    this.service.cartPage(cart);
    this.router.navigate(["/Cart"]);
  }
  constructor(public service: UsaServiceService, public router: Router) { }

  ngOnInit(): void {
    this.service.getItems();
  }

}
