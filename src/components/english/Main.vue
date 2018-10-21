<template>
  <div>
    <button @click="button1">1</button>
    <button @click="button2">2</button>
    <button @click="button3">3</button>
    <button @click="button4">4</button>
    <my-eng
      :items="items"
      :flag="true"
      v-if="buttons[0]"
    ></my-eng>
    <my-eng
      :items="items"
      :flag="false"
      v-else-if="buttons[1]"
    ></my-eng>
    <my-slider :items="items" v-else-if="buttons[2]"></my-slider>
    <my-add v-else-if="buttons[3]"></my-add>
  </div>
</template>

<script>
import Eng from './EngCard'
import Slider from './Slider'
import Add from './AddCards'
export default {
  data () {
    return {
      buttons: [false, true, false, false],
      items: [
        {
          eng: 'apple',
          translate: 'яблуко',
          url: 'http://distasio.chem.cornell.edu/img/apple.jpg'
        },
        {
          eng: 'pear',
          translate: 'груша',
          url: 'https://vignette.wikia.nocookie.net/recipes/images/d/db/Packham_pear.jpg/revision/latest?cb=20110210142731'
        },
        {
          eng: 'chery',
          translate: 'вишня',
          url: 'https://vignette.wikia.nocookie.net/fruit/images/6/64/Orchard-Cherry.jpg/revision/latest?cb=20140805131428'
        },
        {
          eng: 'orange',
          translate: 'апельсин',
          url: 'https://vignette.wikia.nocookie.net/pikmin/images/3/30/Deanesmay-orange.jpg/revision/latest?cb=20130711115615'
        }
      ]
    }
  },
  components: {
    myEng: Eng,
    mySlider: Slider,
    myAdd: Add
  },
  methods: {
    button1 () {
      this.buttons = [true, false, false, false]
    },
    button2 () {
      this.buttons = [false, true, false, false]
    },
    button3 () {
      this.buttons = [false, false, true, false]
    },
    button4 () {
      this.buttons = [false, false, false, true]
    }
  }
}
</script>
