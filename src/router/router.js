import {createRouter, createWebHistory} from 'vue-router'

import FavoriteCats from '@/pages/FavoriteCats'
import CatsLibrary from '@/pages/CatsLibrary'

const routes = [
    {
        path: '/',
        component: CatsLibrary,
    },
    {
        path: '/favorite',
        component: FavoriteCats,
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;