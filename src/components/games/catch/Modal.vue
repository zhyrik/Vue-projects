<template>
  <div>
    <div class="modal">
      <h1>result: {{result}}</h1>
      <div class="button-wrap">
        <div class="button" @click="chancheFlag">new game</div>
        <router-link to="/"><div class="button">leave</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['result', 'start', 'flag'],
  methods: {
    chancheFlag () {
      this.flag = !this.flag
      this.$emit('newFlag', this.flag)
      this.start()
    }
  }
}
</script>

<style scoped>
h1{
  color: white;
  text-transform: uppercase;
}
.modal{
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 150;
}
.button-wrap{
  display: flex;
  justify-content: center;
}
.button{
  margin: 30px;
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: 1px solid white;
  color: white;
  text-align: center;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
}
.button:hover{
  background: rgba(255, 255, 255, 0.9);
  color: black;
}
</style>
