import {Component, Input} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  public city = new BehaviorSubject(false)

  setCity(event: any) {
    console.log('this is event', event)
    this.city.next(event);
  }
}
