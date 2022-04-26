import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from 'src/app/services/pokedex-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private pokedexService: PokedexServiceService) { }

  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe((response: any) => {
      console.log(response);
      this.pokemons = response;
    }
    )};

}
