import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './components/MainPage.vue'
import Rank from './components/Rank.vue'
import FamilyRank from './components/FamilyRank.vue'
import FriendRank from './components/FriendRank.vue'
import PetRank from './components/PetRank.vue'

const routes = [
    {
        path: '/mainpage',
        name: 'mainpage',
        component: MainPage
    },
    {
        path: '/rank',
        name: 'rankpage',
        component: Rank
    },
    {
        path: '/rank/family',
        name: 'familyrankpage',
        component: FamilyRank
    },
    {
        path: '/rank/friend',
        name: 'frinedrankpage',
        component: FriendRank
    },
    {
        path: '/rank/pet',
        name: 'petrankpage',
        component: PetRank
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router