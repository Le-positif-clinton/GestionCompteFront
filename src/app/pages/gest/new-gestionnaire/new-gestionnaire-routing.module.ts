import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGestionnairePage } from './new-gestionnaire.page';

const routes: Routes = [
  {
    path: '',
    component: NewGestionnairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewGestionnairePageRoutingModule {}
