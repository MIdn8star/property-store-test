import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-counter-details',
  templateUrl: './counter-details.component.html',
  styleUrls: ['./counter-details.component.scss']
})
export class CounterDetailsComponent implements OnInit {
  counter = 0;

  constructor(private store: Store<{ counter: { counter: number } }>) {

  }

  ngOnInit(): void {

    // Get the counter details on change using ngrx store

    this.store.select('counter').subscribe(data => {
      console.log('this is data', data)
      this.counter = data.counter
    });

  }

}
