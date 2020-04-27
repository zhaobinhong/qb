<template>
  <div class="heat-map">
    <div class="map-chart" id="mapChart">
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import DrawMap from '@/assets/scripts/newMap'
  export default {
    name: 'WordMap',
    data () {
      return {
      }
    },
    mounted () {
      axios.get('static/data/world.json')
        .then(response => {
          let data = response.data
          this.render(data)
        })
        .catch(error => {
          console.error(error)
        })
    },
    methods: {
      render (data) {
        const config = {
          width: 2000,
          height: 1500
        }
        // eslint-disable-next-line no-unused-vars
        let a = new DrawMap(data, document.getElementById('mapChart'), config)
        // console.log(a)
      }
    }
  }
</script>
<style>
  .area-heat-map{
    margin: 210px auto 0;
    border:1px solid red;
    padding: relative;
  }
  .map-chart{
    width:2000px;
    height:1500px;
    margin: 0 auto;
    transform: translate(-50px, 250px);
    overflow: hidden;
  }
  .map-chart svg{
    display: block;
    margin: 80px auto 0;
  }
</style>

