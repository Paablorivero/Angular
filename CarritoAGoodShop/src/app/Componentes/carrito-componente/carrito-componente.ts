import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito-componente',
  imports: [],
  templateUrl: './carrito-componente.html',
  styleUrl: './carrito-componente.css',
})
export class CarritoComponente {

  @Input() miCompra: any;

  carrito : any[];

  constructor(){
    this.carrito = [];

    this.miCompra = {
      sku : '',
      title : '',
      price : '',
      cantidad: ''
    }
  }
}
