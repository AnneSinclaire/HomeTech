import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productsview from '../views/ProductsView.vue'
import categoryview from '../views/CategoryView.vue'
import loginview from '../views/LoginView.vue'
import singleproductview from '../views/SingleProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: productsview,
      // beforeEnter: (to, from, next) => {
      //   const loggedInUser = true;
      //   if (loggedInUser) {
      //     next(); //Lanjutkan navigasi ke halaman produk jika sudah login
      //   } else {
      //     next("/login"); // Alihkan ke halaman login jika belum login
      //   }
      // }
    },
    {
      path: '/category',
      name: 'category',
      component: categoryview
    },
    {
      path: '/login',
      name: 'login',
      component: loginview
    },
    {
      path: '/singleproduct',
      name: 'singleproduct',
      component: singleproductview
    } 
    
  ]
})

export default router
