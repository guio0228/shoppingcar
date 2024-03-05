<template>
  <div>
    <div class="grid grid-cols-6 border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="text-center">商品圖片</div>
      <div>商品名稱</div>
      <div class="text-center">商品描述</div>
      <div class="text-center">價錢</div>
      <div class="opacity-0">操作</div>
    </div>

    <div
      v-for="product in products"
      :key="product.id"
      class="grid grid-cols-6 border-y border-main-deep text-main-deep py-1 gap-x-3"
    >
      <img :src="product.image" alt="" class="h-48 rounded-lg w-full" />
      <div>{{ product.name }}</div>
      <div class="text-center">{{ product.description }}</div>
      <div class="text-center">{{ product.price }}</div>
      <div class="opacity-0">操作</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
