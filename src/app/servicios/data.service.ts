import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Get pokemons

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=9`);
  }
  getMasInformacion(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
