import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VistaAdminRoutingModule } from './vista-admin-routing.module';
import { VistaAdminComponent } from './components/vista-admin/vista-admin.component';
import { VistaMenuNuevoComponent } from './components/vista-menu-nuevo/vista-menu-nuevo.component';
import { VistaAdminService } from './services/vista-admin.service';


@NgModule({
  imports: [
    CommonModule,
    VistaAdminRoutingModule,
    FormsModule,
  ],
  declarations: [VistaAdminComponent, VistaMenuNuevoComponent],
  providers: [VistaAdminService]
})
export class VistaAdminModule { }
