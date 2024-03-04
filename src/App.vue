<script></script>

<template>
  <header class="bg-black text-white h-[50px]">
    <div class="wrapper">
      <nav class="flex justify-between">
        <div class="left py-3">
          <RouterLink to="/" class="px-2">Home</RouterLink>
          <RouterLink to="/shoopingcar" class="px-2">購物車</RouterLink>
          <RouterLink to="/informantion" class="px-2">informantion</RouterLink>
          <RouterLink to="/final">final</RouterLink>
        </div>
        <div class="right py-3">
          <RouterLink to="/shoopingcar">
            <i class="fa-solid fa-cart-shopping px-6 py-1 flex">
              <div class="bg-red-700 rounded-full w-2-h-2 absolute top-1 right-4">0</div>
            </i>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
