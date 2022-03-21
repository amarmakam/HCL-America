import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayContentRoutingModule } from './display-content-routing.module';
import { DisplayContentComponent } from './display-content.component';


@NgModule({
  declarations: [
    DisplayContentComponent
  ],
  imports: [
    CommonModule,
    DisplayContentRoutingModule
  ]
})
export class DisplayContentModule { }
