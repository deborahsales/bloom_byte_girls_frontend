import { Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { SerieComponent } from './pages/serie/serie.component';
import { TrilhasComponent } from './pages/trilhas/trilhas.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'trilhas/:id',
    component: TrilhasComponent,
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'serie/:id',
    component: SerieComponent,
  },
];
