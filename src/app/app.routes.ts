import { Routes } from '@angular/router';
import { ListaprocesoComponent } from './components/listaproceso.component';

export const routes: Routes = [
    // Ruta para el listado de procesos
  { path: 'procesos', component: ListaprocesoComponent }, 
  //{ path: 'login', component: LoginComponent },
  // { path: 'registro', component: RegistroComponent },
  // Redirigir la ruta principal (/) al listado
  { path: '', redirectTo: '/procesos', pathMatch: 'full' }, 
  // Puedes añadir la ruta para Login y Registro aquí.
  { path: '**', redirectTo: '/procesos'}
];
