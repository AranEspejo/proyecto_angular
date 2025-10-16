import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.component.html',
  //styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Modelo para enlazar los inputs del formulario
  datosRegistro = {
    nombre: '',
    email: '',
    password: ''
  };

  errorMensaje: string | null = null;
  exitoRegistro: boolean = false;

  constructor(private router: Router) { }

  /**
   * Maneja el envío del formulario de registro.
   */
  onSubmit(): void {
    this.errorMensaje = null;
    this.exitoRegistro = false;

    if (!this.datosRegistro.nombre || !this.datosRegistro.email || !this.datosRegistro.password) {
      this.errorMensaje = 'Todos los campos son obligatorios.';
      return;
    }

    // --- LÓGICA DE REGISTRO FUTURA AQUÍ (ej. llamando a un AuthService) ---
    console.log('Intentando registrar nuevo usuario:', this.datosRegistro.email);

    // SIMULACIÓN: Registro exitoso
    this.exitoRegistro = true;
    
    // Redirigir al login después de un breve mensaje
    setTimeout(() => {
        this.router.navigate(['/login']);
    }, 2000);
  }

  // Método para navegar al login
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
