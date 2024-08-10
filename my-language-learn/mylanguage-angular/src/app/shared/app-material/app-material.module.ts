import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
