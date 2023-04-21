import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import Vue from 'vue'
//import { BootstrapVue, IconsPlugin } from 'vue-bootstrap'
//import VueRouter from 'vue-router'
//import Vue from 'vue'


//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)

const app = createApp(App)
app.use(router)
app.mount('#app')



