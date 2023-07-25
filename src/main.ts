import { createApp } from 'vue'
import Vuex from 'vuex'
import i18n from './i18n'
import { createVuestic } from 'vuestic-ui'
import { createGtm } from '@gtm-support/vue-gtm'

import { auth } from './auth/authModule'
import stores from './stores'
import router from './router'
import vuesticGlobalConfig from './services/vuestic-ui/global-config'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { interceptor } from './interceptors/SetupInterceptor'

const app = createApp(App)

const vuetify = createVuetify({
  directives,
  components,
})

const authentication = new Vuex.Store({
  modules: {
    auth,
  },
})

app.use(vuetify)
app.use(stores)
app.use(authentication)
app.use(router)
app.use(i18n)
app.use(createVuestic({ config: vuesticGlobalConfig }))

if (import.meta.env.VITE_APP_GTM_ENABLED) {
  app.use(
    createGtm({
      id: import.meta.env.VITE_APP_GTM_KEY,
      debug: false,
      vueRouter: router,
    }),
  )
}

interceptor(authentication)

app.mount('#app')
