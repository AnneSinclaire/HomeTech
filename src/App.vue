<template>
  <div>
    <NavbarComponents   />



    <router-view @id-menu="setMenu($event)" />

    <!-- <footerComponents /> -->

  </div>
</template>

<script > 
// import 'flowbite/dist/flowbite.js'

import NavbarComponents from './components/NavbarComponent.vue';
// import footerComponents from './components/FooterComponents.vue'
import { ref } from 'vue'

export default {
    name: 'App',
    components : {
      NavbarComponents,



      // footerComponents
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
</script>