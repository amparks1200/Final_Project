import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public service: UsaServiceService) { }

  ngOnInit(): void {
    this.service.getItems();
  }

}
