import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

import Style from '@/pages/style/index'
import StyleColors from '@/pages/style/colors'
import StyleTypography from '@/pages/style/typography'
import StyleUI from '@/pages/style/ui'

import Patterns from '@/pages/Patterns'

import Mockup from '@/pages/mockup/index'
import MockupAuth from '@/pages/mockup/auth'
import MockupModal from '@/pages/mockup/modal'

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
    },
    {
      path: '/mockup',
      name: 'Mockup',
      component: Mockup
    },
    {
      path: '/mockup/auth',
      name: 'MockupsAuth',
      component: MockupAuth
    },
    {
      path: '/mockup/modal',
      name: 'MockupsModal',
      component: MockupModal
    }
  ]
})
