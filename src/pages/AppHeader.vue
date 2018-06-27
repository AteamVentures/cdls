<template>
  <div class="container-fluid container-blueBg">
    <div class="container">
      <div class="row">
        <nav class="desktop">
          <div class="col-6">
            <b>Creatable Design Language System</b><br/>
          </div>
          <div class="col-6 d-flex justify-content-end">
            <router-link class='' :to="{ path:'/style/colors' }">Style Guide</router-link> / 
            <router-link class='' :to="{ path:'/patterns' }">Patterns</router-link> /
            <router-link class='' :to="{ path:'/pages' }">Pages</router-link>
          </div>
        </nav>
      </div>
    </div>
  </div>
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
