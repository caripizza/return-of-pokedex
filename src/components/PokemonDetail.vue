<template>
  <section>
    <transition name="bounce">
      <div key="1" v-if="pokemon" :style="{background: pokemon.color_1}">
        <img v-bind:src="pokemon.url_image">
        <a :href="pokemon.pokedex" target="_blank"><h2>{{pokemon.pokemon}}</h2></a>
        <p>Experience: {{pokemon.base_experience}}</p>
        <p>Weight: {{pokemon.weight}}</p>
        <p>Pokébase: {{pokemon.pokebase}}</p>
        <p>Shape: {{pokemon.shape}}</p>
        <p>Ability 1: {{pokemon.ability_1}}</p>
        <p>Type 1: {{pokemon.type_1}}</p>
        <p id="btm">Type 2: {{pokemon.type_2}}</p>
      </div>
      <div key="2" v-else>
          <p id="msg">(Please select a Pokémon)</p>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      show: true
    };
  },
  props: {
    pokemon: Object
  }
};
</script>

<style lang="postcss" scoped>
section {
  float: right;
  margin: 20px 10px 0px 0px;
  width: 35%;
}
h2 {
  color: purple;
  margin: 0;
}
img {
  width: 100%;
}
p#msg {
  color: purple;
  font-style: italic;
  padding-top: 30px;
}
p {
  margin: 0;
}
p#btm {
  padding-bottom: 20px;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
