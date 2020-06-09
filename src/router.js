import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  hashbang: false,
  linkActiveClass: 'active',
  history: true,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
})
