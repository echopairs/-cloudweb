import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/index.vue'
import Login from '@/pages/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
