import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CommonLibService } from 'common-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'shell';
  productName: string = '';
  from_host: string = '';
  constructor(private service: CommonLibService) {}
  ngOnInit(): void {
    this.service.product_name$.subscribe((data) => (this.productName = data));
  }

  shell_click() {
    this.service.shell_search(this.from_host);
  }
}
