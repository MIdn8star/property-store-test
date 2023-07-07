import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AboutViewComponent} from "../../views/about-view/about-view.component";


const routes:any = [
  {
    path: '',
    component: AboutViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],

})
export class AboutUsViewRoutingModule {
}
