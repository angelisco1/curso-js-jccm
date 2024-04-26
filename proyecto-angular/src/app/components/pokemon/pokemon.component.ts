import { Component, Input } from '@angular/core';
import { Pokemon, PokemonMini } from '../../types/pokemon.type';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemon: PokemonMini | null = null


}
