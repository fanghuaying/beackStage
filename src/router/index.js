import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import stage from '@/components/stage/stage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/stage',
      name: 'stage',
      component: stage
    }
  ]
})

// let routers = [
//   {
//     path: '/',
//     name: 'Login',
//     component: Login
//   },
//   {
//     path: '/stage',
//     name: 'stage',
//     component: stage
//   }
// ];
// export default routers