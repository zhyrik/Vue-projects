<template>
  <div class="wrap">
    <div class="progres-wrap">
      <my-progres :health="player">
        <h1>You</h1>
      </my-progres>
      <my-progres :health="monster">
        <h1>Monster</h1>
      </my-progres>
    </div>
    <div class="buttons">
      <button v-if="flag.start" @click="start">Start</button>
      <template v-else>
        <button @click="actions('monster', 'hits', -1, 'red', 'plaer', -1), changheFlag()">attack</button>
        <button @click="actions('monster', 'hits', -1, 'red', 'plaer', -2), changheFlag()">super attack</button>
        <button @click="actions('plaer', 'hill', 1 , 'red', 'plaer', 0), changheFlag()">hill</button>
        <button @click="flag.start = true">give up</button>
      </template>
    </div>
    <ul class="list">
      <li
        v-for="(list, index) in lists"
        :key="index"
        :class="[list.color]"
      >{{ list.name }} {{ list.hits }} {{ list.who}} for {{ list.health }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      flag: {
        func: true,
        start: true
      },
      player: 100,
      monster: 100,
      lists: [],
      attack: 0
    }
  },
  methods: {
    start () {
      this.player = 100
      this.monster = 100
      this.flag.start = false
      this.lists = []
    },
    changheFlag () {
      this.flag.func = true
    },
    attackValue (comb) {
      this.attack = parseInt(Math.random() * 10 * (comb)) + 6 * comb
      if (this.flag.func) this.player += this.attack
      else this.monster += this.attack
    },
    actions (name, hits, comb, color, who, comb2) { // main
      this.attackValue(comb)
      if (this.player > 100) this.player = 100
      this.lists.unshift({ name, hits, health: this.attack, color, who }) // monster attack
      if (this.flag.func) { // plaer atttack
        this.flag.func = false
        this.actions('plaer', 'hits', comb2, 'blue', 'monster')
      }
      this.endGame()
    },
    endGame () {
      if (this.player <= 0) {
        alert('you lost play gain?')
        this.start()
      }
      if (this.monster <= 0) {
        alert('you win play gain?')
        this.start()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progres-wrap{
  display: flex;
  justify-content: space-around;
  padding-bottom: 50px;
}
.wrap{
  border: solid red 1px;
}
.buttons{
  padding: 30px;
  display: flex;
  justify-content: center;
  background-color: grey;
}
button{
  margin: 0 30px;
  font-size: 20px;
  padding: 10px 30px;
}
.red{
  background-color: rgba(250, 0, 0, 0.4);
  color: red;
  list-style: none;
  margin: 2px;
  padding: 5px;
}
.blue{
  background-color: rgba(0, 0, 250, 0.4);
  color: blue;
  list-style: none;
  margin: 2px;
  padding: 5px;
}

</style>
