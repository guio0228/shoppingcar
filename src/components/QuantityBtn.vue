<template>
  <div class="flex items-center gap-2">
    <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer" @click="decrement">-</button>
    <input type="number" min="1" class="w-12 border-0 text-center" v-model="quantity" />
    <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increment() {
      this.quantity += 1;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
  },

  watch: {
    quantity(newVal) {
      this.$emit('update:quantity', newVal);
    },
  },
};
</script>
