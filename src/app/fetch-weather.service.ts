import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchWeatherService {
  urlLocation = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=Europe%2FBerlin';


  constructor(private _http: HttpClient) {}

  // communication with the api to get the needed infomation
  getData() {
    return this._http.get(this.urlLocation, { observe: 'response', responseType: 'json' })
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  // handling of possible errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
}
