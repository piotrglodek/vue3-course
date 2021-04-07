<template>
  <nav class="w-full bg-indigo-500 text-white py-2 px-4">
    <router-link
      class="mr-3 text-xl"
      v-for="link in links"
      :to="link.path"
      :key="link.label"
      >{{ link.label }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/dc-heroes", label: "Dc heroes" },
        { path: "/calendar", label: "Calendar" },
        { path: "/markdown", label: "Markdown" },
        { path: "/slider", label: "Slider" },
      ],
    };
  },
};
</script>

<style>
</style>