<template>
  <div class="wrap-button">
    <my-buttons><span class="info" title="speed letter per minute">spead lpm {{speadLetter}}</span></my-buttons>
    <my-buttons><span class="info" title="speed word per minute">spead wpm {{speadWord}}</span></my-buttons>
    <my-buttons><span class="info">time {{minut}} : {{timer%60}}</span></my-buttons>
    <my-buttons><span class="info">errors {{errors}}</span></my-buttons>
    <my-buttons><span class="info">accuracy {{accuracy}}</span></my-buttons>
  </div>
</template>

<script>
import Buttons from './Buttons'
export default {
  props: ['text', 'length', 'timer', 'space', 'write', 'keyboard', 'errors'],
  components: {
    myButtons: Buttons
  },
  computed: {
    minut () {
      return parseInt(this.timer / 60)
    },
    speadLetter () {
      return this.timer > 0 ? parseInt(this.length / this.timer * 60) : 0
    },
    speadWord () {
      return this.timer > 0 ? parseInt(this.space / this.timer * 60) : 0
    },
    accuracy () {
      return this.write.length < 1 ? '100%' : 100 - Math.round(this.errors * 100 / this.write.length) + '%'
    }
  }
}
</script>
