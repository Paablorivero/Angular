import { Component, inject } from '@angular/core';
import { IProducto } from '../../Interfaces/iproducto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-componente',
  imports: [FormsModule],
  templateUrl: './producto-componente.html',
  styleUrl: './producto-componente.css',
})
export class ProductoComponente {
  
  ServicioProductos = inject(ServicioProductos);

  listaProductos: IProducto[];

  constructor(){
    this.listaProductos = [];
  }

  ngOnInit(): void{
    this.listaProductos = this.ServicioProductos.getAll();
  }
}
