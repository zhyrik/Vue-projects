import Vue from 'vue'
import Vuex from 'vuex'
import register from './Registration'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    register,
    shared
  }
})
