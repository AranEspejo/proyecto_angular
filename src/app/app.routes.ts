import { Routes } from '@angular/router';
import { ListaprocesoComponent } from './components/listaproceso.component';
import { CrearprocesoComponent } from './components/crearproceso.component';
import { LoginComponent } from './components/login.component';
import { RegistroComponent } from './components/registro.component';

export const routes: Routes = [
    // Ruta para el listado de procesos
  { path: 'procesos', component: ListaprocesoComponent }, 
  { path: 'crear-proceso', component: CrearprocesoComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  // Redirigir la ruta principal (/) al listado
  { path: '', redirectTo: '/procesos', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/procesos'}
];
