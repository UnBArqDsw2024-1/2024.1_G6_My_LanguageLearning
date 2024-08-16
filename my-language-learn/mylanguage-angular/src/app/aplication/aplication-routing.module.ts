import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './containers/cadastrar/cadastrar.component';
import { HomeComponent } from './containers/home/home.component';
import { InicioComponent } from './containers/inicio/inicio.component';
import { LinguagemComponent } from './containers/linguagem/linguagem.component';
import { LoginComponent } from './containers/login/login.component';
import { EnunciadoComponent } from './containers/enunciado/enunciado.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastrar', component: CadastrarComponent},
  { path: 'linguagem', component: LinguagemComponent},
  { path: 'home', component: HomeComponent},
  { path: 'enunciado', component: EnunciadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationRoutingModule { }
