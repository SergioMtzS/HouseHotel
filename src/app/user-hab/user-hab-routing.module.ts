import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHabPage } from './user-hab.page';

const routes: Routes = [
  {
    path: '',
    component: UserHabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserHabPageRoutingModule {}
