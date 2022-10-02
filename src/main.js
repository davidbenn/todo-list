import { createApp } from 'vue'

import Router from './routes/index.js'

import './assets/css/input.css'

import App from './App.vue'

createApp(App)
.use(Router)
.mount('#app')
