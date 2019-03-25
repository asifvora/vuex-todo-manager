import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import store from './store';

Vue.config.productionTip = false

Vue.use(Vuelidate);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
