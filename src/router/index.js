import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        requireAuth: false,
        keepAlive: false
      }
    }, {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requireAuth: false,
        keepAlive: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    }
  ]
})

