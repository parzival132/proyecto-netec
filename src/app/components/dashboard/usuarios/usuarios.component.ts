import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

listUsuarios: Usuario[] = [];

  displayedColumns: string[] = ['primer_nombre', 'segundo_nombre', 'primer_apellido', 'segundo_apellido', 'edad', 'nacimiento', 'nivel_estudios', 'sexo', 'mayor_menor', 'acciones'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private _usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarUsuaarios();
    
  }

  cargarUsuaarios(){
    this.listUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number){

    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuaarios();
    

  }



}
