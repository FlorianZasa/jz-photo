import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Impressum from '@/views/ImpressumView.vue'



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/impressum', component: Impressum },
    ]
})

export default router