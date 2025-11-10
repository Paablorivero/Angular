import { Component, EventEmitter, Input, Output } from '@angular/core';
import { noticiaInterfaz } from '../../interfaces/noticiaInterfaz';

@Component({
  selector: 'app-blog-componente',
  imports: [],
  templateUrl: './blog-componente.html',
  styleUrl: './blog-componente.css',
})
export class BlogComponente {

  texto: string;
  //@Input() noticia: noticiaInterfaz
  

  constructor(){
    this.texto = "Hola";

   // this.noticia = {
    //  nombre: "Predeterminado",
   //   imagen: "Predetermminado",
   //   noticia: "noticia",
    //  fecha: "fecha"
   // };
  }

  crearNoticia(event : any):void{
    this.texto = event.target.value;
  }
}
