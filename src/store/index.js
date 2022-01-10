import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// eslint-disable-next-line no-new
new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties
    productsCount () {
      // ...
    }
  },

  actions: { // = methods
    fetchProducts () {
      // make the call
    }
  },

  mutations: { // = are responsable for setting and updating the state
    setProducts () {
      // update products
    }
  }
})
