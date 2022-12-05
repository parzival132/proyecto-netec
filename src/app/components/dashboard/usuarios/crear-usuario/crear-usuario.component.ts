import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  sexo: any[] = ['Masculino', 'Femenino'];
  nivel_estudio: any[] = ['Basica', 'Media', 'Superior Universitaria'];
  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router,
    private _snackBar: MatSnackBar ){
    this.form = this.fb.group({
      primer_nombre: ['', Validators.required],
      segundo_nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: ['', Validators.required],
      edad: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      nivel_estudios: ['', Validators.required],
      sexo: ['', Validators.required],
      mayor_menor:['']
      
    })

  }

  agregarUsuario() {
    const user: Usuario = {
      primer_nombre: this.form.value.primer_nombre,
      segundo_nombre: this.form.value.segundo_nombre,
      primer_apellido: this.form.value.primer_apellido,
      segundo_apellido: this.form.value.segundo_apellido,
      edad: this.form.value.edad,
      nacimiento: this.form.value.fecha_nacimiento,
      nivel_estudios: this.form.value.nivel_estudios,
      sexo: this.form.value.sexo,
      mayor_menor: this.form.value.edad
      
    }

    let mayorMenor = user.mayor_menor;

    if(mayorMenor > '18') {

      user.mayor_menor = 'Mayor'
      
    }else{
      user.mayor_menor = 'Menor'
    }

    console.log(user)
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('Usuario creado exitosamente', '',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
