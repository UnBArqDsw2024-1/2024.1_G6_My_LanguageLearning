import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'inicio'},
  {
    path: 'inicio',
    loadChildren: () => import('./aplication/aplication.module').then(m => m.AplicationModule)}
];
