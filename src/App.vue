<template>
  <div id="app">
    <img class="logo" alt="Pokémon logo" src="./assets/logo.png">
    <Header msg="Pokémon search & filter"/>
    {{ pokemon }}
  </div>
</template>

<script>
import Header from './components/Header.vue';
import pokemonApi from './services/pokemonApi.js';

export default {
    data() {
        return {
            pokemon: pokemonApi.getPokemon(),
        };
    },
    components: {
        Header
    }
};
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
}
img.logo {
    width: 30%;
    height: 30%;
}
</style>