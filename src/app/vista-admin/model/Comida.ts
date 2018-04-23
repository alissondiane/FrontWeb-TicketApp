
export class Comida {
 
    nombre: string;
    descripcion: string;
    numeroRaciones: number;
    dia: string;
    comidaTipo: string;
    inicioReserva: String;
    finReserva:string;
    
    constructor(comidatipo,nombre,descripcion) {
      this.nombre=nombre;
      this.descripcion=descripcion;
      this.dia= "";
      this.numeroRaciones= 0;
      this.comidaTipo= comidatipo;
      this.inicioReserva="";
      this.finReserva="";
    }
 
}