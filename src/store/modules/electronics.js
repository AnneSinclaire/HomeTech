import axios from "axios";

const product = {
  namespaced: true,
  state: {
    productData: [],
  },
  getters: {
    getProducts: (state) => state.productData,
  },

}
