import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css'] // Si quieres añadir estilos CSS
})
export class LoginComponent {
  // Modelo para enlazar los inputs del formulario
  credenciales = {
    email: '',
    password: ''
  };
  
  errorMensaje: string | null = null;
  
  constructor(private router: Router) { }

  /**
   * Maneja el envío del formulario de inicio de sesión.
   */
  onSubmit(): void {
    this.errorMensaje = null; // Limpiar mensajes de error anteriores

    if (!this.credenciales.email || !this.credenciales.password) {
      this.errorMensaje = 'Por favor, ingrese su correo electrónico y contraseña.';
      return;
    }
    
    // --- LÓGICA DE AUTENTICACIÓN FUTURA AQUÍ (ej. llamando a un AuthService) ---
    console.log('Intentando iniciar sesión con:', this.credenciales.email);

    // SIMULACIÓN: Si las credenciales son "user@test.com" y "password", redirigir.
    if (this.credenciales.email === 'user@test.com' && this.credenciales.password === 'password') {
        console.log('Inicio de sesión exitoso simulado. Redirigiendo a /procesos');
        this.router.navigate(['/procesos']);
    } else {
        this.errorMensaje = 'Credenciales incorrectas. (Solo user@test.com / password es válido en esta demo).';
    }
  }

  // Método para navegar al registro
  goToRegister(): void {
    this.router.navigate(['/registro']);
  }
}
