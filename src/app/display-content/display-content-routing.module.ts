import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayContentComponent } from './display-content.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayContentRoutingModule { }
