import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorPokemonComponent } from './buscador-pokemon.component';

const routes: Routes = [{ path: '', component: BuscadorPokemonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadorPokemonRoutingModule { }
