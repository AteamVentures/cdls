<template>
  <nav class="hello">
    <b>Creatable Design Language System</b><br/>
    <router-link class='' :to="{ name: 'Home', params: {}}">Home</router-link> / 
    <router-link class='' :to="{ name: 'Style', params: {}}">Style</router-link> / 
    <router-link class='' :to="{ name: 'Patterns', params: {}}">Patterns</router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
