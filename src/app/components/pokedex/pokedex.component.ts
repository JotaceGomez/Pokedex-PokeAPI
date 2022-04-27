import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from 'src/app/services/pokedex-service.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemon: any;
  searchedName: string = "";

  constructor(private pokedexService: PokedexServiceService) { }

  ngOnInit(): void {
  }

//Obtiene el pokemon por nombre a través del ngModel y lo guarda en la variable pokemon
  searchPokemon(name: string) {
    this.pokedexService.getPokemonByName(name).subscribe(response => {
      console.log(response);
      this.pokemon = response;
    }
    )
  };


}
