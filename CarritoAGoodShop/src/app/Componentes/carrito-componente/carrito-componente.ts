import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProducto } from './../../Interfaces/iproducto';
import { ServicioProductos } from '../../Services/servicio-productos';

@Component({
  selector: 'app-carrito-componente',
  imports: [FormsModule],
  templateUrl: './carrito-componente.html',
  styleUrl: './carrito-componente.css',
})
export class CarritoComponente {

  ServicioProductos = inject(ServicioProductos);

  listaProductos: IProducto[];

  constructor(){
    this.listaProductos = [];
  }

  ngOnInit(): void{
    this.listaProductos = this.ServicioProductos.getAll();
  }
}
