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
    component: () => import('../views/Signup.vue')
  },
 {
    path: '/records',
    name: 'Records',
    component: () => import('../views/Records.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
