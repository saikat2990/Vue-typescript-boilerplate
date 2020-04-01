import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import '@/assets/main.css';
import EventBus from 'vue-bus-ts';

Vue.use(EventBus);
const bus = new EventBus.Bus();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  bus,
  render: h => h(App),
}).$mount('#app')


export default bus;
