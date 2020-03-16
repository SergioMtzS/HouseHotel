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
      FirstName: [''],
      LastName: [''],
        City: [''],
        Country: [''],
        District: ['']
    })
  }

  getCustomerData(id) {
    this.customerAPI.getCustomer(id).subscribe(res => {

        console.log(res['Status'])
      this.updateCustomerForm.setValue({
        Address: res['Address'],
        FirstName: res['FirstName'],
        LastName: res['LastName'],
        City: res['City'],
        Country: res['Country'],
        District: res['District']

      });
    });
  }

  updateForm() {
    if (!this.updateCustomerForm.valid) {
      return false;
    } else {
      console.log(this.updateCustomerForm.value)
      this.customerAPI.updateCustomer(this.id, this.updateCustomerForm.value)
        .subscribe((res) => {
          //console.log(res)
          this.updateCustomerForm.reset();
          this.router.navigate(['/home']);
        })
    }
  }

}
