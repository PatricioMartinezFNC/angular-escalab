import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-buscador-pokemon',
  templateUrl: './buscador-pokemon.component.html',
  styleUrls: ['./buscador-pokemon.component.css']
})
export class BuscadorPokemonComponent implements OnInit {
  
  pokemon : any;
  formPokemon : FormGroup = this.fb.group({
      nombre : ''
  });


  constructor(private pokemonService : PokemonService, private fb : FormBuilder) { }
  
  ngOnInit(): void {
  }

  public getPokemon(): void {
    this.pokemonService.getPokemon(this.formPokemon.controls['nombre'].value.toLowerCase()).subscribe((resp) => {
      this.pokemon = resp;
    });
  }

}
