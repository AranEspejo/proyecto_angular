import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Módulo común de Angular

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], 
  template: `
    <!-- RouterOutlet es donde Angular carga los componentes definidos en app.routes.ts -->
    <router-outlet></router-outlet>
  `,
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PROYECTO_ANGULAR';
}