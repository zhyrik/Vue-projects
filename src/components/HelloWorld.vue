<template>
  <div>
    <router-link :to="'/keyboard'">keyboard</router-link>
    <router-link :to="'/form'">Form</router-link>
    <router-link :to="'/quote'">Quote</router-link>
    <router-link :to="'/english'">English game</router-link>
    <router-link :to="'/shpora'">Shpora</router-link>
    <router-link :to="'/piramid'">Piramid</router-link>
    <router-link :to="'/catch'">Catch</router-link>
    <router-link :to="'/minesweeper'">Minesweeper</router-link>
    <router-link :to="'/monster'">Monster</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
