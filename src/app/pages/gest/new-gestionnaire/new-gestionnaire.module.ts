import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGestionnairePageRoutingModule } from './new-gestionnaire-routing.module';

import { NewGestionnairePage } from './new-gestionnaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewGestionnairePageRoutingModule
  ],
  declarations: [NewGestionnairePage]
})
export class NewGestionnairePageModule {}
