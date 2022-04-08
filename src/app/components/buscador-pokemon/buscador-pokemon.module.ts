import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscadorPokemonRoutingModule } from './buscador-pokemon-routing.module';
import { BuscadorPokemonComponent } from './buscador-pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerPokemonComponent } from '../ver-pokemon/ver-pokemon.component';


@NgModule({
  declarations: [
    BuscadorPokemonComponent,
    VerPokemonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BuscadorPokemonRoutingModule
  ]
})
export class BuscadorPokemonModule { }
