import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Proceso } from '../models/Proceso';
import { ProcesoService } from '../services/proceso.service';

@Component({
  selector: 'app-crearproceso',
  standalone: true,
  // Necesitamos CommonModule para *ngIf y *ngFor, y FormsModule para [(ngModel)]
  imports: [CommonModule, FormsModule],
  // ¡ESTA LÍNEA DEBE APUNTAR A TU ARCHIVO HTML CON EL FORMULARIO COMPLETO!
  templateUrl: './crearproceso.component.html', 
  //styleUrls: ['./crearproceso.component.css'] // Si tienes un archivo CSS para este componente
})
export class CrearprocesoComponent implements OnInit {

  // Objeto para enlazar los campos del formulario
  nuevoProceso: { nombre: string, descripcion: string, categoria: string, estado: 'borrador' | 'publicado' | '' } = {
    nombre: '',
    descripcion: '',
    categoria: '',
    estado: 'borrador'
  };

  categoriasDisponibles: string[] = [];
  creacionExitosa: boolean = false;

  // Inyectamos Router para navegar y ProcesoService para crear
  constructor(
    private router: Router,
    //private procesoService: ProcesoService
  ) { }

  ngOnInit(): void {
    // Obtenemos las categorías del servicio para poblar el select
    this.categoriasDisponibles = this.procesoService.categorias;
  }

  onSubmit(): void {
    // 1. Validar que todos los campos requeridos estén llenos (el form HTML ya ayuda con esto)
    if (!this.nuevoProceso.nombre || !this.nuevoProceso.descripcion || !this.nuevoProceso.categoria) {
      console.error('Faltan campos obligatorios.');
      // Aquí podrías mostrar un mensaje de error en la UI si el formulario no es válido
      return;
    }

    // 2. Usar el servicio para obtener el objeto Proceso completo con ID y Empresa
    const procesoParaGuardar: Proceso = this.procesoService.getNewProcessTemplate({
        nombre: this.nuevoProceso.nombre,
        descripcion: this.nuevoProceso.descripcion,
        categoria: this.nuevoProceso.categoria,
        estado: this.nuevoProceso.estado as ('borrador' | 'publicado') // Cast seguro porque el select tiene valores definidos
    });

    // 3. Guardar el nuevo proceso a través del servicio
    this.procesoService.crearProceso(procesoParaGuardar);

    // 4. Mostrar mensaje de éxito y resetear el formulario (o navegar)
    this.creacionExitosa = true;

    // Reseteamos el formulario después de 2 segundos y volvemos a la lista
    setTimeout(() => {
        this.volverALista();
    }, 2000);
  }

  volverALista(): void {
    this.router.navigate(['/procesos']);
  }
}
