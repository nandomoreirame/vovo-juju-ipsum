import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTalks } from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    talks: []
  },
  mutations: {
    'SET_IMAGES' (state, payload) {
      state.images = payload
    },
    'SET_TALKS' (state, payload) {
      state.talks = payload
    }
  },
  actions: {
    setImages ({ commit }, state) {
      commit('SET_IMAGES', state)
    },
    setTalks ({ commit }) {
      return new Promise((resolve, reject) => {
        return getAllTalks()
          .then(({ data }) => commit('SET_TALKS', data))
          .then(resp => resolve(resp))
          .catch(err => reject(err))
      })
    }
  }
})
