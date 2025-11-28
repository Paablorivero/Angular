import { Component, inject } from '@angular/core';
import { CardPelicula } from "../../components/card-pelicula/card-pelicula";
import { IPelicula } from '../../interfaces/ipelicula';
import { ServicioPeliculas } from '../../services/servicio-peliculas';

@Component({
  selector: 'app-peliculas',
  imports: [CardPelicula],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas {
  arrayPeliculas: IPelicula[];
  ServicioPeliculas = inject(ServicioPeliculas);

  constructor(){
    this.arrayPeliculas = [];
  }

  ngOnInit(): void{
    this.arrayPeliculas = this.ServicioPeliculas.getAll();
  }
}
