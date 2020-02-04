import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    // 设置vuex的 token
    settoken(state, token) {
      state.token = token
    }
  },
  actions: {
    settoken(context, token) {
      context.commit('settoken', token)
    }
  },
  modules: {
  }
})
