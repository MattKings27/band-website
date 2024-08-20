import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AlbumsComponent } from './pages/albums/albums.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Led Zeppelin | Home'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Led Zeppelin | About'
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    title: 'Led Zeppelin | Albums'
  }
];