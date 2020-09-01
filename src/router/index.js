import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import e404 from '../views/e404.vue'
import ContactUs from '../views/ContactUs.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import login from '../views/login.vue'
import edit from '../views/edit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit',
    name: 'edit',
    component: edit
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '*',
    name: '404',
    component: e404
  },
  {
    path: '/TermsOfUse',
    name: 'TermsOfUse',
    component: TermsOfUse
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
