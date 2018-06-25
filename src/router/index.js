import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Style from '@/pages/Style'
import Patterns from '@/pages/Patterns'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/style',
      name: 'Style',
      component: Style
    },
    {
      path: '/patterns',
      name: 'Patterns',
      component: Patterns
    }
  ]
})
