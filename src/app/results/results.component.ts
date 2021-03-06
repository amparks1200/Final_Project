import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';


interface Results {
  product_name: string;
  product_price: number;
  product_image: any;
  business_name?: any;
  business_description?: any;
  state?: string;
  city?: string;
} 
interface Cart extends Results {
  quantity: number;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  quantity: number;

  addResult = function (result: Results): void {
    this.service.results.push({
      product_name: result.product_name,
      product_price: result.product_price,
      product_image: result.product_image
    });
  }

  seeDetails (itemDetails: Results): void {
    console.log (itemDetails)
    this.service.selectedProduct=(itemDetails);
  }

  addResultToCart(cartItem: Cart): void {
    this.service.cart.push(cartItem);
  }
 
  addToFavorites (favoriteItem: Results): void {
    this.service.favorite.push(favoriteItem);
  }

  toggle: boolean = true;
  selectFavorite(item) {
    item.toggle = !item.toggle;
  }
  constructor (public service: UsaServiceService) { }

  ngOnInit(): void {
  }
}
