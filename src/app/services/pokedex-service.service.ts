import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {

  baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient:HttpClient) { }

  getPokemons() {
    return this.httpClient.get(this.baseUrl + "pokemon?limit=10");
  }

  getPokemon(id: number) {
    return this.httpClient.get(this.baseUrl + "pokemon/" + id);
  }
}
