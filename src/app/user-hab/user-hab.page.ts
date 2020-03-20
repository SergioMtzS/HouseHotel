import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../shared/customer.service';

@Component({
  selector: 'app-user-hab',
  templateUrl: './user-hab.page.html',
  styleUrls: ['./user-hab.page.scss'],
})
export class UserHabPage implements OnInit {
  nombre:String;
  calle: String;
  apellido:String;
  Habitaciones: any = [];
  constructor(private API : CustomerService) { 
    this.nombre=API.obj['FirstName']
    this.apellido=API.obj['LastName']  
    this.calle=API.obj['Address']

  }

  ngOnInit() {
    console.log(this.API.obj['_id'])
  }

  ionViewDidEnter() {
      
    this.API.getCustomerHab(this.API.obj['_id']).subscribe((res) => {
      console.log(res[0]['bedrooms'])
      this.Habitaciones = res[0]['habitacion'];
      console.log(res[0]['habitacion'])
    })
  }

}
