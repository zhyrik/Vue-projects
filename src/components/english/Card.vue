<template>
  <div class="card">
    <slot></slot>
    <div
      class="img"
      :style="{'background-image': 'url(' + item.url + ')'}"
      v-if="img"
    ></div>
    <div v-if="eng">{{item.eng}}</div>
    <div v-else>{{item.translate}}</div>
  </div>
</template>

<script>
export default {
  props: ['item', 'img', 'eng', 'index', 'check']
}
</script>

<style scoped>
.card{
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  font-size: 18px;
  line-height: 40px;
  margin: 15px;
  position: relative;
}
.img{
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center center;
}
</style>
