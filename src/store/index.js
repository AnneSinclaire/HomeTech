import axios from "axios";
import { createStore } from "vuex";

export default createStore({
    state: {
      products: [],
      categories: [],
      // ... state lainnya ...
    },
    getters:{
        getProducts: (state) => state.products,

        getCategories: (state) => state.categories,
        

        // getProductById: (state) => (productId) => {
        //     console.log("Fetching single product by ID:", productId);
        //     console.log("ProductData:", state.productData);
        //     const product = state.productData.find((p) => p.id == productId);
        //     console.log("Product:", product);
        //     return product;
        //   },
    },
    actions: {
        async fetchProduct({ commit }){
            try {
                const dataproduct = await axios.get(
                  "https://fakestoreapi.com/products?limit=8")
                commit('SET_PRODUCTS', dataproduct.data)
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        },

        async fetchCategorie({ commit }){
          try {
              const datacategorie = await axios.get(
                "https://fakestoreapi.com/products/categories")
              commit('SET_CATEGORIES', datacategorie.data)
          } catch (error) {
              alert('Ada Error')
              console.log(error)
          }
      }  ,
    

    //  async fetchSingleProduct({ commit }, productId) {
    //   try {
    //       const response = await axios.get(
    //        `https://fakestoreapi.com/products/${productId}`
    //     );
    //     commit("SET_SINGLE_PRODUCT", response.data);
    //   } catch (error) {
    //     alert(error);
    //     console.log(error);
    //   }
    // },

  },
  

    mutations: {
        SET_PRODUCTS(state,products){
            state.products = products
        },
        SET_CATEGORIES(state,categories){
          state.categories = categories
      },

        // SET_SINGLE_PRODUCT(state, products) {
        //     state.singleProducts = products;
        //   },
    }
})
