import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemon(pokemon : any): Observable<any> {
    return this.http.get<any>(`${environment.URL_POKEMON}/pokemon/${pokemon}`);
  }
}
