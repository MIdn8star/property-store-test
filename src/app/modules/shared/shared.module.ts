import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChooseCityComponent} from "../../components/choose-city/choose-city.component";
import {WeatherDetailsComponent} from "../../components/weather-details/weather-details.component";



@NgModule({
  declarations: [
    ChooseCityComponent,
    WeatherDetailsComponent
  ],
  exports: [
    ChooseCityComponent,
    WeatherDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
