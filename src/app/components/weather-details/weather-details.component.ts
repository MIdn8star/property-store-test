import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ApiService} from "../../services/api.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})

export class WeatherDetailsComponent implements OnInit {
  @Input() city: any = new BehaviorSubject(false)
  cityData: any

  counter?: number;

  constructor(private apiService: ApiService) {

  }

  details: any

  ngOnInit(): void {
    this.city.subscribe((data: any) => {
      console.log('city data changed', data);
      this.cityData = data
      if (data) {
        this.weatherDetails();

      }
    })
  }

  weatherDetails() {
    this.apiService.getWeatherData(this.cityData.lat, this.cityData.lon).subscribe(data => {
      console.log('this is weather data', data)
      this.details = data;
    })
  }

}
