import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonEntrePageRoutingModule } from './bon-entre-routing.module';

import { BonEntrePage } from './bon-entre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonEntrePageRoutingModule
  ],
  declarations: [BonEntrePage]
})
export class BonEntrePageModule {}
