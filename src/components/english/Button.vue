<template>
  <div>
    <div class="button">{{answer.translate}}</div>
  </div>
</template>

<script>
export default {
  props: ['answer']
}
</script>

<style scoped>
.button{
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  font-size: 18px;
  line-height: 40px;
  margin: 15px;
}
</style>
