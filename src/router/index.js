import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Details from '../components/Details.vue'
import Search from '../components/Search.vue'
import PageNotFound from '../components/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: Search,
    props: true
  },
  {
    path:'/:catchAll(.*)',
    name:"NotFound",
    component: PageNotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
