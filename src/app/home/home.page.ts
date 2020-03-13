import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../shared/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Customers: any = [];


  constructor(
    private CustomerService: CustomerService
  ) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.CustomerService.getCustomerList().subscribe((res) => {
      console.log(res)
      this.Customers = res;
    })
  }

  deleteCustomer(customer, i) {
    if (window.confirm('Do you want to delete user?')) {
      this.CustomerService.deleteCustomer(customer.FirstName)
        .subscribe(() => {
          this.Customers.splice(i, 1);
          console.log('Customer deleted!')
        }
        )
    }
  }
}
