<template>
  <li class="item">
    <span @click="link">{{title}}</span>
    <div class="explain">{{exp}}</div>
  </li>
</template>

<script>
export default {
  props: ['title', 'exp', 'url'],
  methods: {
    link () {
      if (this.url.length > 4) {
        window.open(this.url, '_blank')
      }
    }
  }
}
</script>

<style>
.item{
  list-style: none;
  font-size: 16px;
  text-align: start;
  position: relative;
  height: 17px;
  line-height: 17px;
  transition: all 3s;
}
.item:hover .explain{
  visibility: visible;
  opacity: 1;
}
.explain{
  z-index: 100;
  font-size: 16px;
  line-height: 17px;
  text-align: start;
  font-weight: 600;
  position:absolute;
  bottom: -15px;
  left: 20px;
  background: #000;
  color: #fff;
  padding: 0 10px;
  transition: all .4s;
  opacity: 0;
  visibility: hidden;
}
</style>
