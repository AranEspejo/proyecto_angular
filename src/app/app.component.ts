import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Solo necesitamos RouterOutlet para la plantilla
import { CommonModule } from '@angular/common'; // Incluir CommonModule para directivas básicas si fueran necesarias

@Component({
  selector: 'app-root',
  standalone: true,
  // Aquí SÍ es correcto tener RouterOutlet y CommonModule, ya que son módulos que se usan en la plantilla.
  imports: [RouterOutlet, CommonModule], 
  template: `
    <!-- 
      El <router-outlet> es el marcador de posición. 
      Aquí se carga el componente que esté activo en la URL, según app.routes.ts.
    -->
    <router-outlet></router-outlet>
  `,
  //styleUrl: './app.component.css'
})
export class AppComponent {
  // Ya no necesitamos la propiedad 'title' si no la usamos en la plantilla.
}
