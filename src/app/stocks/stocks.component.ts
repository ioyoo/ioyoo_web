import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Stock } from './stock';
import { StocksService } from '../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StockComponent implements OnInit {
  stocks: Stock[] = []

  getData(){
    this.stocksService.getStocks().subscribe(response => {
      this.stocks = response
    })
  }

  constructor(
    private stocksService: StocksService
  ) {  }

  ngOnInit(): void {
    this.getData();
  }  
}
