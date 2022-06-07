export default {
  namespaced: true,

  state: {
    msg: '詹桑',
  },

  mutations: {
    changeStr(state) {
      state.msg = '库桑'
    },
  },
}
