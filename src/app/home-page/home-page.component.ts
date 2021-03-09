import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';
import { Router } from '@angular/router';

interface Categories{
  category: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  addCategory = function (category: Categories): void {
    this.service.category.push({
      category: category
    });
  }

  public itemSearch: string = "";

  getFilteredItems(): void {
    this.service.filterItems(this.itemSearch);
    this.router.navigate(["/Results"]);
  }

  constructor(public service: UsaServiceService, public router: Router) { }

  ngOnInit(): void {
    this.service.getItems();
  }

}
