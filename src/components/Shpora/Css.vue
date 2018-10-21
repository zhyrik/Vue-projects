<template>
  <ul>
    <li class="title">
      <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">Selectors</a>
    </li>
    <my-item
      v-for="(item, index) in selectors"
      :title="item.title"
      :exp="item.explain"
      :url="item.url"
      :key="index"
    ></my-item>
  </ul>
</template>

<script>
import Item from './Item'

export default {
  data () {
    return {
      selectors: [
        {title: '*', explain: 'all elements', url: ''},
        {title: '.class', explain: 'all class elements', url: ''},
        {title: '#id', explain: 'id element', url: ''},
        {title: 'div', explain: 'select all div elements', url: ''},
        {title: 'div, p', explain: 'select all div and p elements', url: ''},
        {title: 'div p', explain: 'select all p inside div', url: ''},
        {title: 'div>p', explain: 'select all p inside div where div perent', url: ''},
        {title: 'div+p', explain: 'select p after div', url: ''},
        {title: 'div~p', explain: 'select ALL p after div', url: ''},
        {title: '[href]', explain: 'all who have href atribute', url: ''},
        {title: '[href="www.google.com"]', explain: 'all who have href atribute', url: ''},
        {title: '[class*="red"]', explain: 'have red class', url: ''},
        {title: '[class^="red"]', explain: 'class begin red...........', url: ''},
        {title: '[src$=".jpg"]', explain: 'atribute end .jpg', url: ''},
        {title: 'div:not(#wrap)', explain: 'all div without #wrap', url: ''},
        {title: 'div:nth-child(3)', explain: 'number 3 after div (sibling)', url: ''},
        {title: 'div:nth-last-child(3)', explain: 'number of bottom 3 after div (sibling)', url: ''},
        {title: 'div:nth-of-type(3)', explain: 'number 3 after div (sibling)', url: ''},
        {title: 'div:nth-of-last-type(3)', explain: 'number of bottom 3 after div (sibling)', url: ''},
      ]
    }
  },
  components: {
    myItem: Item
  }
}
</script>

<style scoped>
  .title{
    list-style: none;
    text-transform: uppercase;
    text-align: start;
    font-weight: 600;
  }
</style>
