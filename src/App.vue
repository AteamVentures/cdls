<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>


export default {
    name: 'App',
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
