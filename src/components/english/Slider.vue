<template>
  <div>
    <button>slow --</button>
    <button>faster ++</button>
    <slider animation="fade" :speed="3000">
      <slider-item v-for="(item, index) in items" :key="index">
          <my-card
            :item="item"
            :img="true"
            :eng="true"
          ></my-card>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
import Card from './Card'
export default {
  props: ['items'],
  components: {
    Slider,
    SliderItem,
    myCard: Card
  }
}
</script>

<style scoped>
div{
  border: none!important;
}
</style>
