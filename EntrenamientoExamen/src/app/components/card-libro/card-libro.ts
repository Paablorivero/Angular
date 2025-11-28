import { Component, inject, Input } from '@angular/core';
import { ServicioPeliculas } from '../../services/servicio-peliculas';
import { Router } from '@angular/router';
import { ILibro } from '../../interfaces/ilibro';

@Component({
  selector: 'app-card-libro',
  imports: [],
  templateUrl: './card-libro.html',
  styleUrl: './card-libro.css',
})
export class CardLibro {
  ServicioPeliculas = inject(ServicioPeliculas);
  router = inject(Router);
  @Input() miLibro!: ILibro;
}
