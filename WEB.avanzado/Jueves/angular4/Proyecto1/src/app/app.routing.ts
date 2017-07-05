import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaComponent } from './fruta/fruta.component';
import { VerdurasComponent } from './verduras/verduras.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'fruta', component: FrutaComponent},
	{path: 'verduras', component: VerdurasComponent},
	{path: 'empleado', component: EmpleadoComponent},
	{path: '', component: HomeComponent},    //Componente home cuando no tenga ninguna ruta
	{path: '**', component: HomeComponent}   //Error 404
];

export const appRoutingProviders: any [] =[];  //lo necesita angular
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);