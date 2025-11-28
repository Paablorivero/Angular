package com.decroly.backcarrito.model;

import java.util.ArrayList;
import java.util.List;

public class Shop
{
    private String currency;
    private List<Pelicula> peliculas;

    public Shop(String currency) {
        this.currency = currency;
        this.peliculas = new ArrayList<>();

        // Inserto productos en la tienda
        this.peliculas.add(new Pelicula(1, "El Padrino", "Francis Ford Coppola", 1972, "Drama/Crimen", 9.2, "La historia de la familia Corleone bajo el patriarca Vito Corleone, centrándose en la transformación de su hijo Michael.", "https://m.media-amazon.com/images/I/51rOnIjLqRL._AC_.jpg"));
        
        this.peliculas.add(new Pelicula(2, "Pulp Fiction", "Quentin Tarantino", 1994, "Crimen/Drama", 8.9, "Historias entrelazadas de crimen y redención en Los Ángeles, contadas de forma no lineal.", "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(3, "El Caballero Oscuro", "Christopher Nolan", 2008, "Acción/Crimen", 9.0, "Batman se enfrenta al Joker, un criminal psicópata que quiere sumir Gotham City en la anarquía.", "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(4, "La Lista de Schindler", "Steven Spielberg", 1993, "Drama/Historia", 9.0, "La historia real de Oskar Schindler, quien salvó a más de mil judíos durante el Holocausto.", "https://m.media-amazon.com/images/I/71R2kA3b8uL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(5, "Forrest Gump", "Robert Zemeckis", 1994, "Drama/Romance", 8.8, "La extraordinaria vida de Forrest Gump, un hombre con discapacidad intelectual que vivió momentos históricos.", "https://m.media-amazon.com/images/I/51GEDU4R8gL._AC_.jpg"));
        
        this.peliculas.add(new Pelicula(6, "Inception", "Christopher Nolan", 2010, "Ciencia Ficción", 8.8, "Un ladrón que roba secretos corporativos mediante tecnología de sueños compartidos recibe una tarea final.", "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(7, "Matrix", "Lana y Lilly Wachowski", 1999, "Ciencia Ficción/Acción", 8.7, "Un hacker descubre que la realidad que conoce es una simulación creada por máquinas inteligentes.", "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"));
        
        this.peliculas.add(new Pelicula(8, "Gladiador", "Ridley Scott", 2000, "Acción/Drama", 8.5, "Un general romano traicionado busca venganza como gladiador en el Coliseo.", "https://m.media-amazon.com/images/I/51GJCH3PWPL._AC_.jpg"));
        
        this.peliculas.add(new Pelicula(9, "Interstellar", "Christopher Nolan", 2014, "Ciencia Ficción/Drama", 8.7, "Un grupo de exploradores espaciales viaja a través de un agujero de gusano para salvar a la humanidad.", "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(10, "El Señor de los Anillos: El Retorno del Rey", "Peter Jackson", 2003, "Fantasía/Aventura", 9.0, "La batalla final por la Tierra Media mientras Frodo se acerca al Monte del Destino.", "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg"));
        
        this.peliculas.add(new Pelicula(11, "Titanic", "James Cameron", 1997, "Romance/Drama", 7.9, "Una historia de amor entre Jack y Rose a bordo del transatlántico RMS Titanic.", "https://m.media-amazon.com/images/I/51P7w+Lk5xL._AC_.jpg"));
        
        this.peliculas.add(new Pelicula(12, "Avatar", "James Cameron", 2009, "Ciencia Ficción/Aventura", 7.8, "Un marine parapléjico es enviado a Pandora, donde se une a los nativos Na'vi.", "https://m.media-amazon.com/images/I/61RGQ9pLDYL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(13, "Los Vengadores", "Joss Whedon", 2012, "Acción/Superhéroes", 8.0, "Los superhéroes más poderosos de la Tierra se unen para detener a Loki y su ejército alienígena.", "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(14, "Parásitos", "Bong Joon-ho", 2019, "Drama/Thriller", 8.5, "Una familia pobre se infiltra en la vida de una familia rica con consecuencias inesperadas.", "https://m.media-amazon.com/images/I/91sustd79jL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(15, "Joker", "Todd Phillips", 2019, "Drama/Crimen", 8.4, "El origen del icónico villano y su descenso hacia la locura en Gotham City.", "https://m.media-amazon.com/images/I/81GeRAT97JL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(16, "Django Desencadenado", "Quentin Tarantino", 2012, "Western/Drama", 8.5, "Un esclavo liberado se une a un cazarrecompensas para rescatar a su esposa.", "https://m.media-amazon.com/images/I/51p9MUqdOML._AC_.jpg"));
        
        this.peliculas.add(new Pelicula(17, "Toy Story", "John Lasseter", 1995, "Animación/Aventura", 8.3, "Los juguetes de Andy cobran vida cuando los humanos no están presentes.", "https://m.media-amazon.com/images/I/71aN9Y8KweL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(18, "Coco", "Lee Unkrich", 2017, "Animación/Musical", 8.4, "Miguel viaja a la Tierra de los Muertos para descubrir la historia musical de su familia.", "https://m.media-amazon.com/images/I/81lI8jq0AgL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(19, "Oppenheimer", "Christopher Nolan", 2023, "Drama/Historia", 8.3, "La historia de J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.", "https://m.media-amazon.com/images/I/71lqDylcvGL._AC_SY679_.jpg"));
        
        this.peliculas.add(new Pelicula(20, "Barbie", "Greta Gerwig", 2023, "Comedia/Fantasía", 7.0, "Barbie vive en Barbieland hasta que descubre el mundo real.", "https://m.media-amazon.com/images/I/71yJLSDRwhL._AC_SY679_.jpg"));
    }

    public List<Pelicula> getProducts()
    {
        return peliculas;
    }
}
