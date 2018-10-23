<template>
  <div>
    <canvas id="gameCanvas" width="800" height="600" ref="gameCanvas"></canvas>
    <button>TEST</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    const canvas = this.$refs.gameCanvas
    const canvasContext = canvas.getContext('2d')
    const framesPerSecond = 30
    let ballSpeadX = 5
    let ballX = 75

    setInterval(updateAll, 1000 / framesPerSecond)
    function updateAll () {
      ballX +=ballSpeadX
      if (ballX > canvas.width || ballX < 0) { ballSpeadX *= -1 }

      canvasContext.fillStyle = 'black'
      canvasContext.fillRect(0, 0, canvas.width, canvas.height)

      canvasContext.fillStyle = 'white'
      canvasContext.beginPath()
      canvasContext.arc(ballX, 100, 10, 0, Math.PI * 2, true)
      canvasContext.fill()
    }
  }
}
</script>

<style scoped>
button{
  background: red;
}
</style>
