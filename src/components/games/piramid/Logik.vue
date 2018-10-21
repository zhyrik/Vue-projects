<template>
  <div class="wrap" ref="wrap">
    <div class="block first"></div>
    <div class="block second"></div>
    <div class="block third"></div>
    <div class="block fourth"></div>
    <div class="block fifth" @mousedown="muveBlock"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    muveBlock (event) {
      console.log(event)
      console.log(this.$refs)
    }
  }
}
</script>

<style scoped>
.wrap{
  position: relative;
  margin: 0 auto;
  width: 80vw;
  height: 80vh;
  background-color: rgba(220, 250, 220, 0.897);
}
.block{
  position: absolute;
  height: 20px;
  background:grey;
}
.first{
  position: absolute;
  width: 150px;
  bottom: 0;
}
.second{
  width: 120px;
  bottom: 20px;
}
.third{
  width: 90px;
  bottom: 40px;
}
.fourth{
  width: 60px;
  bottom: 60px;
}
.fifth{
  width: 30px;
  bottom: 80px;
}
</style>
