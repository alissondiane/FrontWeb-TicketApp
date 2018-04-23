import { Component, OnInit } from '@angular/core';
import { MenuSemanal} from '../../model/MenuSemanal';
import { MenuDiario} from '../../model/MenuDiario';

@Component({
  selector: 'app-vista-menu-nuevo',
  templateUrl: './vista-menu-nuevo.component.html',
  styleUrls: ['./vista-menu-nuevo.component.css']
})
export class VistaMenuNuevoComponent implements OnInit {

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
  GuardarMenu(menu){

    alert("Menu guardado con exito");
  }
}
