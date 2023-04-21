import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './components/MainPage.vue'
import pg_alarm from './components/pg_alarm.vue'
import pg_friendlist from './components/pg_friendlist.vue'
import pg_friendadd from './components/pg_friendadd.vue'
//import pg_friendadd from './components/pg_friendadd.vue'
//import Dk_Ranking from './views/Dk_Ranking.vue'
//import Dk_Friend from './views/Dk_Friend.vue'
//import Dk_Home from './views/Dk_Home.vue'
//import Dk_Shop from './views/Dk_Shop.vue'
//import Dk_Mypage from './views/Dk_Mypage.vue'

const routes = [
      
    {
        path: '/mainpage',
        name: 'mainpage',
        component: MainPage
    },
    {
        path: '/pg_alarm',
        name: 'pg_alarm',
        component: pg_alarm
    },
    {
        path: '/pg_friendlist',
        name: 'pg_friendlist',
        component: pg_friendlist
    },
    {
        path: '/pg_friendadd',
        name: 'pg_friendadd',
        component: pg_friendadd
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router