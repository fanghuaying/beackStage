import Vue from 'vue'
import Router from 'vue-router'
import Login from '../../views/Login'
import NotFound from '../../views/404.vue'
import Main from '../../views/Main.vue'
import Home from '../../views/Home'
import Banner from '../../views/nav1/Banner'
import Product from '../../views/nav1/Product'
import All from '../../views/nav2/All'
import Company from '../../views/nav2/Company'
import Group from '../../views/nav2/Group'
import Industry from '../../views/nav2/Industry'
import Skill from '../../views/nav2/Skill'
import Module from '../../views/nav2/Module'
import Join from '../../views/nav3/Join'
import Relation from '../../views/nav4/Relation'

// Vue.use(Router)

let routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path:'/404',
    component:NotFound,
    name:'',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '首页',
    iconCls: 'fa fa-home',
    children: [
      { path: '/main', component: Main, name:'主页', hidden: true },
      { path: '/banner', component: Banner, name: 'banner图'},
      { path: '/product', component: Product, name: '产品介绍'},
    ]
  },
  { 
    path: '/',
    component: Home,
    name: '印象',
    iconCls: 'fa fa-binoculars',
    children: [
      { path: '/module', component: Module, name: '模块'},
      { path: '/all', component: All, name: '全部'},
      { path: '/company', component: Company, name: '公司'},
      { path: '/group', component: Group, name: '集团'},
      { path: '/industry', component: Industry, name: '行业'},
      { path: '/skill', component: Skill, name: '技术'}
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-handshake-o',
    leaf: true,//只有一个节点
    children: [
        { path: '/join', component: Join, name: '招聘' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'el-icon-phone-outline',
    leaf: true,//只有一个节点
    children: [
        { path: '/relation', component: Relation, name: '联系' }
    ]
  }
];


export default routes;