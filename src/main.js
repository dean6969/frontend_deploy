import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import locale from 'element-ui/lib/locale/lang/en'
import './assets/global.css'

Vue.use(ElementUI, { locale })
axios.defaults.baseURL = 'https://backendtp234.onrender.com'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
