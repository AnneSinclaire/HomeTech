<template>
  <div>
    <NavbarComponent   />

    <router-view @id-menu="setMenu($event)" />

  </div>
</template>

<script > 
// import 'flowbite/dist/flowbite.js'

import NavbarComponent from './components/NavbarComponent.vue';
import { ref } from 'vue'

export default {
    name: 'App',
    components : {
      NavbarComponent
    },

    setup()
    {
      const idMenu = ref(1)

      function setMenu(id)
      {
        idMenu.value = id;
      }

      return{
        setMenu,
        idMenu,
      }
    }

  }

  // if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //       document.documentElement.classList.add('dark');
  //   } else {
  //       document.documentElement.classList.remove('dark')
  //   }
</script>