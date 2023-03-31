import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menusListState: true,
  },

  getters: {
    getMenusListState(state): boolean {
      return state.menusListState;
    },
  },

  mutations: {
    setMenusListState(state, value) {
      state.menusListState = value;
    },
  },
})
