import Vue from 'vue'
import Vuex from 'vuex'
import son from './modules/son.js'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    son,
  },
})
