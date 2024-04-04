import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonEntrePage } from './bon-entre.page';

const routes: Routes = [
  {
    path: '',
    component: BonEntrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonEntrePageRoutingModule {}
