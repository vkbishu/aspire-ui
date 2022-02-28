import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseLayout from "@/components/layouts/BaseLayout"
import axios from 'axios'
import store from "./store"

// toast
import VueToast from 'vue-toast-notification'
//import 'vue-toast-notification/dist/theme-default.css'
import 'vue-toast-notification/dist/theme-sugar.css'
Vue.use(VueToast, {
  // options
  position: 'top',
  duration: 3000
});

// modal
import VModal from 'vue-js-modal'
Vue.use(VModal, { dialog: true });

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.component('base-layout', BaseLayout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
