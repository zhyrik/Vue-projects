<template>
  <div>
    <div class="progress">
      <div class="overlay" :style="{width: progressWidth}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['time'],
  computed: {
    progressWidth () {
      return this.time * 100 / 60 + '%'
    }
  }
}
</script>

<style scoped>
.progress{
  margin: 0 auto;
  width: 80vw;
  height: 30px;
  background: rgba(212, 180, 35, 0.514);
  position: relative;
}
.overlay{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: blue;
}
</style>
