import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'list-pokemon',
    templateUrl: './templates/list-pokemon-template.component.html'
})
export class ListPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null;

    constructor(
        private router: Router,
        private pokemonsService: PokemonsService) { }

    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons(): void {
        this.pokemonsService.getPokemons()
        .then(pokemons => this.pokemons = pokemons);
      }

    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

}