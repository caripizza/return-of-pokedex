<template>
    <header>
      <h1>{{ msg }}</h1>
      <section>
        <label>
          Filter by Type1:
          <select v-model="filter.type">
            <option value="">All</option>
            <option v-for="type in types" 
              v-bind:key="type"
              v-bind:value="type">
              {{type}}
              </option>
          </select>
        </label>
        <label>
          Filter by Speed:
          <input v-model.number="filter.speed" 
            type="number" min="0" step="10"
            max="300">
        </label>
        <label>
          Sort by:
          <select v-model="sort.field">
            <option value="type_1">Type1</option>
            <option value="shape">Shape</option>
            <option value="speed">Speed</option>
          </select>
          <select v-model="sort.direction">
            <option value="1">Asc</option>
            <option value="-1">Desc</option>
          </select>
        </label>
      </section>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String,
        filter: Object,
        types: Array,
        sort: Object
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
    padding: 10px;
}
select {
  background-color: white;
  font-size: 16px;
}
input {
    font-size: 16px;
}
</style>
