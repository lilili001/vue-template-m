<template>
  <div id="app" class="wrap layout-content">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped="">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom:40px;
}
ul{
  margin-bottom:40px;
}
  ul li{display: inline-block;font-size:16px;padding:0 20px}

</style>
