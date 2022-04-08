import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhibliComponent } from './ghibli.component';

const routes: Routes = [{ path: '', component: GhibliComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GhibliRoutingModule { }
