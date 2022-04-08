import { Component, OnInit } from '@angular/core';
import { GhibliService } from 'src/app/services/ghibli.service';

@Component({
  selector: 'app-ghibli',
  templateUrl: './ghibli.component.html',
  styleUrls: ['./ghibli.component.css']
})
export class GhibliComponent implements OnInit {
  movies: any;

  constructor(private ghibliService: GhibliService) { }


  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.ghibliService.getMovies().subscribe((resp) => {
      this.movies = Object.values(resp);
    });
  }


  

}
