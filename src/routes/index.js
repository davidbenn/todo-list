import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/errors/NotFound.vue'

const defineRoutes = [
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    {
        name: 'Home',
        path: '/',
        component: Home
    }
]

const routes = createRouter({ history: createWebHistory(), routes: defineRoutes })

export default routes