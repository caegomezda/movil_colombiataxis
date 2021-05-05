import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicoPlacaPage } from './pico-placa.page';

const routes: Routes = [
  {
    path: '',
    component: PicoPlacaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicoPlacaPageRoutingModule {}
