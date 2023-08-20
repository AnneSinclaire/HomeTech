<template>
    <li class="cart-item">
      <div class="item-details">
        <img :src="item.image" :alt="item.name" class="item-image" />
        <div class="item-info">
          <p class="item-name">{{ item.name }}</p>
          <p class="item-price">${{ item.price }}</p>
          <button class="remove-button" @click="removeItem">Remove</button>
        </div>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      item: Object
    },
    methods: {
      removeItem() {
        this.$emit('remove', this.item.id);
      }
    }
  };
  </script>
  
  <style scoped>
  .cart-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .item-image {
    max-width: 80px;
    margin-right: 10px;
  }
  
  .item-details {
    display: flex;
    align-items: center;
    flex: 1;
  }
  
  .item-info {
    display: flex;
    flex-direction: column;
  }
  
  .item-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .item-price {
    font-size: 16px;
    color: #666;
  }
  
  .remove-button {
    background-color: #f44336;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  