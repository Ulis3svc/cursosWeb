import { Component } from '@angular/core';

@Component({  //Decorador de JS
  selector: 'app-verdura', 	//etiqueta de HTML <app-root>. Cambiamos "root" por el 
  							//nombre de nuestra etiqueta. En esta caso "raiz"
  templateUrl: 'verduras.component.html'
})

export class VerdurasComponent { //Clase Verdura 
   //propiedad y atriburtos
   public nombreDelComponente = "Componente de Verduras";
   public numeroDelComponente = 2;
 }