export class Proceso{
    constructor(
        public idProceso: string,
        public nombre: string,
        public descripcion: string,
        public categoria: string,
        public estado: 'borrador' | 'publicado' | 'inactivo',
        public idEmpresa: string
    ){}
}