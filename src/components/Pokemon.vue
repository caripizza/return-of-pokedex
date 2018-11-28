<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <p>Name: {{pokemon.pokemon}}</p>
        <p>Type: {{pokemon.type_1}}</p>
        <p>Speed: {{pokemon.speed}}</p>
        <p>Shape: {{pokemon.shape}}</p>
        <p v-bind:style="{background: pokemon.color_1}">
            Color1: {{pokemon.color_1}}
        </p>
    </li>
</template>

<script>
export default {
    props: {
        pokemon: Object
    }
};
</script>

<style>
img {
    width: 25%;
}
li {
    border: 2px solid blue;
    background: white;
}
</style>