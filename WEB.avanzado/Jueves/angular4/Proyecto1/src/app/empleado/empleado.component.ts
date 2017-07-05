import { Component } from '@angular/core';
import {Empleado} from "./empleado"; //No se pone el .ts


@Component({  //Decorador de JS
  selector: 'app-empleado', 	//etiqueta de HTML <app-root>. Cambiamos "root" por el 
  							//nombre de nuestra etiqueta. En esta caso "raiz"
  templateUrl: 'empleado.component.html'
})

export class EmpleadoComponent { //Clase Fruta 
   //propiedad y atriburtos
   public nombreDelComponente = "Componente de Empleado";
   public nombre:string;
   public edad:number;
   public empleado:Empleado;
   public trabajadores:Array<Empleado>;
   public bandera: false;
  // public mayorEdad: boolean = true;
   //public var1:any = "Viveros";
   //public var2:any = 2017;

   //Array
  // public hobbies:Array<string> = ['Ver Netflix', 'Escuchar Música', 'Ir al cine'];
   //public cosasFavoritas:Array<any> = ['Dormir', 69, 'FI'];

   ///TWDB. Dos maneras de hacer referencia a la página
   public colorSeleccionado: string;

   constructor(){
   		/*this.nombre = "Ulises";
   		this.edad = 21;*/
   		this.empleado = new Empleado("Ulises", 18, "CEO", true, "white");
   		this.trabajadores = [
   			new Empleado("Marco", 21, "Programador", false, "red"),
   			new Empleado("José Luis", 50, "Chaca", true, "orange"),
   			new Empleado("Daves", 21, "Cyborg", true, "yellow"),
   			new Empleado("Wako", 50, "Guaco", false, "grey")
   		];
   }
   ngOnInit(){
   		/*this.saludar(this.nombre);
   		this.varYlet();*/
   		console.log(this.empleado);
   }
   		//Métodos
   		/*saludar(nombre){
   			alert("Hola Soy " + nombre);
   		}

   		//Diferencia entre var y let
   		varYlet(){
   			var numero = 5;
   			if (numero === 5) {
   				// code...
   				//numero = 8;
   				let numero = 8;  /*let sirve para hacer variables que vivan dentro de un scope. */
   			//	console.log(numero);
   			//}
   			//console.log(numero);
   		//}

       cambiarBono(variableBono){
           this.empleado.bono = variableBono;
           this.trabajadores[0].bono = variableBono;
       }

       //TWDB
       getColorSeleccionado(){
         console.log(this.colorSeleccionado)
       }


    }