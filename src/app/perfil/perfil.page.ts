import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../shared/customer.service';
//import { ActivatedRoute, Router } from "@angular/router";
//import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  A: number;
  B:number;
  nombre:String;
  calle: String;
  apellido:String;
  Habitaciones: any = [];
  Habitaciones2: any = [];
  Habitaciones3: any = [];
  cont: number;
  search: String;
  //updateCustomerForm: FormGroup;
  obj: Object;
  idH: any;

  constructor(private API : CustomerService/*,private actRoute: ActivatedRoute,
    private router: Router,public fb: FormBuilder*/) {

    this.nombre=API.obj['FirstName']
    this.apellido=API.obj['LastName']  
    this.calle=API.obj['Address']

  }

  ionViewDidEnter() {
    this.API.getCustomerListHab().subscribe((res) => {
      console.log(res)
      this.Habitaciones = res;
    })
  }

  conso(hab, i){

    this.API.objH=hab;
    this.API.image=hab.images.picture_url;
     console.log(typeof(hab+i))
     
   }

  ngOnInit() {
    this.cont=0;
    
    console.log(this.API.obj['_id'])
  }

  findPrice(){
    this.cont=1;
    this.API.getHabPrice(this.A,this.B).subscribe((res)=>{
       
      this.Habitaciones3=res;
      console.log(this.Habitaciones3)
  })
  }

  findtype(){

    if(this.search==""){
        console.log("empty")
    }else{
      this.API.getHabFind(this.search).subscribe((res)=>{
       
        this.Habitaciones2=res;
        console.log(this.Habitaciones2)
    })
    }
  
  }


  cons(){
    console.log(this.search)
    this.findtype();
  }

  pushHab(habitacion, i) {
    if (window.confirm('Rentar esta habitacion ? ' + habitacion._id)) { 
      this.idH=habitacion._id;
      this.updateForm();
      
    }
  }

  updateForm() {
    
      this.API.updateCustomerPush(this.API.obj['_id'], this.idH) 
      .subscribe((res) => {
      console.log(res)
    
      })
        
    
  }



}
