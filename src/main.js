"use strict";

import './assets/css/swiper-3.4.0.min.css'
import './assets/css/style.css'

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Core from './assets/js/core'
import App from './App'
import Index from './components/index'
import Register from './components/reg'
import Photo from './components/photo'
import Main from './components/main'
import Result from './components/result'
import Knowledge from './components/knowledge'

(function (doc) {
  window.user = {};
  user.token = Core.getUrlParam('token');
  user.gender = Core.getUrlParam('gender');
  if(user.token){
    location.hash = '/main'
  }else{
    location.hash = '/'
  }

  function setHtmlFontSize() {
    var maxWidth = 640;
    var clientWidth = doc.documentElement.clientWidth;
    clientWidth = clientWidth > maxWidth ? maxWidth : clientWidth;
    if (clientWidth) {
      doc.documentElement.style.fontSize = 1 * (clientWidth / 10) + 'px';
    }
  }
  doc.addEventListener('DOMContentLoaded', setHtmlFontSize.bind(this), false)
})(document);
Vue.use(Router);
Vue.use(Resource);


const router = new Router({
  mode: 'hash',
  routes:[
    {path: '/', component: Index},
    {path: '/reg', component: Register},
    {path: '/photo', component: Photo},
    {path: '/main', component: Main},
    {path: '/result', component: Result},
    {path: '/knowledge', component: Knowledge},
  ]
})
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
