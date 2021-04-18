import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Artists from '../views/Artists.vue'
import Records from '../views/Records.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/artists',
    name: 'Artists',
    component: () => import(/* webpackChunkName: "about" */ '../views/Artists.vue')
  },
  {
    path: '/records',
    name: 'Records',
    component: () => import(/* webpackChunkName: "about" */ '../views/Records.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
