import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.VUE_APP_FASTBILL_API
axios.defaults.headers.common['Authorization'] = 'Basic ' + btoa(process.env.VUE_APP_FASTBILL_EMAIL + ':' + process.env.VUE_APP_FASTBILL_API_KEY)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
