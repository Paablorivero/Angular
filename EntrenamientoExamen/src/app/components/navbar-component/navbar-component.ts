import { Component, inject } from '@angular/core';
import { ServicioRol } from '../../services/servicio-rol';

@Component({
  selector: 'app-navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
rol: string;
  ServicioRol = inject(ServicioRol);

  constructor(){
    this.rol = "";
  }

  admin(){
    this.rol = this.ServicioRol.cambiarAdmin();
    console.log (this.rol);
  }

  usuario(){
    this.rol = this.ServicioRol.cambiarUsuario();
    console.log(this.rol);
  }
}
