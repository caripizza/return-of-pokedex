<template>
    <div id="app">
        <img class="logo" alt="Pokémon logo" src="./assets/logo.png">
        <Header msg="Pokémon search & filter"
            v-bind:filter="filter"/>
        <Pokedex v-bind:pokemonz="filteredPokemon"/>
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
                speed: 0,
            }
        };
    },
    components: {
        Header,
        Pokedex
    },
    computed: {
        filteredPokemon() {
            return this.pokemonz.filter(pokemon => {
                return pokemon.speed > this.filter.speed;
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