import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaAdminComponent } from './components/vista-admin/vista-admin.component';

const routes: Routes = [
 { path: 'vistaAdmin', component:  VistaAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VistaAdminRoutingModule {
}
