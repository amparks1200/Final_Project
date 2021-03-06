import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoriesComponent } from './categories/categories.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { ResultsComponent } from './results/results.component'
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { DescriptionComponent } from './description/description.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
  { path: 'Cart', component: CartComponent},
  { path: 'Home', component: HomePageComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'About-Us', component: AboutUsComponent},
  { path: 'Favorites', component: FavoritesComponent},
  { path: 'Results', component: ResultsComponent},
  { path: 'AdvancedSearch', component: AdvancedSearchComponent},
  { path: 'description', component: DescriptionComponent },
  { path: 'Checkout', component: CheckoutComponent},
  { path: 'Receipt', component: ReceiptComponent},
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
