import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
