<template>
    <header>
      <h1>{{ msg }}</h1>
      <section>
          <label>
            Filter by Type:
            <select>
              <option>Type 1</option>
              <option>Type 2</option>
            </select>
          </label>
          <label>
            Filter by Min. Speed:
            <input v-model.number="filter.speed" 
              type="number" min="0" step="10"
              max="300">
          </label>
          <label>
            Sort:
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
        msg: String,
        filter: Object
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
