// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import router from './router'
import * as fb from 'firebase'
import vuex from 'vuex'

Vue.use(Vuelidate)
Vue.use(vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBrVqWb-kAaeyXD2BM-wUBUnVooxbRRE-U',
      authDomain: 'my-vue-project-b16ed.firebaseapp.com',
      databaseURL: 'https://my-vue-project-b16ed.firebaseio.com',
      projectId: 'my-vue-project-b16ed',
      storageBucket: 'my-vue-project-b16ed.appspot.com',
      messagingSenderId: '308678990078'
    })
    console.log(fb)
  }
})
