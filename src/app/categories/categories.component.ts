import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';
import { Router } from '@angular/router';

interface Categories{
  category: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  addCategory = function (category: Categories): void {
    this.service.category.push({
      category: category
    });
  }

  getCatResults(category): void {
    this.service.selectCategory(category);
    this.router.navigate(["/Results"]);
  }

  constructor(public service: UsaServiceService, public router: Router) { }

  ngOnInit(): void {
    this.service.getItems();
  }

}