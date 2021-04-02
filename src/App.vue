<template>
  <h1>DC heroes</h1>
  <ul>
    <li v-for="(hero, index) in dcHeroes" :key="index">{{ hero.name }}</li>
  </ul>
  <form @submit.prevent="addHero">
    <input v-model.trim="newHero" />
    <button type="submit">Add hero</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newHero: "",
      dcHeroes: [{ name: "Batman" }, { name: "Arrow" }],
    };
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeroes.push({ name: this.newHero });
        this.newHero = ``;
      }
    },
  },
};
</script>

<style>
</style>