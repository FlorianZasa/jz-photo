import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueGtag } from 'vue-gtag'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faArrowLeft, faCalendarCheck, faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars)
library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faCalendarCheck)
library.add(faCalendar)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(VueGtag, {
    config: { id: "G-PNGLDC48C0"}
})
.mount('#app')
