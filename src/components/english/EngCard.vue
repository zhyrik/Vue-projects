<template>
  <div>
    <div class="wrap-flex">

      <my-card
        v-for="(item, key, index) in arr"
        :key="index"
        :item="item"
        :img="true"
        :eng="!flag"
      ><div @click="check(index, $event)" class="overlay" ref="overlay"></div> </my-card>

    </div>
    <my-card :item="arr[rand+1] || items[1]" :img="false" :eng="flag"></my-card>
  </div>
</template>

<script>
import Card from './Card'
import Word from './Word'
import Button from './Button'
export default {
  data () {
    return {
      arr: {
        '1': this.items[0],
        '2': this.items[1],
        '3': this.items[2]
      },
      rand: 1,
      answer: '',
      red: false
    }
  },
  components: {
    myCard: Card,
    myWord: Word,
    myButton: Button
  },
  props: ['items', 'flag'],
  methods: {
    lottery () {
      let random1 = this.random(this.items.length)
      let random2 = 0
      do {
        random2 = this.random(this.items.length)
      } while (random1 === random2)
      let random3 = 0
      do {
        do {
          random3 = this.random(this.items.length)
        } while (random2 === random3)
      } while (random1 === random3)

      this.arr[1] = this.items[random1]
      this.arr[2] = this.items[random2]
      this.arr[3] = this.items[random3]

      this.rand = this.random(3)
      this.answer = this.arr[this.rand + 1]
    },
    random (max) {
      return Math.floor(Math.random() * max)
    },
    check (index, event) {
      if (this.rand.toString() === index.toString()) {
        event.target.classList += ' green'
        setTimeout(() => {
          this.lottery()
          for (let i = 0; i < 3; i++) {
            this.$refs.overlay[i].className = 'overlay'
          }
        }, 1000)
      } else {
        console.log(this.rand, index)
        event.target.classList += ' red'
      }
    }
  }
}
</script>

<style scoped>
.wrap-flex{
  display: flex;
  justify-content: center;
}
.overlay{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.overlay:hover{
  cursor: pointer;
}
.red{
  background-color: rgba(255, 0, 0, 0.4);
}
.green{
  background-color: rgba(0, 255, 0, 0.4);
}
</style>
