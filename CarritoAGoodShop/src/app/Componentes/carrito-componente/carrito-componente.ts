import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProducto } from './../../Interfaces/iproducto';
import { ServicioProductos } from '../../Services/servicio-productos';
import { ProductoComponente } from "../producto-componente/producto-componente";

@Component({
  selector: 'app-carrito-componente',
  imports: [FormsModule, ProductoComponente],
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
