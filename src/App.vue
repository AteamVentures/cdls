<template>
  <div id="app">
    <app-header></app-header>
    <div id="body-wrapper">
        <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/pages/AppHeader'
export default {
    name: 'App',
    components: {
      AppHeader
    },
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  }
</script>

<style lang="scss">
@import "static/css/cdls/core/common"


</style>
