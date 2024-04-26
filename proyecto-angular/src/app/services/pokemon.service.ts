import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, merge, range, switchMap, tap, toArray } from 'rxjs';
import { Pokemon, PokemonMini } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(numInicio: number, numFinal: number): Observable<Array<PokemonMini>> {
    return range(numInicio, numFinal)
      .pipe(
        toArray(),
        switchMap((pokemonsIds: Array<number>) => {
          const pokemons$: Array<Observable<PokemonMini>> = pokemonsIds.map((id) => this.getPokemon(id))

          return merge(...pokemons$)
        }),
        toArray(),
        map((pokemons: Array<PokemonMini>) => {
          return pokemons.sort((a, b) => a.id - b.id)
        }),
        tap(console.log)
      )

    // return this.getPokemon()
  }

  getPokemon(id: string | number): Observable<PokemonMini> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(
        map((pokemon) => {
          return {
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites
          }
        })
      )
  }
}
