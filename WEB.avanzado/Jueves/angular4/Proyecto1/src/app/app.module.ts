import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//Aquí mandamos a llamar a los componentes
import { FrutaComponent } from './fruta/fruta.component';
import { VerdurasComponent } from './verduras/verduras.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';

//rutas
import{routing, appRoutingProviders} from './app.routing';

@NgModule({
  declarations: [ //directivas de framework
    AppComponent,
    FrutaComponent,
    VerdurasComponent,
    EmpleadoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
