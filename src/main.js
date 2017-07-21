// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/reset.css'
import moment from 'moment'
import store from './vuex/store'
import 'babel-polyfill'
import VueAMap from 'vue-amap';



Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAMap);
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'static/img/logo.png',
  loading: 'static/img/logo1.png',
  attempt: 3
})
Vue.filter('moment', (value, formatString = 'YYYY-MM-DD')=>{
   return moment(value).format(formatString);
});
VueAMap.initAMapApiLoader({
  key: '6adc329674917569a9ea9aee1ece820f',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
