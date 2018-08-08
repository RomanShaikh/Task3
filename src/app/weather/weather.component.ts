import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  constructor(private weather:WeatherService) { }
  ngOnInit() {}

}
