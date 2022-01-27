export default {
  namespaced: true,
  state: () => ({
    isShow:false
  }),
  getters: {

  },
  mutations: { // 변이
    setState(state, payload) {
      // const payload = {
      //  isShow: true
      // }
      // ['isShow']
      Object.keys(payload).forEach(key => {
        // state.isShow = true
        state[key] = payload[key] //isShow
      })
    }
  },
  actions: {
    onNav({ commit }) {
      commit('setState', {
        isShow: true
      })
    },
    offNav({ commit }) {
      commit('setState', {
        isShow: false
      })
    }
  }
}
