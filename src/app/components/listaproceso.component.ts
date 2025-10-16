import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Proceso } from '../../models/Proceso';

@Component({
  selector: 'app-listaproceso', 
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './listaproceso.component.html',
  styleUrls: ['./listaproceso.component.css'] 
})
export class ListaprocesoComponent implements OnInit {

  procesos: Proceso[] = [];
  procesosFiltrados: Proceso[] = [];
  filtroTexto: string = '';
  filtroEstado: string = 'todos'; 
  filtroCategoria: string = 'todos'; 

  ngOnInit(): void {
    this.obtenerProcesos(); [cite_start]// HU-07: ver la lista de procesos [cite: 42]
  }

  obtenerProcesos(): void {
    // Datos de ejemplo
    this.procesos = [
      { id: 1, nombre: 'Incorporación de Empleado', descripcion: 'Flujo de contratación.', categoria: 'Recursos Humanos', estado: 'publicado' },
      { id: 2, nombre: 'Cierre Contable Mensual', descripcion: 'Cierre de libros.', categoria: 'Finanzas', estado: 'borrador' },
      { id: 3, nombre: 'Gestión de Quejas y Reclamos', descripcion: 'Flujo PQR.', categoria: 'Servicio al Cliente', estado: 'publicado' },
      { id: 4, nombre: 'Proceso de Baja', descripcion: 'Flujo inactivo.', categoria: 'Pruebas', estado: 'inactivo' },
    ];
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let listaTemporal = this.procesos;

    [cite_start]// Filtrar por estado y categoría (Criterio HU-07) [cite: 44]
    if (this.filtroEstado !== 'todos') {
      listaTemporal = listaTemporal.filter(p => p.estado === this.filtroEstado);
    }
    // ... (lógica de filtro de estado/categoría/texto) ...
    
    [cite_start]// Búsqueda por texto (Criterio HU-07) [cite: 44]
    if (this.filtroTexto) {
      const textoLower = this.filtroTexto.toLowerCase();
      listaTemporal = listaTemporal.filter(p => 
        p.nombre.toLowerCase().includes(textoLower) || 
        p.descripcion.toLowerCase().includes(textoLower)
      );
    }

    this.procesosFiltrados = listaTemporal;
  }
  
  crearNuevoProceso(): void {
    [cite_start]// HU-04: Crear proceso [cite: 24]
    console.log('Navegar a la pantalla de creación de proceso (HU-04)');
  }
}