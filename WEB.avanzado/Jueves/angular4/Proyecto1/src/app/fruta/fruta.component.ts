import { Component } from '@angular/core';

@Component({  //Decorador de JS
  selector: 'app-fruta', 	//etiqueta de HTML <app-root>. Cambiamos "root" por el 
  							//nombre de nuestra etiqueta. En esta caso "raiz"
  templateUrl: 'fruta.component.html'
})

export class FrutaComponent { //Clase Fruta 
   //propiedad y atriburtos
   public nombreDelComponente = "Componente de Frutas";
   public numeroDelComponente = 1;
   public nombre = 'Fruta';
 }