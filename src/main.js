import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import http from './services/http'

export const isProduction = process.env.NODE_ENV === 'production'

Vue.prototype.$http = http

Vue.config.productionTip = !isProduction
Vue.config.performance = !isProduction

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
