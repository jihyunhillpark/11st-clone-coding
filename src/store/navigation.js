export default {
  namespaced: true,
  state: () => ({
    isShow:false
  }),
  getters: {

  },
  mutations: {
    toggleIsShow(state) {
      state.isShow = !state.isShow
    }
  },
  actions: {
    onNav({ commit }) {
      commit('toggleIsShow')
    }
  }
}
