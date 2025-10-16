import { Injectable, signal } from '@angular/core';
import { Proceso } from '../models/Proceso';
import { Router } from '@angular/router';

@Injectable({
  // 'root' significa que es un singleton y está disponible en toda la aplicación.
  providedIn: 'root'
})
export class ProcesoService {

  // Lista de procesos como señal (estado reactivo para Angular).
  // Los datos iniciales de prueba ahora coinciden con la estructura de la clase Proceso.
  private _procesos = signal<Proceso[]>([
    // INSTANCIAS DE LA CLASE Proceso con tus nombres de propiedades: idProceso, idEmpresa
    new Proceso('p-001', 'Incorporación de Empleado', 'Flujo de contratación de nuevo personal.', 'Recursos Humanos', 'publicado', 'e-001'),
    new Proceso('p-002', 'Cierre Contable Mensual', 'Pasos para el cierre de libros al final de mes.', 'Finanzas', 'borrador', 'e-001'),
    new Proceso('p-003', 'Gestión de Quejas y Reclamos', 'Flujo de atención al cliente para PQR.', 'Servicio al Cliente', 'publicado', 'e-001'),
    new Proceso('p-004', 'Proceso de Baja', 'Flujo inactivo, solo para pruebas.', 'Pruebas', 'inactivo', 'e-001'),
  ]);

  // Propiedad pública de solo lectura para acceder a los procesos desde los componentes.
  public procesos = this._procesos.asReadonly();

  // Lista de categorías disponibles para el formulario HU-04 (Crear Proceso).
  public categorias: string[] = ['Recursos Humanos', 'Finanzas', 'Tecnología', 'Operaciones', 'Ventas', 'Servicio al Cliente', 'Legal', 'Pruebas'];
  
  // Inyectamos Router solo por si se necesita para navegación futura.
  constructor(private router: Router) { }

  /**
   * Genera una instancia de la clase Proceso con ID temporal y metadatos.
   * Usado por el componente CrearprocesoComponent antes de llamar a crearProceso().
   * @param data Los datos básicos del formulario (nombre, desc, cat, estado).
   * @returns Una nueva instancia de la clase Proceso.
   */
  getNewProcessTemplate(data: { nombre: string, descripcion: string, categoria: string, estado: 'borrador' | 'publicado' }): Proceso {
      // Genera un ID simple basado en la longitud actual.
      const newId = `p-${(this._procesos().length + 1).toString().padStart(3, '0')}`;
      
      // Creamos una nueva instancia de tu clase Proceso
      const newProcess = new Proceso(
          newId, // idProceso
          data.nombre,
          data.descripcion,
          data.categoria,
          data.estado,
          'e-001' // idEmpresa estático por ahora
      );

      return newProcess;
  }

  /**
   * Agrega un nuevo proceso al listado reactivo.
   * @param proceso El objeto Proceso a guardar.
   */
  crearProceso(proceso: Proceso): void {
      // Actualiza la señal _procesos, agregando el nuevo proceso al array existente
      this._procesos.update(procesos => [...procesos, proceso]);
      console.log('Proceso Creado y Añadido:', proceso.nombre);
  }

}
