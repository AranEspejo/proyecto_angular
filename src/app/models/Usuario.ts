export class User{
    constructor(
        public idUsuario: string,
        public nombre: string,
        public correo: string,
        public contrasena: string,
        public rolSistema: string,
        public idEmpresa: string
    ){}
}