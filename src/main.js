import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import Start from './components/Start.vue'
import AClass from './components/AClass.vue'
import ClassTable from './components/ClassTable.vue'
import Settings from './components/Settings.vue'

import VueRouter from 'vue-router'
import { store } from './store/store'

import Vuetify from 'vuetify'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.darken1, // #E53935
    secondary: colors.green.lighten4, // #FFCDD2
    accent: colors.green.base // #3F51B5
  }
})

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Start
    },
    {
      path: '/testclasses/:classId',
      component: ClassTable
    },
    {
      path: '/classes/:classId',
      component: AClass
    },
    {
      path: '/settings/',
      component: Settings
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
