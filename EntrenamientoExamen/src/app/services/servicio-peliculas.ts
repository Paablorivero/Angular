import { Injectable } from '@angular/core';
import { IPelicula } from '../interfaces/ipelicula';

@Injectable({
  providedIn: 'root',
})
export class ServicioPeliculas {
  
  currency:string;
  arraypeliculas: IPelicula[];

  constructor(){
    this.currency ="";
    this.arraypeliculas = [];

    fetch('http://localhost:8080/api/peliculas')
    .then(response => response.json())
    .then(data => {
      this.currency = data.currency;
      data.peliculas.forEach((pelicula: IPelicula) => {
        this.arraypeliculas.push(pelicula);
      });
    });
  }

  getAll() : IPelicula[]{
    console.log(this.arraypeliculas)
    return this.arraypeliculas;
  }
}
