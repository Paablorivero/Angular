import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Page404 } from './pages/page404/page404';
import { Shop } from './pages/shop/shop';
import { Libros } from './pages/libros/libros';
import { Peliculas } from './pages/peliculas/peliculas';
import { UltimasNovedades } from './pages/ultimas-novedades/ultimas-novedades';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: Home},
    {path: 'shop', component: Shop},
    {path: 'libros', component: Libros},
    {path: 'peliculas', component: Peliculas},
    {path: 'novedades', component:UltimasNovedades},

    {path: '**', component: Page404}
];
