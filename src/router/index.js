import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import List from '@/view/list'
import Detail from '@/view/detail'
import WebsiteMap from '@/view/map'
import Search from '@/view/search'
import Contact from '@/view/contact'
import Sites from '@/view/sites'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path : "/list",
      name: 'list',
      component: List
    },
    {
      path : "/map",
      name: 'map',
      component : WebsiteMap
    },
    {
      path : "/detail",
      name: 'detail',
      component: Detail
    },
    {
      path : "/search",
      name: 'search',
      component: Search
    },
    {
      path : "/contact",
      name : "contact",
      component : Contact
    },
    {
      path : "/sites",
      name : "sites",
      component : Sites
    }
  ]
})

export default router
