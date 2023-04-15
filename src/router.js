import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './components/MainPage.vue'
import MyPage from './components/MyPage.vue'

const routes = [
    {
        path: '/mainpage',
        name: 'mainpage',
        component: MainPage,
    },
    {
        path: '/mypage',
        name: 'mypage',
        component: MyPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router