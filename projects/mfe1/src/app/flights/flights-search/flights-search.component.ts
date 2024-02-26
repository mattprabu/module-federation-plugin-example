import { Component, OnInit } from '@angular/core';
import { CommonLibService } from 'common-lib';
@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css'],
})
export class FlightsSearchComponent implements OnInit {
  productName: string = '';
  from_host: string = '';
  constructor(private service: CommonLibService) {}
  ngOnInit(): void {
    this.service.product_name$.subscribe((data) => (this.productName = data));
    this.service.shell_product_name$.subscribe(
      (data) => (this.from_host = data)
    );
  }
  search(): void {
    this.service.search(this.productName);
  }
}
