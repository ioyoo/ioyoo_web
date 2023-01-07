import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Stock } from "../stocks/stock";

@Injectable({
    providedIn: 'root'
})

export class StocksService{
    baseURL:string = "http://127.0.0.1:5000"

    constructor(private httpClient : HttpClient) {}

    public getStocks(){
        return this.httpClient.get<Stock[]>(this.baseURL + "/api/stocks")
    }
}