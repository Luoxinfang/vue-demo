"use strict";

import './assets/css/swiper-3.4.0.min.css'
import './assets/css/style.css'

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import App from './App'
import Index from './components/index'
import Register from './components/reg'
import Photo from './components/photo'
import Main from './components/main'
import Result from './components/result'
(function (doc) {
  function setHtmlFontSize() {
    var maxWidth = 640;
    var clientWidth = doc.documentElement.clientWidth;
    clientWidth = clientWidth > maxWidth ? maxWidth : clientWidth;
    if (clientWidth) {
      doc.documentElement.style.fontSize = 1 * (clientWidth / 10) + 'px';
    }
  }
  doc.addEventListener('DOMContentLoaded', setHtmlFontSize.bind(this), false);
})(document);
Vue.use(Router);
Vue.use(Resource);


const router = new Router({
  mode: 'history',
  routes:[
    {path: '/', component: Index},
    {path: '/reg', component: Register},
    {path: '/photo', component: Photo},
    {path: '/main', component: Main},
    {path: '/result', component: Result}
  ]
})


const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
