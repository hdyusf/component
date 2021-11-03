import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import hdyusf from '../lib/index';
Vue.use(hdyusf);
// import { Grid } from '../lib/index';
// Vue.use(Grid);

new Vue({
  render: h => h(App),
}).$mount('#app')
