import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './containers/home/home.component';
import { QuestoesComponent } from "./containers/questoes/questoes.component";
import { InicioComponent } from './containers/inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent,
    HomeComponent,
    QuestoesComponent
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule,
    AppMaterialModule,
    SharedModule
]
})
export class AplicationModule { }
