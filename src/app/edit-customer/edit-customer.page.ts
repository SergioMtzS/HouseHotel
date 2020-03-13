import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.page.html',
  styleUrls: ['./edit-customer.page.scss'],
})
export class EditCustomerPage implements OnInit {

  updateCustomerForm: FormGroup;
  id: any;

  constructor(
    private customerAPI: CustomerService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getCustomerData(this.id);
    this.updateCustomerForm = this.fb.group({
      Address: [''],
      FirstName: ['']
    })
  }

  getCustomerData(id) {
    this.customerAPI.getCustomer(id).subscribe(res => {
      this.updateCustomerForm.setValue({
        Address: res[''],
        FirstName: res['artist']
      });
    });
  }

  updateForm() {
    if (!this.updateCustomerForm.valid) {
      return false;
    } else {
      this.customerAPI.updateCustomer(this.id, this.updateCustomerForm.value)
        .subscribe((res) => {
          console.log(res)
          this.updateCustomerForm.reset();
          this.router.navigate(['/home']);
        })
    }
  }

}
