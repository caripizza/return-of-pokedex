<template>
  <header>
    <h1>{{ msg }}</h1>
    <section>
      <h3>Filter:</h3>
        <label>
          Type<br>
          <select>
            <option>Type 1</option>
            <option>Type 2</option>
          </select>
        </label>
        <label>
          Min. Speed<br>
          <input type="number" min="0" value="1" step="1">
        </label>
      <h3>Sort:</h3>
        <label>
          <br>
          <select>
            <option>Name</option>
            <option>Min. Speed</option>
          </select>
        </label>
    </section>
  </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String
    }
};
</script>

<style scoped>
header {
  background: red;
}
h1 {
    margin: 0 auto;
    color: purple;
}
section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-flow: row wrap;
    padding-top: 10px;
}
</style>
