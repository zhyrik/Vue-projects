<template>
  <div>
    <ul>
      <my-item
        v-for="(item, index) in git"
        :title="item.title"
        :exp="item.explain"
        :url="item.url"
        :key="index"
      ></my-item>
    </ul>
  </div>
</template>

<script>
import Item from './Item'
export default {
  data () {
    return {
      git: [
        {title: 'git init', explain: 'create new project', url: ''},
        {title: 'init', explain: 'create new project', url: 'google.com'},
        {title: 'init', explain: 'create new project', url: 'https://www.google.com/'},
        {title: 'init', explain: 'create new project', url: 'https://github.com/'}
      ]
    }
  },
  components: {
    myItem: Item
  }
}
</script>

<style>

</style>
