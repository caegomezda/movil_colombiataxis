import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'modulos',
    loadChildren: () => import('./pages/modulos/modulos.module').then( m => m.ModulosPageModule)
  },
  {
    path: 'contactenos',
    loadChildren: () => import('./pages/contactenos/contactenos.module').then( m => m.ContactenosPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./pages/ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'pico-placa',
    loadChildren: () => import('./pages/pico-placa/pico-placa.module').then( m => m.PicoPlacaPageModule)
  },
  {
    path: 'tarifas',
    loadChildren: () => import('./pages/tarifas/tarifas.module').then( m => m.TarifasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
