<template>
  <div class="castle">
    <TopSide :title="title"></TopSide>
    <TopMid></TopMid>
    <!--    <Left></Left>-->
    <!--    <Right></Right>-->
    <!--    <MapHeat></MapHeat>-->
    <!--    <Foot></Foot>-->
<!--    <svg id="map"></svg>-->
  </div>
</template>
<script>
  import TopSide from '../common/TopSide'
  import TopMid from '../common/TopMid'
  import Left from './castle/Left'
  import Right from './castle/Right'
  import Foot from './castle/Foot'
  export default {
    name: 'sssText',
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
      Foot
    }
  }
</script>
<style scoped>
</style>
