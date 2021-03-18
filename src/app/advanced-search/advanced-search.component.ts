import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

interface BusinessSize{
  size: string;
}

interface State{
  state: string;
}

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css'],
})
export class AdvancedSearchComponent implements OnInit {
  public bigBusSearch: boolean;
  public smallBusSearch: boolean;
  public size: string = "";
  public state: string = "";
  public itemSearch: string = "";

  applyFilters = function (): void {
    if (this.bigBusSearch && this.smallBusSearch) {
    } else if (this.bigBusSearch) {
      this.size = "big";
    } else if (this.smallBusSearch) {
      this.size = "small";
    }
    this.service.filterItems(this.itemSearch, this.size, this.state);
    this.router.navigate(['/Results']);
  };

  constructor(public service: UsaServiceService, public router: Router) {}

  ngOnInit(): void {}
}
