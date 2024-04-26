import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonMini } from '../../types/pokemon.type';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [PokemonComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemon: PokemonMini | null = null
  pokemons: Array<PokemonMini> = []

  constructor(
    private pokemonService: PokemonService,
  ) {
    this.pokemonService.getPokemon(18)
      .subscribe((pokemon: PokemonMini) => {
        console.log({ pokemon })
        this.pokemon = pokemon
      })

    this.pokemonService.getPokemons(1, 3)
      .subscribe((pokemons: Array<PokemonMini>) => {
        console.log(pokemons)
        this.pokemons = pokemons
      })
  }

}
