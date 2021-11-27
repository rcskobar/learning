import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyVue',
    component: () => import('../views/MyVue.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
