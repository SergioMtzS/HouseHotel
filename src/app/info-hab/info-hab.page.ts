import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../shared/customer.service';

@Component({
  selector: 'app-info-hab',
  templateUrl: './info-hab.page.html',
  styleUrls: ['./info-hab.page.scss'],
})
export class InfoHabPage implements OnInit {

  image: String;
  type: String;
  name: String;
  price: number;

  constructor(public API : CustomerService) {
    this.image=API.image;
    this.type=API.objH['property_type']  
    this.name=API.objH['name']  
    this.price=API.objH['price']  
    
    


   }

  ngOnInit() {
    console.log(this.API.objH)
  }

}
