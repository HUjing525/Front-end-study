import { createRouter, createWebHashHistory } from "vue-router"
import helloWorld from './components/HelloWorld.vue'
import home from './components/Home.vue'
import application from './components/computers/application.vue'
import transport from './components/computers/transport.vue'
import network from './components/computers/network.vue'
import data_link from './components/computers/data-link.vue'
import physical from './components/computers/physical.vue'
import conclusion_html from './components/html/conclusion.vue'
import conclusion_css from './components/css/conclusion.vue'
import conclusion_js from './components/javascript/conclusion.vue'
const routes = [
  {
    path: "/",
    component: helloWorld
  },
  {
    path: "/home",
    component: home,
    children: [{path:'/1-1', component:application}, {path:'/1-2', component:transport}, {path:'/1-3', component:network}, {path:'/1-4', component:data_link}, {path:'/1-5', component:physical},
    {path:'/2-1', component:conclusion_html}, {path:'/3-1', component:conclusion_css}, {path:'/4-1', component:conclusion_js}]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router