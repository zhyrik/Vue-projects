<template>
  <div id="app">
    <router-link :to="'/keyboard'">keyboard</router-link>
    <router-link :to="'/form'">Form</router-link>
    <router-link :to="'/quote'">Quote</router-link>
    <router-link :to="'/english'">English game</router-link>
    <router-link :to="'/shpora'">Shpora</router-link>
    <router-link :to="'/piramid'">Piramid</router-link>
    <router-link :to="'/catch'">Catch</router-link>
    <router-link :to="'/minesweeper'">Minesweeper</router-link>
    <router-link :to="'/monster'">Monster</router-link>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
