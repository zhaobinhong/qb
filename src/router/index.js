/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2017-12-27 11:24:06
 * @Last Modified time: 2017-12-27 11:24:06
 * @Description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Castle from '@/components/fantasy/castle/Castle'
import Home from '@/components/fantasy/Home'
import test from '@/components/fantasy/text'
import Fireworks from '@/components/stride/fireworks/Fireworks'
import Sailor from '@/components/excleamation/sailor/Sailor'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [{
      path: 'home',
      component: Home
    }, {
      path: 'test',
      component: test
    }, {
      path: 'fantasy/castle',
      component: Castle
    }, {
      path: 'stride/fireworks',
      component: Fireworks
    }, {
      path: 'excleamation/sailor',
      component: Sailor
    }]
  }]
})
