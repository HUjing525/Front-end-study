import { createApp } from 'vue'
import App from './App.vue';
import {ElButton, ElContainer, ElHeader, ElAside, ElMenu, ElSubmenu, ElMain, ElMenuItem, ElIcon} from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import router from './router.js'


const app = createApp(App)
app.use(ElButton)
app.use(ElContainer)
app.use(ElHeader)
app.use(ElAside)
app.use(ElMenu)
app.use(ElSubmenu)
app.use(ElMain)
app.use(ElMenuItem)
app.use(ElIcon)
app.use(router);
app.mount('#app')
