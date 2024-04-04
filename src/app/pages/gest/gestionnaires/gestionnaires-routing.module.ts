import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionnairesPage } from './gestionnaires.page';

const routes: Routes = [
  {
    path: '',
    component: GestionnairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionnairesPageRoutingModule {}
