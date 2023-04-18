import { createWebHistory, createRouter } from 'vue-router'
import MyPage from './components/MyPage.vue'
import BadgePage from './components/BadgePage.vue'

const routes = [
    {
        path: '/',
        name: 'mypage',
        component: MyPage
    }, 
    {
        path: '/badgepage',
        name: 'badgepage',
        component: BadgePage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router