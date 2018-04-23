import { Component, OnInit } from '@angular/core';
import { MenuDiario} from '../../model/MenuDiario';

@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent implements OnInit {
  menu : MenuDiario[];
  constructor() { }

  ngOnInit() {
    this.menu = new Array(7);
    this.menu[0] = new MenuDiario("LUNES");
    this.menu[1] = new MenuDiario("MARTES");
    this.menu[2] = new MenuDiario("MIERCOLES");
    this.menu[3] = new MenuDiario("JUEVES");
    this.menu[4] = new MenuDiario("VIERNES");
    this.menu[5] = new MenuDiario("SABADO");
    this.menu[6] = new MenuDiario("DOMINGO");
    console.log(this.menu);
  }

}
