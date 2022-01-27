import { createStore } from 'vuex'
import navigation from './navigation'

// 생성된 스토어를 내보낸다.
export default createStore({
  modules: {
    navigation // 해당 팔일을 모듈로 등록하겠다. 여기서 지정한 key가 namespace가 되더라. 그리고 key value같으면 생략 ㅇㅋ
  }
})
