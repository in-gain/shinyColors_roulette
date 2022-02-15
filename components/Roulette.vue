<template>
  <div class="small">
    <div class="pin">
      ▼
    </div>
    <line-chart :chart-data="datacollection" />
  </div>
</template>

<script>
// eslint-disable-next-line quotes
import LineChart from "./LineChart.js"

export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        datasets: [
          {
            label: [this.$route.query.label1, this.$route.query.label2],
            backgroundColor: ['#f87979', '#ff00ff'],
            data: [this.$route.query.number1, this.$route.query.number2]
          }
        ]
      }
    }
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}

.pin {
    font-size:50px;
    position:absolute;
    left:47.5%;
    top:26%;
    color:red;
}
</style>
