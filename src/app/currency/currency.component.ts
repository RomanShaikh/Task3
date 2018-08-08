import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor(private currency:CurrencyService) { }

  currencyData=['USD','CAD','INR','JPY','BRL','PHP'];

  ngOnInit() {
  }

}
// <ul class="dropdown-menu">
//             <li *ngFor="let data of currencyData">
//                 {{data}}
//             </li>
//           </ul>