import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCryptojs from 'vue-cryptojs'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(VueCryptojs);
Vue.use(VueClipboard);
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
