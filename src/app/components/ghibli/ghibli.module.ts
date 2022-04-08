import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GhibliRoutingModule } from './ghibli-routing.module';
import { GhibliComponent } from './ghibli.component';


@NgModule({
  declarations: [
    GhibliComponent
  ],
  imports: [
    CommonModule,
    GhibliRoutingModule
  ]
})
export class GhibliModule { }
