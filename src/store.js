import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    talks: []
  },
  mutations: {
    SET_IMAGES (state, payload) {
      state.images = payload
    },
    SET_TALKS (state, payload) {
      state.talks = payload
    }
  },
  actions: {
    setImages ({ commit }, state) {
      return commit('SET_IMAGES', state)
    },
    setTalks ({ commit }, state) {
      return commit('SET_TALKS', state)
    }
  }
})
