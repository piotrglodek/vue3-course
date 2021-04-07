<template>
  <div class="flex flex-wrap w-full relative">
    <div
      v-for="(sliderColor, index) in sliders"
      :key="sliderColor"
      class="absolute w-full"
    >
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="sliderColor"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="w-full absolute bottom-0 flex justify-center">
        <div
          v-for="(item, index) in sliders"
          :key="item"
          :class="currentSlide === index ? 'bg-gray-400' : ' bg-gray-200'"
          class="w-4 h-4 rounded-full mx-1 cursor-pointer"
          @click="makeActive(index)"
        ></div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-yellow-500", "bg-blue-500", "bg-green-500"],
      interval: "",
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
    }, 6000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateX(-100%);
}

.fade-leave-to {
  transform: translateX(100%);
}
</style>