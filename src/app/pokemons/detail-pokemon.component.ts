import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Pokemon} from './pokemon';
import {PokemonsService} from './pokemons.service'; // on importe le service PokemonsService.

@Component({selector: 'detail-pokemon',
 templateUrl: './templates/detail-pokemon-template.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemon : Pokemon = null;

  constructor(private route : ActivatedRoute, private router : Router, private pokemonsService : PokemonsService) {} // on injecte ce service pour pouvoir l'utiliser dans le composant.

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.pokemonsService
      .getPokemon(id)
      .then(pokemon => this.pokemon = pokemon);
    });
  }

  goEdit(pokemon : Pokemon) : void {
    let link = ['/pokemon/edit', pokemon.id];
    this
      .router
      .navigate(link);
  }

  goBack(): void {
    this.router.navigate(['/pokemon/all']);
  }

}