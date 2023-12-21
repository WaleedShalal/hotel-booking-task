export const LoginModule = {
  namespaced: true,
  state() {
    return {
      userEmail: ''
    }
  },
  actions: {
    setUserEmail: ({ commit }, payload) => commit('setUserEmail', payload)
  },
  mutations: {
    setUserEmail: (state, { userEmail }) => {
      state.userEmail = userEmail
      localStorage.setItem('userBookedEmail', userEmail)
    }
  },
  getters: {
    userEmail: ({ userEmail }) => userEmail
  }
}
