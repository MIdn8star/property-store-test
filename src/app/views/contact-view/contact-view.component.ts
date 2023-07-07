import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent {
  contactUs = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{1,25}$')]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9_!#$%&*+.-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    message: ['', [Validators.required, Validators.minLength(3)]],
    purpose: ['', [Validators.required]],
  });
  formSubmitted = false;
  formState: Observable<any> | undefined

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private store: Store) {
  }


  /**
   * function to submit the contact for after checking validations and reset it
   */

  submitContact() {
    if (this.contactUs.valid) {
      this.toastr.success('success');
      console.log('error, ', this.contactUs.controls.email.errors);
      this.contactUs.reset();
      this.formSubmitted = false;
    } else {
      this.formSubmitted = true;
      this.toastr.warning('Please enter valid details');
      console.log('error, ', this.contactUs.controls.email.errors);
    }
  }
}
