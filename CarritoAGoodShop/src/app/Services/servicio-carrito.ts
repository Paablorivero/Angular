import { Injectable } from '@angular/core';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})

export class ServicioCarrito {
  
  producto! : IProducto;
  carrito : any[];

  private total : number;
  private cantidadInicio;

  constructor(){
    this.carrito = [];
    this.total = 0;
    this.cantidadInicio = 0;
  }

  getCantidadInicio() : number{
    return this.cantidadInicio;
  }

  addProducto(producto: any) : void{
    let prod = this.carrito.findIndex((p) => p.sku === producto.sku);

    if(prod !== -1){
      this.carrito[prod].cantidad = producto.cantidad;
    }else{
      this.carrito.push(producto);
    }

    this.total += producto.price;
    console.log(this.carrito);
  }

  removeProducto(producto : any) : void {
    let prod = this.carrito.findIndex((p) => p.sku === producto.sku);

    if(prod !== -1){
      this.carrito[prod].cantidad = producto.cantidad;
      if(this.carrito[prod].cantidad ===0){
        this.carrito.splice(prod, 1);
      }
    }
    this.total -= producto.price;

    console.log(this.carrito);
  }

  getCompra() : any[]{
    return this.carrito;
  }
}
