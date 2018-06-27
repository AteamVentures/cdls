<template>
  <section>
    <router-link class='' :to="{ name: 'Home', params: {}}">Home</router-link><br/>
    <router-link class='' :to="{ path: '/style/colors'}">Style</router-link><br/>
    <router-link class='' :to="{ name: 'Patterns', params: {}}">Patterns</router-link><br/>
  </section>
</template>

<script>
export default {
  name: 'AppSubmenu',
  data () {
    return {
    }
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
