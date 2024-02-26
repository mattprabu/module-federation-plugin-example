import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonLibService {
  private product_name = new BehaviorSubject<string>('');
  private shell_product_name = new BehaviorSubject<string>('');
  // Observable for components to subscribe to
  public product_name$ = this.product_name.asObservable();
  public shell_product_name$ = this.shell_product_name.asObservable();
  constructor() {}

  public search(search_text: string): void {
    this.product_name.next(search_text);
  }

  public shell_search(search_text: string): void {
    this.shell_product_name.next(search_text);
  }
}
