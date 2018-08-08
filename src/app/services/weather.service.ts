import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


interface ResponseForWeather{
  timezone:string;
  temperature:string;
  apparentTemperature:string;
  pressure:string;
  windSpeed:string;
  cloudCover:string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherData: any;
  constructor(private _http: HttpClient){
    this.weatherData = {};
  }
  // let apiURL = `${this.weatherUrl}?address=${address}`;
  getWeatherData(address: string) {
    console.log(address);
    let encodedAddress=encodeURIComponent(address);
    console.log(encodedAddress);
    this._http.get<ResponseForWeather>
    (`http://localhost:3000/weather/${encodedAddress}`)
    .subscribe((res)=>{
      console.log(res);
      this.weatherData.temperature=res.temperature;
      this.weatherData.apparentTemperature=res.apparentTemperature;
      this.weatherData.pressure=res.pressure;
      this.weatherData.windSpeed=res.windSpeed;
      this.weatherData.cloudCover=res.cloudCover;
      this.weatherData.timezone=res.timezone;
    })
  }


  // getWeatherData(address){
  //   this._http.get<ResponseForWeather>
  //   (this.weatherUrl)
  //   .subscribe(res => {
  //     this.weatherData.push({
  //       timezone: res.timezone,
  //       temperature: res.temperature,
  //       apparentTemperature:res.apparentTemperature,
  //       pressure:res.apparentTemperature,
  //       windSpeed:res.windSpeed,
  //       cloudCover:res.cloudCover
  //     });
  //    }, err => {

  //   });
  // }
}
