import { Component } from '@angular/core';
import { FetchWeatherService } from '../fetch-weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  weekdays = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
];
newData: any;

constructor(private _apiService: FetchWeatherService) {}

ngOnInit() {
  this._apiService.getData().subscribe(res => {
    this.newData = {...res.body!};
  });
  setTimeout(() => {
    console.log(this.newData);
  }, 1000);  
}

}
