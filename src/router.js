import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './components/MainPage.vue'
import KakaoMap from './components/KakaoMap.vue'
import WalkEnd from './components/WalkEnd.vue'

const routes = [
    {
        path: '/mainpage',
        name: 'mainpage',
        component: MainPage
    },
    {
        path: '/kakaomap',
        component: KakaoMap
    },
    {
        path: '/walkend',
        component: WalkEnd
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router