import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

// Global eventbus
Vue.prototype.$eventHub = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
