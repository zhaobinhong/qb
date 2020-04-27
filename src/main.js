// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/css/style.css'
import zoom from './assets/scripts/tool/zoom'
import 'element-ui/lib/theme-chalk/index.css'
// import * as d3 from 'd3'
// import 'd3-geo'
// import '../geoMap/style.scss'
zoom()

Vue.use(ElementUI)
// Vue.use(d3)
window.addEventListener('resize', zoom)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
