import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user/:userId',
        name: 'UserProfile',
        component: UserProfile
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router




