<template>
  <div id="app">
    <img class="logo" alt="Pokémon logo" src="./assets/logo.png">
    <Header msg="Pokémon search & filter"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
    name: 'app',
    components: {
        Header
    }
};
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
}
img.logo {
    width: 30%;
    height: 30%;
}
</style>
