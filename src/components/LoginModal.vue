<template>
  <section
    @click="$emit('close-login-modal')"
    class="z-10 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-20 py-4 px-5 m-auto bg-white rounded shadow w-1/3">
        <h1 class="text-xl">Login</h1>
        <form @submit.prevent="submit">
          <div class="mt-4">
            <label> Email or Username </label>
            <input
              v-model="form.email"
              class="rounded shadow p-2 w-full mt-2 border-2 border-indigo-500 outline-none hover:border-indigo-700"
              type="email"
              placeholder="Email or Username"
            />
          </div>
          <div class="mt-4">
            <label>Password</label>
            <input
              v-model="form.password"
              class="rounded shadow p-2 w-full mt-2 border-2 border-indigo-500 outline-none hover:border-indigo-700"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="mt-4 flex">
            <button
              class="mx-auto px-2 py-1 bg-indigo-500 hover:bg-indigo-700 transition-colors rounded-sm text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<style>
</style>