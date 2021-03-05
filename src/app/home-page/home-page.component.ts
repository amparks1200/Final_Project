import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';

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

  constructor(public service: UsaServiceService) { }

  ngOnInit(): void {
    this.service.getItems();
  }

}
