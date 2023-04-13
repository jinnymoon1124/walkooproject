import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './components/MainPage.vue'
import KakaoMap from './components/KakaoMap.vue'

const routes = [
    {
        path: '/mainpage',
        name: 'mainpage',
        component: MainPage
    },
    {
        path: '/kakaomap',
        component: KakaoMap
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router