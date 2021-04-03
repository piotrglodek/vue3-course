<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-center text-2xl">DC heroes {{ heroesCount }}</h1>
      <ul class="mt-3">
        <li
          class="flex justify-between mb-2 text-lg"
          v-for="(hero, index) in dcHeroes"
          :key="hero.name"
        >
          <p>{{ hero.name }}</p>
          <button
            class="w-6 h-6 grid place-items-center hover:text-red-500 hover:bg-red-100 focus:outline-none"
            @click="deleteHero(index)"
          >
            X
          </button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addHero">
        <input
          class="border-2 rounded-sm border-gray-300 mr-2 py-1 px-1 focus:outline-none focus:border-indigo-500 hover:bg-gray-100"
          placeholder="Type hero name "
          v-model.trim="newHero"
        />
        <button
          class="px-2 py-1 bg-indigo-500 hover:bg-indigo-700 transition-colors rounded-sm text-white"
          type="submit"
        >
          Add hero
        </button>
      </form>
    </div>
  </div>
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
    deleteHero(heroIndex) {
      this.dcHeroes.splice(heroIndex, 1);
    },
  },
  computed: {
    heroesCount() {
      return this.dcHeroes.length;
    },
  },
};
</script>

<style>
</style>