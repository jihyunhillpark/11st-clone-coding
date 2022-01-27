import { createApp } from 'vue'
import App from '~/App.vue'
import router from '~/routes' // index.js 붙는 거는 다 생략 가능하다. webpack.config.js에서 다 선언을 해놨기 때문
import store from '~/store'
import fetch from '~/plugins/fetch'

const app = createApp(App)
// use - vue plugin 등록
app.use(router)
app.use(store) // navigation.js를 통해 navigation이름으로 등록한 모듈들을 가져와서 쓰겠다.
app.use(fetch) // createApp 되는 순간 install 객체 생성
app.mount('#app')
