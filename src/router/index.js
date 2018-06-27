import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

import Style from '@/pages/Style'
import StyleColors from '@/pages/StyleColors'
import StyleTypography from '@/pages/StyleTypography'
import StyleUI from '@/pages/StyleUI'

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
      component: Style,
      name: 'Style',
      children: [
        {
          path: 'colors',
          component: StyleColors
        },
        {
          path: 'typography',
          component: StyleTypography
        },
        {
          path: 'ui',
          component: StyleUI
        }
      ]
    },
    {
      path: '/patterns',
      name: 'Patterns',
      component: Patterns
    }
  ]
})
