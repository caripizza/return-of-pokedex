<template>
    <div id="app">
        <img class="logo" alt="Pokémon logo" src="./assets/logo.png">
        <Header msg="Pokémon search & filter"
            v-bind:sort="sort"
            v-bind:filter="filter"
            v-bind:types="pokemonTypes"/>
        <Pokedex v-bind:pokemonz="sortedPokemon"/>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import pokemonApi from './services/pokemonApi.js';
import Pokedex from './components/Pokedex.vue';

export default {
    name: 'app',
    data() {
        return {
            pokemonz: pokemonApi.getPokemon(),
            filter: {
                speed: 100,
                type: ''
            },
            sort: {
                field: 'type_1',
                direction: 1
            }
        };
    },
    components: {
        Header,
        Pokedex
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
                const hasSpeed = pokemon.speed > this.filter.speed;
                const hasType1 = !this.filter.type || pokemon.type_1 === this.filter.type;
                return hasSpeed && hasType1;
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
    width: 30%;
    height: 30%;
}
</style>