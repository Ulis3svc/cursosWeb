import { Component } from '@angular/core';

@Component({  //Decorador de JS
  selector: 'app-raiz', 	//etiqueta de HTML <app-root>. Cambiamos "root" por el 
  							//nombre de nuestra etiqueta. En esta caso "raiz"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //Clase HolaMundo
  title = 'Hola Mundo';  //propiedad
 }
