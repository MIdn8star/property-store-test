import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppConstants} from "../../AppConstants";
import {Store} from "@ngrx/store";
import {increment} from "../../ngrx/counter.action";

@Component({
  selector: 'app-choose-city',
  templateUrl: './choose-city.component.html',
  styleUrls: ['./choose-city.component.scss']
})
export class ChooseCityComponent implements OnInit {
  @Output() chooseCity = new EventEmitter<any>();
  cityList = [
    {
      city: 'Delhi',
      country: 'India',
      code: 'D'
    },
    {
      city: 'New York',
      country: 'United States',
      code: 'N'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      code: 'L'
    },
  ]
  cityLocation = AppConstants.DELHI_LOCATION;

  constructor(private store: Store<{ counter: { counter: number } }>) {
  }

  ngOnInit(): void {
    this.chooseCity.emit(this.cityLocation)

  }

  /**
   * Function to select city for weather details and output the selected city to parent home component
   * @param city selected city unique code
   */

  selectCity(city: string) {
    let cityLocation = AppConstants.LONDON_LOCATION;
    this.store.dispatch(increment());
    if (city === 'D') {
      this.cityLocation = AppConstants.DELHI_LOCATION
    } else if (city === 'N') {

      this.cityLocation = AppConstants.NY_LOCATION

    } else if (city === 'L') {
      this.cityLocation = AppConstants.LONDON_LOCATION

    }
    this.chooseCity.emit(this.cityLocation)
  }

}
