import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Characters } from '../interfaces/hp.interface';

@Injectable({
  providedIn: 'root'
})
export class HpService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Characters> {
    return this.http.get<Characters>(`${environment.URL_HP}/personajes`);
  }

}
