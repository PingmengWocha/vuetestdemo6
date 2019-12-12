import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then(res => {
  console.log(res);
})
