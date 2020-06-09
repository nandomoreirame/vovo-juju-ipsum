import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTalks } from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [
      require('@/assets/vovojuju.jpg'),
      require('@/assets/vovo-irmao-do-jorel.jpg'),
      require('@/assets/vovo-abacate.png'),
      require('@/assets/vovo-raper.jpg'),
      require('@/assets/vovo-raper2.jpg'),
    ],
    talks: ['Não conectou com a API moço, menino rebelde!'],
  },
  mutations: {
    SET_IMAGES(state, payload) {
      state.images = payload
    },
    SET_TALKS(state, payload) {
      state.talks = payload
    },
  },
  actions: {
    setImages({ commit }, state) {
      commit('SET_IMAGES', state)
    },
    setTalks({ state, commit }) {
      return new Promise((resolve, reject) => {
        return getAllTalks()
          .then(({ data }) => commit('SET_TALKS', data))
          .then((resp) => resolve(resp))
          .catch((err) => reject(err))
      })
    },
  },
})
