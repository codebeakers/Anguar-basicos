import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
          <h1>Hola mundo</h1>
          <h2>La base es <strong>{{base}}</strong></h2>

          <button (click)="acomular(base)"> + {{base}} </button>

          <span> {{ numero }} </span>

          <button (click)= "acomular(-base)"> - {{base}} </button>


         `

})
export class contadorcomponent {
    title: string= 'Proyecto';
    numero: number = 10; 
    base: number = 5;
  
    acomular(valor: number) {
      this.numero += valor;
    }
} 