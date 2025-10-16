export class Actividad{
    constructor(
        public idActividad: string,
        public nombre: string,
        public tipo: string,
        public descripcion: string,
        public idProceso: string,
        public idRol: string
    ){}
}