import axios from "axios";

const categories = {
  namespaced: true,
  state: {
    categoriesData  : [],
  },
    getters:{
        getCategories: (state) => state.categoriesData,
        

        // getProductById: (state) => (productId) => {
        //     console.log("Fetching single product by ID:", productId);
        //     console.log("ProductData:", state.productData);
        //     const product = state.productData.find((p) => p.id == productId);
        //     console.log("Product:", product);
        //     return product;
        //   },
    },
    actions: {
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
        SET_CATEGORIES(state, categories){
          state.categoriesData = categories
      },

        // SET_SINGLE_PRODUCT(state, products) {
        //     state.singleProducts = products;
        //   },
    }
}

export default categories;
