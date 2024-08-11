import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
