import { configure } from '@storybook/vue';
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import router from './router'

import Cards from '../src/components/Cards.vue'

Vue.config.productionTip = false

Vue.component('Cards', Cards);
configure(require.context('../src', true, /\.stories\.js$/), module);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
