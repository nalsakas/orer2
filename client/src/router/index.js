import { createRouter, createWebHashHistory } from 'vue-router'
import OrerChart from '../components/OrerChart.vue'
import LineMap from '../components/LineMap.vue'
import NotFound from '../components/NotFound.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: 'linemap', path: '/', component: LineMap },
    { name: 'orerchart', path: '/chart/:lineId(\\d+)', component: OrerChart },
    { name: 'notfound', path: '/:catchAll(.*)', component: NotFound }
  ]
})
