<template>
  <div>
    <div class="field" @click="start">
      <div class="bolls boll" @click="cathc" ref="boll"></div>
      <div class="bolls shadow" ref="shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      top: '20%',
      left: '20%'
    }
  },
  props: ['start', 'addResult'],
  methods: {
    cathc () {
      this.$refs.boll.style.top = this.top
      this.$refs.boll.style.left = this.left
      this.top = this.$refs.shadow.style.top = this.random() + '%'
      this.left = this.$refs.shadow.style.left = this.random() + '%'
      let result = this.addResult()
      this.$emit('result', result)
    },
    random () {
      return Math.floor(Math.random() * 80) + 10
    }
  }
}
</script>

<style scoped>
.field{
  margin: 0 auto;
  width: 80vw;
  height: 80vh;
  background-color: green;
  position: relative;
}
.bolls{
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: translate(-50%, -50%)
}
.boll{
  z-index: 100;
  background: red;
  top: 50%;
  left: 50%;
  cursor: pointer;
}
.shadow{
  z-index: 10;
  top:20%;
  left: 20%;
  background: rgba(0,0,0, 0.8);
}
</style>
