import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movies } from '../interfaces/ghibli.interface';

@Injectable({
  providedIn: 'root',
})
export class GhibliService{
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${environment.URL}/films`);
  }



}
