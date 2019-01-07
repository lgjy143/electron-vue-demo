import Vue from 'vue'
import axios from 'axios'

import ElementUI from 'element-ui';
//import './assets/styles/theme.scss';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// 定义全局点击函数
Vue.prototype.globalClick = function (callback) {
  document.getElementById('main').onclick = function () {
      callback();
  };
};

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
