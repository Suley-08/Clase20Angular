import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  title = 'Usuarios';
  public usuarios:Array<any>=[]
  
  constructor(
    private usuariosService:UsuariosService
  ){}

  clickMostrar() {
    this.usuariosService.getUsuarios().subscribe((resp:any) => {
      this.usuarios=resp 
    })
  }
}
