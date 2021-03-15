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
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  
  getFavorites(cart): void {
    this.service.favoritesPage(cart);
    this.router.navigate(["/Favorites"]);
  }
  removeFavorite(index) {
    this.service.favorite.splice(index, 1);
  }
  constructor(public service: UsaServiceService, public router: Router) { }

  ngOnInit(): void {
  this.service.getItems();
}

}
