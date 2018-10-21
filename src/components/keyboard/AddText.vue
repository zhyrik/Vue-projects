<template>
  <div>
    <my-button><span class="button" @click="show=!show">add own text</span></my-button>
    <div class="overlay" v-if="show">
      <textarea
        class="textarea"
        :placeholder="placeholder"
        v-model="text"
      ></textarea>
      <my-button><span class="button" @click="addText">add text</span></my-button>
    </div>
  </div>
</template>

<script>
import button from './Buttons'
export default {
  data () {
    return {
      placeholder: 'add your own text for test',
      text: '',
      show: false
    }
  },
  components: {
    myButton: button
  },
  methods: {
    addText () {
      this.show = !this.show
      this.$emit('addText', this.text)
    }
  }
}
</script>

<style scoped>
.overlay{
  position: fixed;
  z-index: 20;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.textarea{
  background: transparent;
  width: 60vw;
  height: 300px;
  padding: 15px;
  color: #fff;
  border: 1px solid #fff;
}
</style>
