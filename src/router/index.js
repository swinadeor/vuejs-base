import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CustomerCreate from '../views/Customer/Create.vue'
import CustomerList from '../views/Customer/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/customer-create',
    name: 'CustomerCreate',
    component: CustomerCreate,
    meta: {
      title: 'Customer Creation'
    }
  },
  {
    path: '/customer-list',
    name: 'CustomerList',
    component: CustomerList,
    meta: {
      title: 'Customer Creation'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
