import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';

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

  constructor(public service: UsaServiceService) { }

  ngOnInit(): void {
    this.service.getItems();
  }

}