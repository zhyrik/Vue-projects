<template>
  <div>
    hello
    <div class="field" :style="{width: fieldWidth}">
      <div class="item"
        :class="{'over-hidn': mineFlag[index]}"
        v-for="(item, index) in items"
        :key="index"
        @click="bigBang(index, $event)"
      ></div>
    </div>
    <button @click="mineLoop">click</button>
    <button @click="start">start</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: 81,
      mineSum: 10,
      mineNumber: [],
      mineFlag: [],
      numbers: {}
    }
  },
  computed: {
    fieldWidth () {
      return (parseFloat(Math.sqrt(this.items) + 1) * 20) + 'px'
    }
  },
  methods: {
    mineRandom () {
      let num = parseInt(Math.random() * this.items)
      for (let i = 0; i < this.mineNumber.length; i++) {
        if (this.mineNumber[i] === num) return false
      }
      this.mineNumber.push(num)
    },
    mineLoop () {
      this.mineNumber = []
      while (this.mineNumber.length < 10) { this.mineRandom() }
    },
    bigBang (index, event) {
      for (let i = 0; i < this.mineNumber.length; i++) {
        if (index === this.mineNumber[i]) {
          event.target.className += ' mine'
        }
      }
      if (this.numbers[index]) {
        event.target.innerHTML = this.numbers[index]
      }
      event.target.className += ' empty'
      let cols = Math.floor(Math.sqrt(this.items))
      this.algorytm2(index, cols, this.mineFlag, true)
    },
    start () {
      let cols = Math.floor(Math.sqrt(this.items))
      for (let i = 0; i < this.items; i++) {
        this.numbers[i] = 0
        this.mineFlag.push(true)
      }

      Object.preventExtensions(this.numbers)

      for (let j = 0; j < this.mineNumber.length; j++) {
        this.algorytm(j, cols, this.numbers, +1)
        // if ((this.mineNumber[j] - 1) >= 0 && this.mineNumber[j] % cols > 0) this.numbers[(this.mineNumber[j] - 1)] += 1
        // if ((this.mineNumber[j] + 1) && this.mineNumber[j] % cols !== (cols - 1)) this.numbers[(this.mineNumber[j] + 1)] += 1
        // if ((this.mineNumber[j] - cols -1) >= 0 && this.mineNumber[j] % cols > 0) this.numbers[(this.mineNumber[j] - cols -1)] += 1
        // if ((this.mineNumber[j] - cols) >= 0) this.numbers[(this.mineNumber[j] - cols)] += 1
        // if ((this.mineNumber[j] - cols +1) >= 0 && this.mineNumber[j] % cols !== (cols - 1)) this.numbers[(this.mineNumber[j] - cols + 1)] += 1
        // if ((this.mineNumber[j] + cols -1) < this.items - 1 && this.mineNumber[j] % cols > 0) this.numbers[(this.mineNumber[j] + cols -1)] += 1
        // if ((this.mineNumber[j] + cols) < this.items - 1) this.numbers[(this.mineNumber[j] + cols)] += 1
        // if ((this.mineNumber[j] + cols +1) < this.items - 1  && this.mineNumber[j] % cols !== (cols - 1)) this.numbers[(this.mineNumber[j] + cols + 1)] += 1
      }
    },
    algorytm (j, cols, arr, actions) {
      if ((this.mineNumber[j] - 1) >= 0 && this.mineNumber[j] % cols > 0) arr[(this.mineNumber[j] - 1)] += actions
      if ((this.mineNumber[j] + 1) && this.mineNumber[j] % cols !== (cols - 1)) arr[(this.mineNumber[j] + 1)] += actions
      if ((this.mineNumber[j] - cols - 1) >= 0 && this.mineNumber[j] % cols > 0) arr[(this.mineNumber[j] - cols - 1)] += actions
      if ((this.mineNumber[j] - cols) >= 0) arr[(this.mineNumber[j] - cols)] += actions
      if ((this.mineNumber[j] - cols + 1) >= 0 && this.mineNumber[j] % cols !== (cols - 1)) arr[(this.mineNumber[j] - cols + 1)] += actions
      if ((this.mineNumber[j] + cols - 1) < this.items - 1 && this.mineNumber[j] % cols > 0) arr[(this.mineNumber[j] + cols - 1)] += actions
      if ((this.mineNumber[j] + cols) < this.items - 1) arr[(this.mineNumber[j] + cols)] += actions
      if ((this.mineNumber[j] + cols + 1) < this.items - 1 && this.mineNumber[j] % cols !== (cols - 1)) arr[(this.mineNumber[j] + cols + 1)] += actions
    },
    algorytm2 (j, cols, arr, actions) {
      if (j - 1 >= 0 && this.mineNumber[j] % cols > 0) arr[j - 1] = false
      if (j + 1 < this.items && this.mineNumber[j] % cols !== (cols - 1)) arr[(j + 1)] = false
      if ((j - cols - 1) >= 0 && this.mineNumber[j] % cols > 0) arr[(j - cols - 1)] = false
      if ((j - cols) >= 0) arr[(j - cols)] = false
      if ((j - cols + 1) >= 0 && this.mineNumber[j] % cols !== (cols - 1)) arr[(j - cols + 1)] = false
      if ((j + cols - 1) < this.items - 1 && this.mineNumber[j] % cols > 0) arr[(j + cols - 1)] = false
      if ((j + cols) < this.items - 1) arr[(j + cols)] = false
      if ((j + cols + 1) < this.items - 1 && this.mineNumber[j] % cols !== (cols - 1)) arr[(j + cols + 1)] = false
    },
    colored (event) {
      if (event.target.innerHTML === '1') event.target.style.color = '#00f'
      if (event.target.innerHTML === '2') event.target.style.color = '#0f0'
      if (event.target.innerHTML === '3') event.target.style.color = '#f00'
      if (event.target.innerHTML === '4') event.target.style.color = '#500'
      if (event.target.innerHTML === '5') event.target.style.color = '#505'
      if (event.target.innerHTML === '6') event.target.style.color = '#000'
    }
  }
}
</script>

<style scoped>
.field{
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background: grey;
}
.item{
  font-weight: 900;
  margin: 1px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #D3D3D3;
  box-shadow: inset 1px 1px 0px 1px rgba(255,255,255,1), inset -1px -1px 0px 1px rgba(0,0,0,1);
  background-size: cover;
  box-sizing: border-box;
  position: relative;
}
.over-hidn::before{
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f00;
}
.flag{
  background-image: url('../../assets/minesweeper/flag.png');
}
.mine{
  background-image: url('../../assets/minesweeper/mine.png');
}
.empty{
  background-color: #D3D3D3;
  box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,1);
}
</style>
