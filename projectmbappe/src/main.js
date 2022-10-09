// import 'bootstrap/dist/css/bootstrap.js'
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBuilding, faEnvelope, faHouse, faPhone, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTwitter, faFacebook, faInstagram, faGoogle, faLinkedin, faBuilding, faHouse, faEnvelope, faPhone)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
