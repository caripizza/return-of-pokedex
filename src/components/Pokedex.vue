<template>
    <ul>
        <Pokemon v-for="pokemon in pokemonz"
        v-bind:key="pokemon.pokemon"
        v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
import Pokemon from './Pokemon.vue';

export default {
    props: {
        pokemonz: Array
    },
    components: {
        Pokemon
    }
};
</script>

<style>
ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    list-style: none;
    margin: 0 auto;
    padding-left: 0;
}
</style>