import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ContactViewComponent} from "../../views/contact-view/contact-view.component";


const routes = [
  {path: '', component: ContactViewComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactViewRoutingModule {
}
