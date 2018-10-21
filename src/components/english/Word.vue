<template>
  <div>
    <div class="word">{{word}}</div>
  </div>
</template>

<script>
export default {
  props: ['word']
}
</script>

<style scoped>
.word{
  font-size: 18px;
  line-height: 40px;
  border: 1px solid black;
  padding: 0 50px;
  display: inline;
}
</style>
