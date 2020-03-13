import { async } from '@angular/core/testing';
import { Component, OnInit, NgZone } from '@angular/core';
import { CustomerService } from './../shared/customer.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { onErrorResumeNext } from 'rxjs';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})

export class AddCustomerPage implements OnInit {

  CustomerForm: FormGroup;

  constructor(
    private customerAPI: CustomerService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.CustomerForm = this.fb.group({
      Address: [''],
      City:[''],
      Country: [''],
      District: [''],
      FirstName: [''],
      LastName: [''],
      Status: [true]
    })
  }

  ngOnInit() { }

  onFormSubmit() {
    if (!this.CustomerForm.valid) {
      return false;
    } else {
      this.customerAPI.addCustomer(this.CustomerForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.CustomerForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }

}
