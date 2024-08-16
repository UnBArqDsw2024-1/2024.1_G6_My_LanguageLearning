import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: ''},
  {
    path: '',
    loadChildren: () => import('./aplication/aplication.module').then(m => m.AplicationModule)}
];
