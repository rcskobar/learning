import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/js/materialize.min.js'


import {store} from './store';

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')


