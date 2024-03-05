<template>
  <div class="listcontent w-1/6 border-[1px] rounded-lg flex flex-col">
    <img :src="product.pic" alt="Description" class="h-48 rounded-t-lg w-full" />
    <div class="listitem gap-3 px-2 h-[250px] bg-opacity-30 pl-3 flex flex-col pt-3">
      <div class="listtext">
        <h1 class="text-xl px-2">商品名稱: {{ product.name }}</h1>
        <p class="text-sm px-2">商品描述: {{ product.description }}</p>
        <p class="text-sm px-2">商品價格:{{ product.price }}</p>
      </div>
      <div class="buy">
        <div class="flex items-center gap-2">
          <span>數量:</span>
          <div class="flex items-center border border-main-grey rounded-full overflow-hidden">
            <div class="flex items-center">
              <QuantityBtn v-model:quantity="quantity" />
            </div>
          </div>
        </div>
      </div>
      <div class="addToCar">
        <button class="p-2 rounded-lg flex bg-blue-600" @click="addToCart">
          <h3>加入購物車</h3>
          <i class="fa-solid fa-cart-shopping px-6 py-1 flex"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import QuantityBtn from '@/components/QuantityBtn.vue';
export default {
  components: {
    QuantityBtn,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      const cartStore = useCartStore();
      const productWithQuantity = { ...this.product, quantity: this.quantity };
      cartStore.addToCart(productWithQuantity);
    },
    increment() {
      this.quantity += 1;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    const cartStore = useCartStore();
    cartStore.loadCart();
  },
};
</script>
