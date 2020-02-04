import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'

import axios from 'axios'
import Qs from 'qs'

import setaxios from './setaxios'

// 设置axios 基本路径
axios.defaults.baseURL = 'http://localhost:8089/'
Vue.prototype.$http = axios
Vue.prototype.$Qs = Qs

setaxios();
Vue.config.productionTip = false


var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



