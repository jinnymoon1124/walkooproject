import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WalkDayReport from './components/WalkDayReport.vue'

import '@fortawesome/fontawesome-free/js/all'

const app = createApp(App)

app.component('WalkDayReport', WalkDayReport)

app.use(router)
app.mount('#app')
