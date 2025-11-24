import { Component, inject } from '@angular/core';
import { ProductoComponente } from '../producto-componente/producto-componente';
import { ServicioProductos } from '../../Services/servicio-productos';
import { ServicioCarrito } from '../../Services/servicio-carrito';
import { IProducto } from '../../Interfaces/iproducto';
import { CarritoComponente } from '../carrito-componente/carrito-componente';

@Component({
  selector: 'app-tienda-componente',
  imports: [ProductoComponente, CarritoComponente],
  templateUrl: './tienda-componente.html',
  styleUrl: './tienda-componente.css',
})

export class TiendaComponente {

  ServicioProductos = inject(ServicioProductos);
  ServicioCarrito = inject(ServicioCarrito)
  
  producto: IProducto;
  listaProductos : IProducto[];
  carrito : any[];


  constructor(){
    this.listaProductos = [];
    this.carrito = [];
    this.producto = {
      title : '',
      price : '',
      sku : '',
    };
}

  ngOnInit(): void{
      this.listaProductos = this.ServicioProductos.getAll();
      this.carrito = this.ServicioCarrito.getCompra();
  }
}

