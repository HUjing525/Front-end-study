import { createRouter, createWebHashHistory } from "vue-router"
import helloWorld from './components/HelloWorld.vue'
import home from './components/Home.vue'
import application from './components/computers/application.vue'
const routes = [
  {
    path: "/",
    component: helloWorld
  },
  {
    path: "/home",
    component: home,
    children: [{path:'/1-1', component:application}]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router