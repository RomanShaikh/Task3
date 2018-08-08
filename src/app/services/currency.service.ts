import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface ResponseForCurrency{
  usd:string;
  cad:string;
  inr:string;
  jpy:string;
  brl:string;
  php:string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  
  currencyData:any;
  constructor(private _http:HttpClient) {
    this.currencyData={}
   }

   getCurrencyData(base:string){
    this._http.get<ResponseForCurrency>(`http://localhost:3000/currency/${base}`)
    .subscribe((res)=>{
      console.log(res);
    this.currencyData.usd=res.usd;
    this.currencyData.cad=res.cad;
    this.currencyData.inr=res.inr;
    this.currencyData.jpy=res.jpy;
    this.currencyData.brl=res.brl;
    this.currencyData.php=res.php;
    })
   }
}
