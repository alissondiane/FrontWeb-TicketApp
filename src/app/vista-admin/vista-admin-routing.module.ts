import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaAdminComponent } from './components/vista-admin/vista-admin.component';
import { VistaMenuNuevoComponent } from './components/vista-menu-nuevo/vista-menu-nuevo.component';

const routes: Routes = [
 { path: 'vistaAdmin', component:  VistaAdminComponent },
 { path: 'vistaMenuNuevo', component:  VistaMenuNuevoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VistaAdminRoutingModule {
}
