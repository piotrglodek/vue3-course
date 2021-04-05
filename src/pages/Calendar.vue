<template>
  <div class="mx-auto">
    <h1 class="my-2 text-3xl text-center">Calendar</h1>
    <div class="flex">
      <h2 class="capitalize">{{ currentMonthName }}</h2>
      <h2 class="ml-4">{{ currentYear }}</h2>
    </div>
    <section class="flex">
      <p
        class="grid place-items-center h-10"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <!-- Render blank days -->
      <p
        class="grid place-items-center hover:bg-gray-200 h-10"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <!-- Render days in month -->
      <p
        class="grid place-items-center hover:bg-gray-200 h-10"
        style="width: 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between mt-4">
      <button
        @click="prev"
        class="px-2 py-1 bg-indigo-500 hover:bg-indigo-700 transition-colors rounded-sm text-white"
      >
        Prev
      </button>
      <button
        @click="next"
        class="px-2 py-1 bg-indigo-500 hover:bg-indigo-700 transition-colors rounded-sm text-white"
      >
        Next
      </button>
    </section>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      return (
        new Date(this.currentYear, this.currentMonth, num).toDateString() ===
          new Date().toDateString() &&
        "bg-indigo-500 text-white hover:bg-indigo-700"
      );
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style>
</style>