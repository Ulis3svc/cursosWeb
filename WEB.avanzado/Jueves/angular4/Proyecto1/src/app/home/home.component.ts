import { Component } from '@angular/core';
//import {Empleado} from "./"; //No se pone el .ts

@Component({  //Decorador de JS
  selector: 'app-home', 	//etiqueta de HTML <app-root>. Cambiamos "root" por el 
  							//nombre de nuestra etiqueta. En esta caso "home"
  templateUrl: './home.component.html',

})
export class HomeComponent { //Clase HolaMundo
  nombreDelComponente = "Componente home";  //propiedad
  public fecha;
 
  constructor(){
  		this.fecha=new Date(2017, 5, 30, 13,5);

  }

 }
