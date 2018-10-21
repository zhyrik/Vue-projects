<template>
  <div class="wrap">
    <div class="top">
      <h1>Quotes added</h1>
      <div class="progress">
        <span
          :style="{ width: progress*10 + '%' }"
          v-if="lists.length > 0"
        >{{ progress }} / 10</span>
      </div>
    </div>
    <div class="midl">
      <h5>qoute</h5>
      <textarea name="item" id="textarea" v-model="text"></textarea>
    </div>
    <button @click="addQoute">add qoute</button>
    <ul class="items">
      <li
        v-for="(list, index) in lists"
        :key="list"
        class="item"
        @click="subQoute(index)"
        ref="item"
      >{{ list }}</li>
    </ul>
    <div class="info">
      <p>Info: Click on a Qoute  to delete it.</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [],
      text: ''
    }
  },
  methods: {
    addQoute () {
      if (this.lists.length < 10) {
        (this.text.length > 1) ? this.lists.push(this.text) : alert('write somsing')
      } else {
        alert('you dont write more element')
      }
      this.text = ''
    },
    subQoute (index) {
      console.log(this.lists[index])
      this.lists.splice(index, 1)
    }
  },
  computed: {
    progress () {
      return this.lists.length
    }
  }
}
</script>

<style scoped>
.wrap{
  width: 80vw;
  margin: 0 auto;
}
.top{
  text-align: start;
}
.progress{
  height: 30px;
  background-color: lightgray;
  border-radius: 5px;
  position: relative;
  margin-bottom: 50px;
}
.progress span{
  color: white;
  text-align: center;
  line-height: 30px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 10%;
  background-color: rgb(0, 108, 248);
  border-radius: 5px;
}
.midl{
  text-align: start;
  width: 40%;
  margin: 0 auto;
}
#textarea{
  width: 100%;
  height: 70px;
  border-radius: 4px;
  margin-bottom: 20px;
}
h1, h5{
  margin: 5px 0;
  text-transform: capitalize;
}
button{
  background-color: rgb(0, 108, 248);
  outline: none;
  color: white;
  padding: 8px 25px;
  font-size: 20px;
  border-radius: 10px;
  text-transform: uppercase;
}
.info{
  background-color: rgba(92, 241, 247, 0.3);
  color: rgb(0, 108, 248);
  padding: 5px;
  font-size: 16xp;
  margin: 10px 0;
}
.items{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.item{
  list-style: none;
  width: 250px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 5px 0;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  letter-spacing: 5px;
}
</style>
