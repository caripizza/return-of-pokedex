<template>
  <ul>
    <Pokemon v-for="pokemon in pokemon"
      v-bind:key="pokemon.name"
      v-bind:animal="pokemon"/>
  </ul>
</template>

<script>
// import pokemonApi from '../services/pokemonApi.js';
import Pokemon from './Pokemon.vue';

export default {
    components: {
        Pokemon
    }
};
</script>

<style>

</style>
