import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/router'
import http from './http'

const app = createApp(App).use(router).use(ElementPlus)
app.config.globalProperties.$http = http
app.mount('#app')
