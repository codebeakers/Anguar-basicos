import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
  
export class HeroeComponent{
    nombre: string = 'Iroman';
    edad: number = 45;

    get nombrecapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obternerNombre(): String{
     return `${this.nombre} - ${this.edad}`;
    } 

    cambiarNombre():void {
     this.nombre = 'spiderman';
    }

}