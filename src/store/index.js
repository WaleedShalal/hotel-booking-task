import { createStore } from 'vuex'
import { LoginModule } from './LoginModule/LoginModule'

const store = createStore({
  modules: {
    auth: LoginModule
  }
})

export default store
