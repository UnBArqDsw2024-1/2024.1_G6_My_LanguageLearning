import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './containers/home/home.component';
import { QuestoesComponent } from "./containers/questoes/questoes.component";
import { InicioComponent } from './containers/inicio/inicio.component';
import { LoginComponent } from './containers/login/login.component';
import { CadastrarComponent } from './containers/cadastrar/cadastrar.component';
import { LinguagemComponent } from './containers/linguagem/linguagem.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    HomeComponent,
    QuestoesComponent,
    LoginComponent,
    CadastrarComponent,
    LinguagemComponent
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
]
})
export class AplicationModule { }
