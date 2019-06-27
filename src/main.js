import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/js/bootstrap.min"
// import "font-awesome/css/font-awesome.min.css"
import moment from 'moment';
import VueRouter from 'vue-router'

import router from './router';

Vue.use(VueRouter)
Vue.use(BootstrapVue)

moment.lang('zh-cn');
Vue.prototype.moment = moment;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})


