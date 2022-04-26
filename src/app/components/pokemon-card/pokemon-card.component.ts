import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from 'src/app/services/pokedex-service.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  pokemon: any;

  constructor(private pokedexService: PokedexServiceService) { }

  ngOnInit(): void {
    this.pokedexService.getPokemon(6).subscribe(response => {
      console.log(response);
      this.pokemon = response;
    }
    )};


}
