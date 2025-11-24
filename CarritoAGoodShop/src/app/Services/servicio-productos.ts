import { Injectable } from '@angular/core';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})

export class ServicioProductos {
  
  currency:string;
  productosArray:IProducto[];

  constructor(){

    this.currency = "";
    this.productosArray = [];

    fetch('http://localhost:8080/api/carrito')
    .then(response => response.json())
    .then(data => {
      this.currency = data.currency;
      data.products.forEach((producto: IProducto) => {
        this.productosArray.push(producto);
      });
    });
  }

  getAll(): IProducto[]{
    return this.productosArray;
  }
}
