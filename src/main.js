// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import Mock from './mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.css'
import VueRouter from 'vue-router'
import routes from './router/index.js'
// import { VueRouter } from 'vue-router/types/router';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
/* eslint-disable no-new */

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path == "/login") {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if(!user && to.path != '/login') {
    next({path: '/path'})
  }else{
    next()
  }
})



new Vue({
  // el: '#app',
  // template: '<App/>',
  router,
  // components: { App },
  render: h => h(App)
}).$mount('#app')
