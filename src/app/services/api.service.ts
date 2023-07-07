import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../AppConstants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }


  /**
   *Api to get weather data from different locations using open weather API
   * @param lat required lattitude
   * @param lon required lognitude
   */

  getWeatherData(lat: string, lon: string): Observable<any> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${AppConstants.OPEN_WEATHER_API_KEY}`)
  }
}
