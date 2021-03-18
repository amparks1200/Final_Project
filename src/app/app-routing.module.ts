import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoriesComponent } from './categories/categories.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { ResultsComponent } from './results/results.component'
import { CartComponent } from './cart/cart.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

const routes: Routes = [
  { path: 'Cart', component: CartComponent},
  { path: 'Home', component: HomePageComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'About-Us', component: AboutUsComponent},
  { path: 'Results', component: ResultsComponent},
  { path: 'AdvancedSearch', component: AdvancedSearchComponent},
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
