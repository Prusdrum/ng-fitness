import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { getPriceInfo, PriceInfo } from '../state/selectors/price-info';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-price-info',
  templateUrl: './price-info.component.html',
  styleUrls: ['./price-info.component.css']
})
export class PriceInfoComponent implements OnInit {
  totalPrice: number;

  constructor(private store: Store<AppState>) {
    this.totalPrice = 0;
  }

  ngOnInit() {
    this.connect();
  }

  connect(): void {
    this.store.select(getPriceInfo).subscribe(priceInfo => {
      this.totalPrice = priceInfo.totalPrice;
    });
  }
}
