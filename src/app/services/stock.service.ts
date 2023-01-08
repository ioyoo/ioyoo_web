import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Stock } from "../stocks/stock";
import credentials from "../private/credentials.json";

@Injectable({
    providedIn: 'root'
})

export class StocksService{
    baseURL:string = ""

    constructor(private httpClient : HttpClient) {
        this.baseURL = credentials.url.localhost
    }

    public getStocks(){
        return this.httpClient.get<Stock[]>(this.baseURL + credentials.endpoints.stocks)
    }
}