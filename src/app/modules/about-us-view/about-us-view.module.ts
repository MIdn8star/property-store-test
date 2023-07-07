import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutViewComponent} from "../../views/about-view/about-view.component";
import {AboutUsViewRoutingModule} from "./about-us-view-routing.module";


@NgModule({
  declarations: [
    AboutViewComponent
  ],
  imports: [
    CommonModule,
    AboutUsViewRoutingModule
  ]
})
export class AboutUsViewModule {
}
