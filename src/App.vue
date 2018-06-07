<template>
  <div id="app">
    <!--<h1 class="page-title"><a href="#/">主頁</a> </h1>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.page-title {
  color: #00A0D8;
  font-size: 36px;
  font-weight: bold;
  padding: 30px 0;
}
.page-title a {
  color: #00A0D8;
}
</style>
