import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContentComponent } from './table-content.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    TableContentComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    TableContentComponent
  ]
})
export class TableContentModule { }
