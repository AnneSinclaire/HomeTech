<template>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue'
  
  export default {
      setup(props, context) {
          onMounted(() => {
              context.emit("id-menu", 3);
          })
      }
  }
  </script>
  
  <style>
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  </style>
  