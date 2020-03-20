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
  id: number;
  
  

  constructor(
    private customerAPI: CustomerService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.CustomerForm = this.fb.group({
      _id:[this.customerAPI.id],
      Address: [''],
      City:[''],
      Country: [''],
      District: [''],
      FirstName: [''],
      LastName: [''],
      Status: [true]
    })
    
 
  }

  ngOnInit() {
   console.log(this.customerAPI.id)
    
   }

   

  onFormSubmit() {
    
    if (!this.CustomerForm.valid) {
      return false;
    } else {
 
      this.customerAPI.addCustomer(this.CustomerForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.CustomerForm.reset();
            this.findOne();
            this.router.navigate(['/home']);
          })
        });
    }
  }

  findOne(){
    this.customerAPI.getCustomerFindOne().subscribe((res)=>{
        this.id=res['_id'];
        this.customerAPI.id=Number(this.id+1);

          })
   }

}
