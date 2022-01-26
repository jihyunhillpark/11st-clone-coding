import axios from 'axios'

export default {
  install(app) {
    app.config.globalProperties.$fetch = async options => {
      const { requestName } = options // 이렇게 객체로 받아오면 확장성이 좋아지기에 객체로 받아와 구조분해할당해주자
      const { data}  = await axios({
        url: `https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main?apiKey=1216&requestName=${requestName}`,
        method: 'GET'
      })
      return data
    }
  }
}
