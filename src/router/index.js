import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Impressum from '@/views/ImpressumView.vue'
import Buchen from '@/views/BuchenView.vue'
import Termine from '@/views/TermineView.vue'
import Error from '@/views/404ErrorView.vue'



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/impressum', component: Impressum },
        { path: '/buchen', component: Buchen },
        { path: '/termine', component: Termine },
        { path: '/404', component: Error },

    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router