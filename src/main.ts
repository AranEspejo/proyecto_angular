 import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Importa el componente raíz
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importa tus rutas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
