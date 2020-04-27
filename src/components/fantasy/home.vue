<template>
  <div class="castle">
    <TopSide :title="title"></TopSide>
    <TopMid></TopMid>
<!--    <Left></Left>-->
<!--    <Right></Right>-->
<!--    <MapHeat></MapHeat>-->
    <WorldMap></WorldMap>
<!--    <Foot></Foot>-->
  </div>
</template>
<script>
  import TopSide from '../common/TopSide'
  import TopMid from '../common/TopMid'
  import Left from './castle/Left'
  import Right from './castle/Right'
  import Foot from './castle/Foot'
  import MapHeat from './castle/MapHeat'
  import WorldMap from './map/worldMap'
  export default {
    name: 'Home',
    data () {
      return {
        title: '综合QB系统'
      }
    },
    components: {
      TopSide,
      TopMid,
      Left,
      Right,
      Foot,
      MapHeat,
      WorldMap
    }
  }
</script>
<style scoped>
</style>
