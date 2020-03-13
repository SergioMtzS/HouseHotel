import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddCustomerPageRoutingModule } from './add-customer-routing.module';

import { AddCustomerPage } from './add-customer.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddCustomerPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddCustomerPage]
})
export class AddCustomerPageModule { }
