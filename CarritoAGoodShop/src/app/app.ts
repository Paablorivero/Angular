import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarritoComponente } from "./Componentes/carrito-componente/carrito-componente";
import { TiendaComponente } from "./Componentes/tienda-componente/tienda-componente";

@Component({
  selector: 'app-root',
  imports: [TiendaComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CarritoAGoodShop');
}
