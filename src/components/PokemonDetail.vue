<template>
  <section>
    <h3>I am PokemonDetail.vue</h3>
    <div v-if="pokemon">
      <img v-bind:src="pokemon.url_image">
      <h2>{{pokemon.pokemon}}</h2>
      <p>{{pokemon.ability_1}}</p>
      <p>{{pokemon.shape}}</p>
    </div>
    <div v-else>
        <p>(Please select a Pokémon)</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style lang="postcss" scoped>
section {
  background-color: yellow;
  float: right;
  margin: 30px 10px 0px 0px;
  width: 35%;
}
h3 {
  color: blue;
}
</style>
