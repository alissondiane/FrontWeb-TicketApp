import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaAdminRoutingModule } from './vista-admin-routing.module';
import { VistaAdminComponent } from './components/vista-admin/vista-admin.component';


@NgModule({
  imports: [
    CommonModule,
    VistaAdminRoutingModule
  ],
  declarations: [VistaAdminComponent]
})
export class VistaAdminModule { }
