<template>
  <header>
    <div class="inner">
      <div
        class="open-nav-drawer "
        @click="onNav">
      </div>
      <div class="search">
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
  methods: {
    onNav() {
      this.$store.dispatch('navigation/onNav') // store플러긴을 설치햇기 때문에 $store로 바로 접근 가능
    }
  }
}
</script>

<style lang="scss" scoped>
header {
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
}
</style>
