import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faBars, faArrowLeft, faCalendarCheck, faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'
import VueGtag from 'vue-gtag';
import { VueCookieNext } from 'vue-cookie-next';


/* add icons to the library */
library.add(faBars)
library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faCalendarCheck)
library.add(faCalendar)


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(VueCookieNext)
app.use(VueGtag, {
  config: { id: 'G-8CQEJGVY9D' },
  router,
  enabled: true,
})

// Will be used later
app.provide('gtag', app.config.globalProperties.$gtag)
app.mount('#app')
