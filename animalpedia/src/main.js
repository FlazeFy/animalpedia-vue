import './assets/main.css'
import './assets/navbar.css'
import './assets/table.css'
import './assets/button.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
