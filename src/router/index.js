import Vue from 'vue'
import VueRouter from 'vue-router'
import Bootstrapper from '../views/Bootstrapper'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Bootstrapper,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue')
      },
      {
        path: '/cards',
        component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue')
      },
      {
        path: '/profile',
        component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue')
      },
      {
        path: '/payments',
        component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue')
      },
      {
        path: '/credit',
        component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
