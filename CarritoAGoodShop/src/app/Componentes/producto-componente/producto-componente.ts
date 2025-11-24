import { Component, Input, inject} from '@angular/core';
import { IProducto } from '../../Interfaces/iproducto';
import { ServicioCarrito } from '../../Services/servicio-carrito';

@Component({
  selector: 'app-producto-componente',
  imports: [],
  templateUrl: './producto-componente.html',
  styleUrl: './producto-componente.css',
})

export class ProductoComponente {

  ServicioCarrito = inject(ServicioCarrito);

  @Input() miProducto: IProducto;

  cantidad! : number;

  constructor(){
    this.miProducto = {
      sku : '',
      title : '',
      price : ''
    }
  }

  ngOnInit() : void {
    this.cantidad = this.ServicioCarrito.getCantidadInicio();
  }

  sumarCantidad() {
    this.cantidad++;
    let productoCarrito = {
      sku: this.miProducto.sku,
      title: this.miProducto.title,
      price: Number(this.miProducto.price),
      cantidad: this.cantidad
    };
    this.ServicioCarrito.addProducto(productoCarrito);
  } 

  restarCantidad() {
    if(this.cantidad > 0){
      this.cantidad--;
    }

    let productoCarrito = {
      sku: this.miProducto.sku,
      title: this.miProducto.title,
      price: Number(this.miProducto.price),
      cantidad: this.cantidad
    };
    this.ServicioCarrito.removeProducto(productoCarrito);

  }
}
