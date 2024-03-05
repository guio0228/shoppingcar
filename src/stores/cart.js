// store/cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    itemCount(state) {
      return state.cartItems.length;
    },
  },
  actions: {
    addToCart(product) {
      const existingProduct = this.cartItems.find((item) => item.id === product.id);
      if (existingProduct) {
        console.log('Adding');
        existingProduct.quantity += product.quantity;
      } else {
        this.cartItems.push(product);
        console.log('Adding');
      }
      this.persistCart();
    },
    persistCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    loadCart() {
      const cart = localStorage.getItem('cart');
      if (cart) {
        this.cartItems = JSON.parse(cart);
      }
    },
  },
});
