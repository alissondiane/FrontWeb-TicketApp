import { MenuDiario } from './MenuDiario';
export class MenuSemanal {
 
    menues: MenuDiario[] ;

    
    constructor() {
        this.menues = new Array(7);
        this.menues[0] = new MenuDiario("LUNES");
        this.menues[1] = new MenuDiario("MARTES");
        this.menues[2] = new MenuDiario("MIERCOLES");
        this.menues[3] = new MenuDiario("JUEVES");
        this.menues[4] = new MenuDiario("VIERNES");
        this.menues[5] = new MenuDiario("SABADO");
        this.menues[6] = new MenuDiario("DOMINGO");
        console.log(this.menues);

    }
 
}