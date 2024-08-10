import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {
    path: 'home',
    loadChildren: () => import('./aplication/aplication.module').then(m => m.AplicationModule)}
];
