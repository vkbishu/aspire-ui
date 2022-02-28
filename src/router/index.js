import Vue from 'vue'
import VueRouter from 'vue-router'
import Bootstrapper from '../views/Bootstrapper.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Bootstrapper,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue')
      },
      {
        path: '/cards',
        component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue')
      },
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue')
      },
      {
        path: 'payment',
        component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
