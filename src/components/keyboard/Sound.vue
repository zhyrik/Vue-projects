<template>
  <div>
    <my-button><span @click="flag=!flag" class="button">
      sound
      <img v-if="flag" src="../../assets/typing/sound-on.svg" alt="audio on">
      <img v-else src="../../assets/typing/sound-of.svg" alt="audio of">
    </span></my-button>
  </div>
</template>

<script>
import Button from './Buttons'
export default {
  data () {
    return {
      flag: true
    }
  },
  props: ['sound'],
  components: {
    myButton: Button
  },
  methods: {
    changeFlag () {
      this.flag = !this.flag
      this.$emit('soundFlag', this.flag)
    }
  }
}
</script>

<style scoped>
span{
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  padding: 0 10px;
}
</style>
