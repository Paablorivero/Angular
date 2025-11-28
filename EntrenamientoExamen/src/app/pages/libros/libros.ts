import { Component, inject } from '@angular/core';
import { ILibro } from '../../interfaces/ilibro';
import { ServicioLibros } from '../../services/servicio-libros';
import { CardLibro } from "../../components/card-libro/card-libro";

@Component({
  selector: 'app-libros',
  imports: [CardLibro],
  templateUrl: './libros.html',
  styleUrl: './libros.css',
})
export class Libros {
  arrayLibros: ILibro[];
  ServicioLibros = inject(ServicioLibros);

  constructor(){
    this.arrayLibros = [];
  }

  ngOnInit(): void{
    this.arrayLibros = this.ServicioLibros.getAll();
  }
}
