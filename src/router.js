import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './components/MainPage.vue'
import KakaoMap from './components/KakaoMap.vue'
import WalkEnd from './components/WalkEnd.vue'
import WalkDayReport from './components/WalkDayReport.vue'
import Loading from './components/Loading.vue'
import Ranking from "./components/Ranking.vue"
import FriendList from "./components/FriendList.vue"
import Store from "./components/Store.vue"
import MyPage from "./components/MyPage.vue"
import Alarm from "./components/Alarm.vue"
import WalkMate from "./components/WalkMate.vue"
import StartPage from "./components/StartPage.vue"


const routes = [
    {
        path: '/',
        name: 'mainpage',
        component: MainPage,
        meta: { showMenu: true }
    },
    {
        path: '/kakaomap',
        component: KakaoMap,
        meta: { showMenu: false }
    },
    {
        path: '/walkend',
        component: WalkEnd,
        meta: { showMenu: false }
    },
    {
        path: '/walkdayreport',
        component: WalkDayReport,
        meta: { showMenu: false }
    },
    {
        path: '/loading',
        component: Loading,
        meta: { showMenu: false }
    },
    {
        path: "/ranking",
        name: "ranking",
        component: Ranking,
        meta: { showMenu: true }
    },
    {
        path: "/friendlist",
        name: "friendlist",
        component: FriendList,
        meta: { showMenu: true }
    },
    {
        path: "/store",
        name: "store",
        component: Store,
        meta: { showMenu: true }
    },
    {
        path: "/mypage",
        name: "mypage",
        component: MyPage,
        meta: { showMenu: true }
    },
    {
        path: "/alarm",
        name: "alarm",
        component: Alarm,
        meta: { showMenu: true }
    },
    {
        path: "/walkmate",
        name: "walkmate",
        component: WalkMate,
        meta: { showMenu: false }
    },
    {
        path: "/startpage",
        name: "startpage",
        component: StartPage,
        meta: { showMenu: false }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router