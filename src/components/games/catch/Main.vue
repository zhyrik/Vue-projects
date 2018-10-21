<template>
  <div>
    <h1>result: {{results}}</h1>
    <my-progress :time="time"></my-progress>
    <my-field :start="start" :addResult="addResult"></my-field>
    <my-modal
      :result="results"
      :start="start"
      :flag="flag"
      @newFlag="flag=$event"
      v-show="modal"
    ></my-modal>
  </div>
</template>

<script>
import Field from './Field'
import Progress from './Progress'
import Modal from './Modal'

export default {
  data () {
    return {
      time: 0, // з новим алгоритмом не обовязково
      timeInterval: 25,
      results: 0,
      flag: true,
      modal: false
    }
  },
  components: {
    myField: Field,
    myProgress: Progress,
    myModal: Modal
  },
  methods: {
    start () {
      this.modal = false
      if (this.flag) {
        this.time = 0
        this.results = 0
        this.timeInterval = 25
        let timeInt = () => {
          let interval = setTimeout(() => {
            if (this.time > 58) { // ------------------------
              clearTimeout(interval)
              this.modal = true
            } else {
              this.time++
              timeInt()
            }
          }, this.timeInterval)
        }
        setTimeout(timeInt, this.timeInterval)
      }
      this.flag = false
    },
    addResult () {
      this.results += 1
      this.time = 0
      this.timeInterval -= 1
    }
  }
}
</script>
