import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './containers/inicio/inicio.component';
import { LoginComponent } from './containers/login/login.component';
import { CadastrarComponent } from './containers/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationRoutingModule { }
