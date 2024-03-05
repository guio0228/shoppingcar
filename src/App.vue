<script>
import { useCartStore } from '@/stores/cart';
export default {
  computed: {
    itemCount() {
      const cartStore = useCartStore();
      return cartStore.itemCount;
    },
  },
};
</script>

<template>
  <header class="bg-black text-white h-[50px]">
    <div class="wrapper">
      <nav class="flex justify-between">
        <div class="left py-3">
          <RouterLink to="/" class="px-2">Home</RouterLink>
          <RouterLink to="/home2" class="px-2">Home2</RouterLink>
          <RouterLink to="/shoopingcar" class="px-2">購物車</RouterLink>
          <RouterLink to="/informantion" class="px-2">informantion</RouterLink>
          <RouterLink to="/final" class="px-2">final</RouterLink>
          <RouterLink to="/about">about</RouterLink>
          <RouterLink to="/new" class="px-2">new</RouterLink>
        </div>
        <div class="right py-3">
          <RouterLink to="/shoopingcar">
            <i class="fa-solid fa-cart-shopping px-6 py-1 flex">
              <div
                class="bg-red-700 rounded-full w-4 h-4 flex items-center justify-center absolute top-1 right-4 text-white"
              >
                {{ itemCount }}
              </div>
            </i>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
