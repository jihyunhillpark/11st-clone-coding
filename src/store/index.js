import { createStore } from 'vuex'
import navigation from './navigation'

// 생성된 스토어를 내보낸다.
export default createStore({
  modules: {
    navigation
  }
})
