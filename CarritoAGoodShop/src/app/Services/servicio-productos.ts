import { Injectable } from '@angular/core';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})

export class ServicioProductos {
  
  currency:string;
  productos:IProducto[];

  constructor(){

    this.currency = "";
    this.productos = [];

    fetch('http://localhost:8080/api/carrito')
    .then(response => response.json())
    .then(datos => {
      this.currency = datos.currency;
      datos.productos.array.forEach((prod:any) => { 
        let producto = prod as IProducto;
        this.productos.push(producto)
        });
    });
  }

  getAll(): IProducto[]{
    return this.productos;
  }
}
