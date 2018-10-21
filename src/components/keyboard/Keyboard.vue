<template>
  <div class="keyboard media-hide" id="keyboard">
    <div class="rows" v-for="(rows, key) in keys" :key="key">
      <div
        v-for="item in rows"
        :key="item.title"
        :class="[
          'key',
          item.finger,
          item.grow,
          {forecast: forecastKey(item.title1)},
          {forecast: shiftKey(item.title1)},
        ]"
      >{{item.title1}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['letter'],
  data () {
    return {
      keys: {
        row1: [
          {title1: '`', finger: 'finger1', grow: ''},
          {title1: '1', finger: 'finger1', grow: ''},
          {title1: '2', finger: 'finger1', grow: ''},
          {title1: '3', finger: 'finger2', grow: ''},
          {title1: '4', finger: 'finger3', grow: ''},
          {title1: '5', finger: 'finger4', grow: ''},
          {title1: '6', finger: 'finger4', grow: ''},
          {title1: '7', finger: 'finger1', grow: ''},
          {title1: '8', finger: 'finger1', grow: ''},
          {title1: '9', finger: 'finger2', grow: ''},
          {title1: '0', finger: 'finger3', grow: ''},
          {title1: '-', finger: 'finger4', grow: ''},
          {title1: '=', finger: 'finger4', grow: ''},
          {title1: '', finger: 'finger4', grow: 'grow2'}
        ],
        row2: [
          {title1: 'tab', finger: 'finger1', grow: 'grow1'},
          {title1: 'q', finger: 'finger1', grow: ''},
          {title1: 'w', finger: 'finger2', grow: ''},
          {title1: 'e', finger: 'finger3', grow: ''},
          {title1: 'r', finger: 'finger4', grow: ''},
          {title1: 't', finger: 'finger4', grow: ''},
          {title1: 'y', finger: 'finger1', grow: ''},
          {title1: 'u', finger: 'finger1', grow: ''},
          {title1: 'i', finger: 'finger2', grow: ''},
          {title1: 'o', finger: 'finger3', grow: ''},
          {title1: 'p', finger: 'finger4', grow: ''},
          {title1: '[', finger: 'finger4', grow: ''},
          {title1: ']', finger: 'finger4', grow: ''},
          {title1: 'ent', finger: 'finger4', grow: 'grow1'}
        ],
        row3: [
          {title1: 'caps', finger: 'finger1', grow: 'grow2'},
          {title1: 'a', finger: 'finger1', grow: ''},
          {title1: 's', finger: 'finger2', grow: ''},
          {title1: 'd', finger: 'finger3', grow: ''},
          {title1: 'f', finger: 'finger4', grow: ''},
          {title1: 'g', finger: 'finger4', grow: ''},
          {title1: 'h', finger: 'finger1', grow: ''},
          {title1: 'j', finger: 'finger1', grow: ''},
          {title1: 'k', finger: 'finger2', grow: ''},
          {title1: 'l', finger: 'finger3', grow: ''},
          {title1: ';', finger: 'finger4', grow: ''},
          {title1: '\'', finger: 'finger4', grow: ''},
          {title1: '\\', finger: 'finger4', grow: ''},
          {title1: '', finger: 'finger4', grow: ''}
        ],
        row4: [
          {title1: 'shift', finger: 'finger1', grow: 'grow1', flag: true},
          {title1: '\\', finger: 'finger1', grow: ''},
          {title1: 'z', finger: 'finger1', grow: ''},
          {title1: 'x', finger: 'finger2', grow: ''},
          {title1: 'c', finger: 'finger3', grow: ''},
          {title1: 'v', finger: 'finger4', grow: ''},
          {title1: 'b', finger: 'finger4', grow: ''},
          {title1: 'n', finger: 'finger1', grow: ''},
          {title1: 'm', finger: 'finger1', grow: ''},
          {title1: ',', finger: 'finger2', grow: ''},
          {title1: '.', finger: 'finger3', grow: ''},
          {title1: '/', finger: 'finger4', grow: 'grow1'},
          {title1: 'shift', finger: 'finger4', grow: 'grow2', flag: true}
        ],
        row5: [
          {title1: 'ctr', finger: 'finger1', grow: ''},
          {title1: 'fn', finger: 'finger1', grow: ''},
          {title1: 'win', finger: 'finger1', grow: ''},
          {title1: 'alt', finger: 'finger5', grow: ''},
          {title1: ' ', finger: 'finger5', grow: 'grow3'},
          {title1: 'alt', finger: 'finger5', grow: ''},
          {title1: 'ctr', finger: 'finger3', grow: ''},
          {title1: '', finger: 'finger4', grow: ''},
          {title1: '', finger: 'finger4', grow: ''},
          {title1: '', finger: 'finger4', grow: ''}
        ]
      }
    }
  },
  methods: {
    forecastKey (key) {
      if (key === this.letter.toLowerCase()) return true
    },
    shiftKey (key) {
      if (key === 'shift') {
        if (this.letter.charCodeAt() > 64 && this.letter.charCodeAt() < 92) {
          return true
        }
      }
    }
  }
}
</script>

<style scoped>
div{
  color: red;
}
.keyboard{
    width: 800px;
    margin: 0 auto;

}
.rows{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    font-size: 20px;
}
.key{
    padding: 2px;
    border-radius: 8px;
    line-height: 40px;
    text-align: center;
    height: 48px;
    width: 48px;
    margin: 3px;
    text-transform: uppercase;
    -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75), inset 0px 0px 5px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75), inset 0px 0px 5px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75), inset 0px 0px 5px 3px rgba(0,0,0,0.75);
    text-shadow: 0px 0px 10px rgba(150, 150, 150, 1);
}
.duble{
    line-height: 20px;
    font-size: 18px;
}
.grow1{
    width: 70px;
}
.grow2{
    width: 100px;
}
.grow3{
    width: 350px;
}
.main-key{
    background-color: rgba(250,250,250, 0.2);
}
.finger1{
  border: solid 2px rgba(250, 150, 150, 1);
    color: rgba(250, 150, 150, 1);
    opacity: 0.3;
}
.finger2{
  border: solid 2px rgba(250, 250, 150, 1);
  color: rgba(250, 250, 150, 1);
  opacity: 0.3;
}
.finger3{
  border: solid 2px rgba(150, 250, 150, 1);
  color: rgba(150, 250, 150, 1);
  opacity: 0.3;
}
.finger4{
  border: solid 2px rgba(200, 150, 250, 1);
  color: rgba(200, 150, 250, 1);
  opacity: 0.3;
}
.finger5{
  border: solid 2px rgba(150, 250, 250, 1);
  color: rgba(150, 250, 250, 1);
  opacity: 0.3;
}
.forecast{
  opacity: 1;
}

</style>
