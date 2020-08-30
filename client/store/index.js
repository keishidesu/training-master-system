import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  user: {
    authenticated: false,
    id: null
  }
})

export const mutations = {
  authUser (state, user) {
    state.user.id = user.id
    state.user.authenticated = true
  }
}
