import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactViewRoutingModule} from "./contact-view-routing.module";
import {ContactViewComponent} from "../../views/contact-view/contact-view.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContactViewComponent
  ],
    imports: [
        CommonModule,
        ContactViewRoutingModule,
        ReactiveFormsModule
    ]
})
export class ContactViewModule {
}
