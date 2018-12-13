<template>
  <section>
    <transition-group name="staggered-fade"
      tag="ul"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <Pokemon v-for="pokemon in pokemonz"
        :key="pokemon.pokemon"
        :pokemon="pokemon"
        class="li"
        @click.native="onSelect(pokemon)"
      />
    </transition-group>
  </section>
</template>

<script>
import Pokemon from './Pokemon';

export default {
  props: {
    pokemonz: Array,
    onSelect: Function
  },
  components: {
    Pokemon
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 10;
    },
    enter(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        // eslint-disable-next-line
        Velocity(
          el,
          { opacity: 1, height: 170 },
          { complete: done },
          { duration: 3000 }
        );
      }, delay);
    },
    leave(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        // eslint-disable-next-line
        Velocity(
          el,
          { opacity: 0, height: 10 },
          { complete: done }
        );
      }, delay);
    }
  }
};
</script>

<style lang="postcss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  list-style: none;
  max-width: 60%;
  padding-left: 0;
  float: left;
}
</style>