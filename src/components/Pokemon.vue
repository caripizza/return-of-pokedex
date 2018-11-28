<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <p>name = {{pokemon.pokemon}}</p>
        <p>speed = {{pokemon.speed}}</p>
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
    width: 10%;
}
li {
    background: blue;
}
</style>