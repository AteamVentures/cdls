<template>
  <div id="app-wrapper">

    <div class="container">
      <div class="row">
        <div class="col-3 nav-left">
          <h2>Mockup</h2>
          <router-link class='btn btn-link' :to="{ path:'/mockup/auth' }">Auth</router-link><br/>
          <router-link class='btn btn-link' :to="{ path:'/mockup/modal' }">Modal</router-link><br/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/pages/AppHeader'

export default {
  name: 'Style',
  components: {
    AppHeader
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
