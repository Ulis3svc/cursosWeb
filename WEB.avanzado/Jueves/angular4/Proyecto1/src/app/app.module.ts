import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Aquí mandamos a llamar a los componentes
import { FrutaComponent } from './fruta/fruta.component';
import { VerdurasComponent } from './verduras/verduras.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  declarations: [ //directivas de framework
    AppComponent,
    FrutaComponent,
    VerdurasComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
