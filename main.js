import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Router from '@/nav';
//import routes from "@/nav";

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

//const router = new VueRouter({routes, mode: 'history'});
new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app')
