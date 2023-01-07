import { Component, OnInit } from '@angular/core';

import { Stock } from './stock';
import { STOCKS } from './mock-stocks';

@Component({
  selector: 'app-stock',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StockComponent implements OnInit {
  stocks = STOCKS

  constructor() { }
  ngOnInit(): void {
  }
}
