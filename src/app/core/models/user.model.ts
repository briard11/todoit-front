export interface User{
    _id: string;
    nombre: string;
    correo: string;
    password: string;
    estado?: Boolean;
    google?: Boolean;
    img?: string;
    rol: string;
}