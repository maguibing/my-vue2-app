import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import UserProfile from '@/components/UserProfile.vue'
import NProgress from '@/assets/nprogress'
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

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
