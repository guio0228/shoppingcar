<script>
import ProductCard from '../components/HomeviewItem.vue';

export default {
  components: {
    ProductCard,
  },
  methods: {},
  async mounted() {
    try {
      const response = await fetch('../MOCK_DATA.json');
      const data = await response.json();
      console.log(data);
      this.products = data;
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>
<template>
  <div class="list">
    <h1 class="text-2xl px-2">商品列表</h1>
    <div class="listcontroller flex justify-end">
      <button class="p-2 rounded-lg">
        <img src="../assets/image/瀑布on.png" alt="Description" class="h-6 w-6" />
      </button>
      <button class="p-2 rounded-lg">
        <img src="../assets/image/條列off.png" alt="Description" class="h-6 w-6" />
      </button>
    </div>
    <div class="px-4 flex gap-4 flex-wrap">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
