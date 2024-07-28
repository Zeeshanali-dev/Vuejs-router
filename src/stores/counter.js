import { defineStore } from "pinia";
import { computed, ref } from "vue";

// export const useCounterStore = defineStore("counter", {
//   state() {
//     return {
//       count: 0,
//     };
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//     decrement() {
//       this.count--;
//     },
//   },
// });

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }

  return {
    count,
    doubleCount,
    increment,
    decrement,
  };
});
