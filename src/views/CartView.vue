<template>
  <div
    class="bg-white-50 dark:bg-white-800 border-white-200 dark:border-white-700 rounded-lg p-8 md:p-12"
  >
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="cart">
        <h1>Your Cart</h1>
        <ul class="cart-items">
          <CartItem
            v-for="(item, index) in items"
            :key="index"
            :item="item"
            @remove="removeItem(index)"
          />
        </ul>
        <p class="total">Total: {{ calculateTotal() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItemView.vue";

const img =
  "data:image/jpeg;base64,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";

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      items: [
        { id: 1, name: "Product 1", price: 10, image: img },
        { id: 2, name: "Product 2", price: 20, image: img },
        // { id: 3, name: "Product 3", price: 30, image: img },
        // { id: 4, name: "Product 4", price: 40, image: img },
        // { id: 5, name: "Product 5", price: 50, image: img },
      ],
    };
  },
  methods: {
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.price, 0);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.cart h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.cart-items {
  list-style: none;
  padding: 0;
}

.total {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
</style>
