import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserHabPageRoutingModule } from './user-hab-routing.module';

import { UserHabPage } from './user-hab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserHabPageRoutingModule
  ],
  declarations: [UserHabPage]
})
export class UserHabPageModule {}
