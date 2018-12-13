<template>
    <li v-if="pokemon">
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

<style lang="postcss" scoped>
img {
    width: 35%;
}
li {
    border: 2px solid blue;
    background: white;
    margin: 0 auto;
    height: 170px;
}
p {
  margin: 0px ;
}
</style>