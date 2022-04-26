import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {

  baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient:HttpClient) { }

  //Obtener pokemons con limite
  getPokemons() {
    return this.httpClient.get(this.baseUrl + "pokemon?limit=10");
  }

  //Obtener por ID
  getPokemonByID(id: number) {
    return this.httpClient.get(this.baseUrl + "pokemon/" + id);
  }

  //Obtener por nombre
  getPokemonByName(name: string) {
    return this.httpClient.get(this.baseUrl + "pokemon/" + name);
  }

}
