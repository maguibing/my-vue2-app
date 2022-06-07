import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import UserProfile from '@/components/UserProfile.vue'

import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HelloWorld,
    children: [
      {
        path: '/profile',
        component: UserProfile,
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = new VueRouter({
  routes,
})

export default router
