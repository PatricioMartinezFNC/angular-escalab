import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HpComponent } from './hp.component';

const routes: Routes = [{ path: '', component: HpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HpRoutingModule { }
