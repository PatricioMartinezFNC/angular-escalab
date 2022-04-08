import { Component, OnInit } from '@angular/core';
import { HpService } from 'src/app/services/hp.service';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html',
  styleUrls: ['./hp.component.css']
})
export class HpComponent implements OnInit {

  characters: any;

  constructor(private gotService: HpService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.gotService.getCharacters().subscribe((resp) => {
      this.characters = Object.values(resp);
    });
  }


}
