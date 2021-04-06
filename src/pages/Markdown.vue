<template>
  <div class="flex flex-wrap w-full py-3">
    <h1 class="w-full text-center text-2xl mb-4">Markdown app</h1>
    <section class="flex m-auto h-screen w-10/12">
      <article class="w-1/2 px-4">
        <textarea
          class="w-full h-full border-indigo-200 border-2 rounded hover:border-indigo-400 focus:outline-none focus:border-indigo-500 p-2"
          :value="text"
          @input="updateValue"
        ></textarea>
      </article>
      <article class="w-1/2 px-4 list-disc" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
// mixins
import debounce from "../utilities/mixins/debounce";

export default {
  data() {
    return {
      text: "",
      timeout: "",
    };
  },
  methods: {
    updateValue(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task);
    },
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  mixins: [debounce],
};
</script>

<style>
</style>