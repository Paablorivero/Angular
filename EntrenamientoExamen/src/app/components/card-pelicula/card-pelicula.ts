import { Component, inject, Input } from '@angular/core';
import { ServicioPeliculas } from '../../services/servicio-peliculas';
import { IPelicula } from '../../interfaces/ipelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-pelicula',
  imports: [],
  templateUrl: './card-pelicula.html',
  styleUrl: './card-pelicula.css',
})
export class CardPelicula {
  ServicioPeliculas = inject(ServicioPeliculas);
  router = inject(Router);
  @Input() miPelicula!: IPelicula;
  
}
