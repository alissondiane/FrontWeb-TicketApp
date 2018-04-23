import { Comida } from './Comida';
export class MenuDiario {
    dia: string;
    comidas: Comida[] ;
    
   
    constructor(dia) {
        this.dia = dia;
        this.comidas = new Array(3);
        this.comidas[0]= new Comida("DESAYUNO","pan con queso","pan con queso");
        this.comidas[1]= new Comida("ALMUERZO","arroz con pollo","arroz con pollo");
        this.comidas[2]= new Comida("CENA","pollo a la olla","pollo a la olla");
        
    }
 
}