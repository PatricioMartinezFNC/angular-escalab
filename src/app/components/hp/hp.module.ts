import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HpRoutingModule } from './hp-routing.module';
import { HpComponent } from './hp.component';


@NgModule({
  declarations: [
    HpComponent
  ],
  imports: [
    CommonModule,
    HpRoutingModule
  ]
})
export class HpModule { }
