// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import '../node_modules/font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App }
}).$mount('#app')
