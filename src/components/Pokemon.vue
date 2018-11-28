<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <p>name = {{pokemon.pokemon}}</p>
        <p>speed = {{pokemon.speed}}</p>
        <p v-bind:style="{background: pokemon.color_1}">color1</p>
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
}
</style>