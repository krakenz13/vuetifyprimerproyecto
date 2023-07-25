const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null }

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    refreshToken({ commit }, newToken) {
      commit('refreshToken', newToken)
    },
  },
  mutations: {
    refreshToken(state, newToken) {
      state.status.loggedIn = true
      state.user = { ...state.user, accessToken: newToken }
    },
  },
}
