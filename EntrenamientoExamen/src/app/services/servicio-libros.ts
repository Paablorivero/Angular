import { Injectable } from '@angular/core';
import { ILibro } from '../interfaces/ilibro';

@Injectable({
  providedIn: 'root',
})
export class ServicioLibros {
  currency:string;
    arrayLibros: ILibro[];
  
    constructor(){
      this.currency ="";
      this.arrayLibros = [];
  
      fetch('http://localhost:8081/api/libros')
      .then(response => response.json())
      .then(data => {
        this.currency = data.currency;
        data.libros.forEach((pelicula: ILibro) => {
          this.arrayLibros.push(pelicula);
        });
      });
    }
  
    getAll() : ILibro[]{
      console.log(this.arrayLibros)
      return this.arrayLibros;
    }
}
