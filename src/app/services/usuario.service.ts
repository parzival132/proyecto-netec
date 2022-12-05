import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {primer_nombre: "juan", segundo_nombre: 'antonio', primer_apellido: 'perez', 
    segundo_apellido: 'rosas', edad: '20', nacimiento: '08-08-1997', nivel_estudios: 'profesional', sexo: 'masculino', mayor_menor: 'Mayor'},
  
  ]

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);

  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
