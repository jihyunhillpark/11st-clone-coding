<template>
  <nav>
    <div class="user">
      <a href="">로그인</a>
      <div class="close-nav"></div>
    </div>
    <div class="container">
    </div>
  </nav>
</template>

<script>

</script>

<style scoped lang="scss">
nav {
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #f6f6f6;
  transition: transform .4s; // 전환 효과를 전환 속성에 적용하고 0.4초동안 일어나게 한다.
  transform: translateX(-300px); // 변환 효과 - 움직이는 거 상관없음
  &.show {
    transform: translateX(0); //원래대로 돌아와라! 0.4초동안
  }
  .user {
    height: 70px;
    padding: 0 25px;
    background-color: #fff;
    display: flex; // 버튼이랑 글자 같이 있자나~ 수평정렬
    align-items: center; //수직 정렬
    a {
      font-size: 20px;
      font-weight: 700;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .close-nav {
      width: 36px;
      height: 36px;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -261px -203px;
      background-size: 363px;
      cursor: pointer;
    }
  }
}
</style>
