import { createStore } from 'vuex'
import { LoginModule } from './LoginModule/LoginModule'
import { HotelsModule } from './HotelsModule/HotelsModule'

const store = createStore({
  modules: {
    auth: LoginModule,
    hotels: HotelsModule
  }
})

export default store
