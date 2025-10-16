import { Routes } from '@angular/router';
import { ListaprocesoComponent } from './components/listaproceso/listaproceso.component';

export const routes: Routes = [
    // Ruta para el listado de procesos (Temporalmente la ruta raíz)
  { path: 'procesos', component: ListaprocesoComponent }, 
  // Redirigir la ruta principal (/) al listado
  { path: '', redirectTo: '/procesos', pathMatch: 'full' }, 
  // Puedes añadir la ruta para Login y Registro aquí.
];
