<template>
  <header>
    <div class="inner">
      <div
        class="open-nav-drawer "
        @click="onNav">
      </div>
      <a
        href="/"
        class="logo"></a>
      <div class="search">
        <input
          v-model="searchText"
          placeholder="찾고 싶은 상품을 검색해 보세요!"
          @keypress.enter="search" />
        <div
          class="search__icon"
          @click="search"></div>
      </div>
      <div class="ranking">
      </div>
      <div class="user-menu">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    onNav() {
      this.$store.dispatch('navigation/onNav') // store플러긴을 설치햇기 때문에 $store로 바로 접근 가능
    },
    search() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
header {
  background-color: #fff;
  &.fixed { // 스크롤 내려도 있는 부분
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 97;
    box-shadow: 0 2px 8px rgba(#000, .07);
    .inner {
      height: 80px;
    }
  }
  .inner {
    height: 120px;
    display: flex;
    align-items: center;
  }
  .open-nav-drawer {
    display: flex;
    justify-content: center;
    align-items: center;
    // 동그라미로 만들겟다.
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    // 중첩 그림자 css 문법
    box-shadow:
      0 2px 6px rgba(#000,.06),
      0 0 1px rgba(#000,.4);
    &::after { // 가상요소 - 인라인 요소 -> 블록으로 만들기
      content: "";
      display: block;
      width: 36px;
      height: 36px;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -302px -203px;
      background-size: 363px;
    }
  }
  .logo {
    width: 94px;
    height: 40px;
    margin: 0 24px;
    background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
    background-position: -162px 0;
    background-size: 363px;
    cursor: pointer;
  }
  .search {
    position: relative;
    input {
      width: 500px;
      height: 50px;
      padding: 0 27px;
      border: 1px solid #ddd;
      border-radius: 25px;
      box-sizing: border-box;
      background-color: #fafafa;
      outline: none;
      font-size: 18px;
      font-family: 'Noto Sans KR', sans-serif;
      &::placeholder { // 가상 요소 선택자
        color: #bbb;
      }
    }
    &__icon {
      width: 50px;
      height: 50px;
      position: absolute; // 감섹 요소에서 부모 중 위 우측에 아이콘이 들어가게 배치
      top: 0;
      right: 0;
      cursor: pointer;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -162px -45px;
      background-size: 363px;
    }
  }
}
</style>
