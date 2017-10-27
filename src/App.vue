<template>
  <div id = "app">
    <topbar></topbar>
    <homecontent></homecontent>


    
  </div>
</template>

<script>
import topbar from '@/components/TopBar'
import homecontent from '@/components/HomeContent'

export default {
  name: 'app',
  components:{ topbar, homecontent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
