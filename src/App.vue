<template>
  <div id="app">
    <img class="logo" alt="Pokémon logo" src="./assets/logo.png">
    <Header msg="Pokémon search & filter"
      :sort="sort"
      :filter="filter"
      :types="pokemonTypes"/>
    <Pokedex :pokemonz="sortedPokemon" 
      :onSelect="handleSelect"
    />
    <PokemonDetail :pokemon="selected"/>
  </div>
</template>

<script>
import Header from './components/Header';
import pokemonApi from './services/pokemonApi';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';

export default {
  name: 'app',
  data() {
    return {
      pokemonz: pokemonApi.getPokemon(),
      filter: {
        name: '',
        speed: 100,
        type: ''
      },
      sort: {
        field: 'type_1',
        direction: 1
      },
      selected: null
    };
  },
  components: {
    Header,
    Pokedex,
    PokemonDetail
  },
  computed: {
    pokemonTypes() {
      const types = [];
      this.pokemonz.forEach(pokemon => {
        if(!types.includes(pokemon.type_1)){
          types.push(pokemon.type_1);
        } 
      });
      return types;
    },
    filteredPokemon() {
      return this.pokemonz.filter(pokemon => {
        const hasName = !this.filter.name || pokemon.pokemon.includes(this.filter.name);
        const hasSpeed = pokemon.speed > this.filter.speed;
        const hasType1 = !this.filter.type || pokemon.type_1 === this.filter.type;
        return hasName && hasSpeed && hasType1;
      });
    },
    sortedPokemon() {
      const field = this.sort.field;
      const direction = this.sort.direction;
      return this.filteredPokemon.slice().sort((a, b) => {
        if(a[field] > b[field]) {
          return 1 * direction;
        }
        if(a[field] < b[field]) {
          return -1 * direction;
        }
        return 0;
      });
    }
  },
  methods: {
    handleSelect(pokemon) {
      this.selected = pokemon === this.selected ? null : pokemon;
    },
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}
html {
    background: red;
}
img.logo {
  width: 15%;
  height: 15%;
}
</style>