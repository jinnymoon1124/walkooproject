import { createWebHistory, createRouter } from 'vue-router'
import MyPage from './components/MyPage.vue'
import BadgePage from './components/BadgePage.vue'
import WalkRecordPage from './components/WalkRecordPage.vue'

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
    {
        path: '/walkrecordpage',
        name: 'walkrecordpage',
        component: WalkRecordPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router