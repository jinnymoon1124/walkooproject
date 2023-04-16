import { createApp } from 'vue'
import App from './components/MyPage.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
