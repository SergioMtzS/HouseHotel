import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EditCustomerPageRoutingModule } from './edit-customer-routing.module';

import { EditCustomerPage } from './edit-customer.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EditCustomerPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditCustomerPage]
})
export class EditCustomerPageModule { }
