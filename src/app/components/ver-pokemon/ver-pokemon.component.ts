import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.css']
})
export class VerPokemonComponent implements OnInit {

  @Input() verPokemon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
