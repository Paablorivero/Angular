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
    .then(data => {
      this.currency = data.currency;
      data.products.forEach((item: any) => {
        let producto: IProducto = {
          sku: item.sku,
          title: item.title,
          price: item.price,
        };
        this.productos.push(producto);
      });
    });
  }

  getAll(): IProducto[]{
    return this.productos;
  }
}
