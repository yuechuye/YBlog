import { createApp } from 'vue'
import App from './App.vue'
// 路由组件
import router from './router'
// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/styles/index.css'

const app = createApp(App)

// 安装插件
app.use(router)
app.use(ElementPlus)


 

app.mount('#app')
