import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SelectModule } from '../select/select.module';
import { TableContentModule } from '../table-content/table-content.module';
import { MatButtonModule } from '@angular/material/button';
import {EffectsModule} from '@ngrx/effects';
import { DashboardEffects } from '../store/dashboard/dashboard.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SelectModule,
    TableContentModule,
    MatButtonModule,
    HttpClientModule,
    EffectsModule.forFeature([DashboardEffects])
  ],
  providers: [
  ]
})
export class DashboardModule { }
