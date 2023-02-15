import { Component } from '@angular/core';
import { FetchWeatherService } from '../fetch-weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
newData: any;
constructor(private _apiService: FetchWeatherService) {}

ngOnInit() {
  this._apiService.getData().subscribe((res) => {
    this.newData = {...res.body!};    
  });
}

// transform the weather code to show images
showWeather(weathercode: number) {
  let imgPath;
  switch (weathercode) {
    case 0: 
    imgPath = 'sun';
    break;
    case 1: case 2: case 3: 
    imgPath = 'clouds';
    break;
    case 45: case 48: 
    imgPath = 'fog';
    break;
    case 51: case 53: case 55: case 56: case 57: 
    imgPath = 'drizzle';
    break;
    case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82: 
    imgPath = 'rain';
    break;
    case 71: case 73: case 75: case 77: case 85: case 86: 
    imgPath = 'snowy';
    break;
    case 95: case 96: case 99: 
    imgPath = 'thunderstrom';
    break;
    default:
    imgPath = 'circle';
    break;
  }
  return imgPath;
}


}
