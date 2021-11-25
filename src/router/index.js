import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/myVue',
    name: 'MyVue',
    component: () => import('../views/MyVue.vue')
  },
  {
    path: "/SecondTust",
    name: "SecondTust",
    component: () => import("../components/SecondTust.vue")
  },
  {
    path: "/TodoList",
    name: "TodoList",
    component: () => import("../components/TodoList.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
