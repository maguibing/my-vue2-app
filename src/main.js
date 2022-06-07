import Vue from 'vue'
import App from './App.vue'
import qs from 'qs'

import store from '@/store/index'
import router from '@/router/index'

import { isNull } from './assets/base'
Vue.config.productionTip = false

Vue.prototype.$isNull = isNull
Vue.prototype.$qs = qs

Vue.directive('goal', (el, v) => {
  el.value = v.value
})

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app')
