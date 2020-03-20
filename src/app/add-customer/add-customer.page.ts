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
<<<<<<< HEAD
  
=======
  _idNumber: Number;
  Address:String;
  FirstName:String;
  LastName:String;
  City:String;
  Country:String;
  District:String;
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760
  

  constructor(
    private customerAPI: CustomerService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.CustomerForm = this.fb.group({
<<<<<<< HEAD
      _id:[this.customerAPI.id],
=======
      _id:[this._idNumber],
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760
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
<<<<<<< HEAD
   console.log(this.customerAPI.id)
    
   }

   
=======
    this.findOne();
    
   }

   create(){

    this.CustomerForm = this.fb.group({
      _id:[this._idNumber],
      Address: [this.Address],
      City:[this.City],
      Country: [this.Country],
      District: [this.District],
      FirstName: [this.FirstName],
      LastName: [this.LastName],
      Status: [true]
    
    })
    
    console.log(this.CustomerForm.value)

   }

   findOne(){
    this.customerAPI.getCustomerFindOne().subscribe((res)=>{

      this.id=res['_id']
      this._idNumber=Number(this.id+1)
      console.log(this._idNumber)
     
          })
   }
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760

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
