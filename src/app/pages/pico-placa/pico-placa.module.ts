import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicoPlacaPageRoutingModule } from './pico-placa-routing.module';

import { PicoPlacaPage } from './pico-placa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicoPlacaPageRoutingModule
  ],
  declarations: [PicoPlacaPage]
})
export class PicoPlacaPageModule {}
