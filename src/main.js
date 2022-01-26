import { createApp } from 'vue'
import App from '~/App.vue'
import router from '~/routes' // index.js 붙는 거는 다 생략 가능하다. webpack.config.js에서 다 선언을 해놨기 때문
import store from '~/store'
import fetch from '~/plugins/fetch'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(fetch)
app.mount('#app')
