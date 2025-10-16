import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Contiene *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // NECESARIO para [(ngModel)]
import { Proceso } from '../models/Proceso';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-listaproceso', 
  standalone: true, 
  imports: [
    CommonModule, 
    FormsModule 
  ], 
  templateUrl: './listaproceso.component.html',
  //styleUrls: ['./listaproceso.component.css']
})
export class ListaprocesoComponent implements OnInit {

  // Lista original de procesos
  procesos: Proceso[] = [];
  procesosFiltrados: Proceso[] = [];

  // Variables de enlace para los filtros
  filtroTexto: string = '';
  filtroEstado: 'todos' | 'borrador' | 'publicado' | 'inactivo' = 'todos'; 
  filtroCategoria: string = 'todos'; 

  // Categorías de ejemplo para el filtro
  categoriasDisponibles: string[] = ['Recursos Humanos', 'Finanzas', 'Servicio al Cliente', 'Legal'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.obtenerProcesos();
  }

  obtenerProcesos(): void {
    const empresaId = 'EMP-001'; 
    // Datos de prueba (Misma lógica anterior)
    this.procesos = [
      { idProceso: 'P-001', nombre: 'Incorporación de Empleado', descripcion: 'Flujo para la contratación de nuevo personal.', categoria: 'Recursos Humanos', estado: 'publicado', idEmpresa: empresaId },
      { idProceso: 'P-002', nombre: 'Cierre Contable Mensual', descripcion: 'Pasos para el cierre de libros al final de mes.', categoria: 'Finanzas', estado: 'borrador', idEmpresa: empresaId },
      { idProceso: 'P-003', nombre: 'Gestión de Quejas y Reclamos', descripcion: 'Flujo de atención al cliente para PQR.', categoria: 'Servicio al Cliente', estado: 'publicado', idEmpresa: empresaId },
      { idProceso: 'P-004', nombre: 'Proceso Eliminado de Prueba', descripcion: 'Este proceso está inactivo por eliminación.', categoria: 'Legal', estado: 'inactivo', idEmpresa: empresaId },
      { idProceso: 'P-005', nombre: 'Actualización de Documentos', descripcion: 'Flujo para la revisión anual de documentos.', categoria: 'Legal', estado: 'publicado', idEmpresa: empresaId },
      { idProceso: 'P-006', nombre: 'Selección de Proveedores', descripcion: 'Etapas de evaluación y selección de proveedores.', categoria: 'Finanzas', estado: 'borrador', idEmpresa: empresaId },
      { idProceso: 'P-007', nombre: 'Auditoría Interna', descripcion: 'Proceso de revisión de cumplimientos.', categoria: 'Legal', estado: 'publicado', idEmpresa: empresaId },
    ];

    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let listaTemporal = this.procesos;

    if (this.filtroEstado !== 'todos') {
      listaTemporal = listaTemporal.filter(p => p.estado === this.filtroEstado);
    }

    if (this.filtroCategoria !== 'todos') {
      listaTemporal = listaTemporal.filter(p => p.categoria === this.filtroCategoria);
    }

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
    this.router.navigate(['/crear-proceso']);
  }
}
