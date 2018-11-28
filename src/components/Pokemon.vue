<template>
  <li>
    <img v-bind:src="pokemon.name" />
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
    width: 100%;
}
</style>
