<template>
  <div class="container">
    <div class="row">
      <div class="col-3 nav-left">
        <h2>Style Guide</h2>
        <router-link class='btn btn-link' :to="{ path:'/style/colors' }">Colors</router-link><br/>
        <router-link class='btn btn-link' :to="{ path:'/style/typography' }">Typography</router-link><br/>
        <router-link class='btn btn-link' :to="{ path:'/style/ui' }">UI Elements</router-link><br/>
      </div>
      <div class="col-9 padding-t-lg">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Style',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
