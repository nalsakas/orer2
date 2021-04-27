import { createRouter, createWebHashHistory } from 'vue-router'
import OrerChart from '../components/OrerChart.vue'
import LineChart from '../components/LineChart.vue'
import NotFound from '../components/NotFound.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: 'linechart', path: '/', component: LineChart },
    { name: 'orerchart', path: '/chart/:lineId(\\d+)', component: OrerChart },
    { name: 'notfound', path: '/:catchAll(.*)', component: NotFound }
  ]
})
