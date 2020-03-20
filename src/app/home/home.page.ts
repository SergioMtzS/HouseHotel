import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../shared/customer.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Customers: any = [];
  Customers2: any = [];
  id: number;
  search: String;

  updateCustomerForm: FormGroup;


  constructor(
    private CustomerService: CustomerService,
    private customerAPI: CustomerService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  
  ) {
  }

  ngOnInit() {
    this.updateCustomerForm = this.fb.group({
      Status: [false]
    })
    this.findOne();

    this.search="";
   }

  cons(){
    console.log(this.search)
    

  }

  find(){

    if(this.search==""){
        console.log("empty")
    }else{
      this.CustomerService.getCustomerFind(this.search).subscribe((res)=>{
       
        this.Customers2=res;
        console.log(this.Customers2)
    })
    }
  
  }

  ionViewDidEnter() {
    this.CustomerService.getCustomerList().subscribe((res) => {
      console.log(res)
      this.Customers = res;
    })
  }

  deleteCustomer(customer, i) {
    if (window.confirm('Do you want to delete user? ' + typeof customer._id)) {
      this.CustomerService.deleteCustomer(customer._id)
        .subscribe(() => {
          this.Customers.splice(i, 1);
          console.log('Customer deleted!')
          this.router.navigateByUrl('/home');
          
        }
        )
    }
  }


  logicCostumer(customer, i) {
    if (window.confirm('Do you want to logic delete? ' + typeof customer._id)) {
      this.id=customer._id;
      this.updateCustomerForm = this.fb.group({
        Status:[false]
      })
      console.log(this.id);
      console.log(this.updateCustomerForm.value)
      this.updateForm();
      location.reload();
    }
  }

 /* getCustomerData(id) {
    this.customerAPI.getCustomer(id).subscribe(res => {
      this.updateCustomerForm.setValue({
        Address: res['Address'],
        FirstName: res['FirstName'],
        LastName: res['LastName'],
        City: res['City'],
        Country: res['Country'],
        District: res['District']

      });
    });
  }*/

  findOne(){
    this.customerAPI.getCustomerFindOne().subscribe((res)=>{
        
      if(res==null){
        console.log("null");
        this.id=1;
        this.customerAPI.id=Number(this.id);
      }else{
        console.log("Su tipo es : " +typeof(res['_id']))
        this.id=res['_id'];
        this.customerAPI.id=Number(this.id+1);
      }
          })
   }

   conso(customer, i){

    this.customerAPI.obj=customer;
     console.log(typeof(customer+i))
     
   }

 updateForm() {
    if (!this.updateCustomerForm.valid) {
      return false;
    } else {
      console.log(this.id)
      this.customerAPI.updateCustomer(this.id, this.updateCustomerForm.value) 
      .subscribe((res) => {
        //console.log(res)
        this.updateCustomerForm.reset();
       
      })
        
    }
  }
}
