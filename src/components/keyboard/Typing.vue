<template>
  <div class="main">
    <div class="wrap-button">
      <my-buttons><span class="button" @click="start">start</span></my-buttons>
      <my-buttons><span class="button" @click="stop">stop</span></my-buttons>
      <my-buttons><span class="button" @click="keyboard=!keyboard">keyboard {{hide}}</span></my-buttons>
      <add-text @addText="text=$event"></add-text>
      <my-sound @soundFlag="sound=$event"></my-sound>
    </div>
    <my-info
      :text="text"
      :length="length"
      :timer="timer"
      :space="space"
      :write="write"
      :keyboard="keyboard"
      :errors="errors"
    ></my-info>

    <div class="wrap-keyboard">
      <input
        type="text"
        class='line'
        id='write'
        v-model='write'
        @keydown="checkWriten"
        @click="muveCursorToEnd"
        ref="input"
      >
      <div
        id="read"
        class="line line2"
        :class="{'my-error': flag }"
      >{{showText}}</div>
    </div>

    <my-keyboard
      :letter="letter"
      v-if="keyboard"
    ></my-keyboard>

    <audio src="../../assets/typing/sound.wav" ref="audio"></audio>
  </div>
</template>

<script>
import Keyboard from './Keyboard'
import Buttons from './Buttons'
import AddText from './AddText'
import Sound from './Sound'
import Info from './Info'

export default {
  data () {
    return {
      text: 'Position your fingers on the keyboard. Put your left little finger on the "A" and your right little finger on the semicolon. Lay your fingers one at a time on each consecutive key and place your thumbs on the space bar. The F and J keys on most keyboards have small bumps to easily identify where your two pointer fingers should stay without having to look down. During the lessons on the screen you will see the keyboard layout, it will help you understand where the letters are, to find them with your fingers without looking at the keyboard. Be sure to use only the right fingers to dial each of the letters. Always return your fingers to the origina',
      write: '',
      length: 0,
      space: 0,
      letter: '',
      errors: 0,
      sound: true,
      timer: 0,
      interval: NaN,
      flag: false,
      keyboard: true
    }
  },
  components: {
    myKeyboard: Keyboard,
    myButtons: Buttons,
    addText: AddText,
    mySound: Sound,
    myInfo: Info
  },
  methods: {
    start () {
      clearInterval(this.interval)
      this.timer = 0
      this.errors = 0
      this.length = 0
      this.space = 0
      this.letter = ''
      this.write = ''
      this.interval = setInterval(() => { this.timer++ }, 1000)
      this.$refs.input.focus()
    },
    stop () {
      clearInterval(this.interval)
    },
    checkWriten () { // main method
      setTimeout(() => { // timeout must have
        if (this.text.indexOf(this.write) === 0) {
          this.write.match(/\s/g) ? this.space = this.write.match(/\s/g).length : this.space = 0
          this.length = this.write.length
          this.letter = this.text.charAt(this.length)
          this.flag = false
        } else {
          if (this.flag === false) {
            this.errors++
            if (this.sound) {
              // console.log("alias didn't work")
              // new Audio('https://cdnjs.cloudflare.com/ajax/libs/audiojs/1.0.1/audio.cmd.min.js').play()
              // // // alias did't work
              // console.log(1)
              // beep(2)
              this.$refs.audio.play()
            }
          }
          this.flag = true
        }
      }, 4)
    },
    muveCursorToEnd () {
      this.$refs.input.selectionStart = this.$refs.input.value.length
    }
  },
  computed: {
    showText () {
      return this.text.slice(this.length)
    },
    hide () {
      return this.keyboard ? 'hide' : 'show'
    }
  }
}
</script>

<style scoped>
.main{
  height: 100vh;
  background: url(../../assets/typing/typing.jpg);
  color: white;
}
.wrap-button{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.wrap-keyboard{
  height: 70px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.line{
box-sizing: border-box;
border-right: none;
border-left: none;
border-top: 1px white solid;
border-bottom: 1px white solid;
background: rgba(0,0,0, 0.6);
height: 64px;
width: 50vw;
font-size: 30px;
line-height: 60px;
white-space: pre;
}
.line2{
  text-align: start;
}
#write{
outline: none;
color: grey;
text-align: right;
}
.my-error{
  color: red;
}
</style>
