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
        <div 
          ref="swiper"
          class="swiper">
          <div class="swiper-wrapper">
            <div
              v-for="(rank, index) in rankings.rankings"
              :key="rank.name"
              class="swiper-slide">
              <a :href="rank.href">
                <span class="index">{{ index + 1 }}</span>
                <span class="name">{{ rank.name }}</span>
              </a> 
            </div>
          </div>
        </div>
        <div
          class="open-more"
          @click="toggleRankingWrap"></div>
      </div>
      <ul class="user-menu">
        <li>
          <a href=""></a>
          <ul class="my-menu">
            <li
              v-for="menu in myMenu"
              :key="menu.name">
              <a href=""></a>
            </li>
          </ul>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

export default {
  data() {
    return {
      searchText: '',
      rankings: {},
      userMenu: [],
      myMenu: [
        { name: '나의 쿠폰'}, 
        { name: '주문/배송조회'},
        { name: '취소/반품/교환'},
        { name: '고객센터'},
        { name: '회원정보'}
      ],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      this.rankings = await this.$fetch({
        requestName: 'rankings'
      })
      console.log(this.rankings)
      await this.$nextTick() // 화면 갱신 기다리기
      // new Swiper(요소, 옵션) - 갱신 후 swiper 라이브러리 동작
      new Swiper(this.$refs.swiper, {
        direction: 'vertical',
        speed: 1000,
        autoplay: {
          delay: 3000
        },
        loop: true
      })
    },
    onNav() {
      this.$store.dispatch('navigation/onNav') // store플러긴을 설치햇기 때문에 $store로 바로 접근 가능
    },
    search() {
      
    },
    toggleRankingWrap() {

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
  .ranking{
    width: 210px;
    position: relative;
    margin: 0 30px;
    .swiper {
      width: 182px;
      height: 28px;
      margin: 0;
      .swiper-slide {
        transition: .4s;
        opacity: 0;
        a {
          display: block;
          height: 28px;
          line-height: 28px;
          text-decoration: none;
          font-size: 15px;
          color: #333;
          font-weight: 700;
          .index {
            margin-right: 10px;
            color: #f43142;
            font-style: italic;
          }
          &:hover .name {
            color: #f43142;
          }
        }
        &.swiper-slide-active {
          opacity: 1;
        }
      }
    }
    .open-more {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1; // Required! Cause Swiper.
      cursor: pointer;
      user-select: none; // 실시간 쇼핑 검색어가 자동으로 선택(Selection)되는 것을 방지.
      &:hover {
        background-color: #ececec;
      }
      &::after {
        content: "";
        display: block;
        width: 7px;
        height: 7px;
        margin-top: -3px;
        border: solid #999;
        border-width: 0 1px 1px 0;
        box-sizing: border-box;
        transform: rotate(45deg);
      }
    }
  }
  .user-menu {
    display: flex;
    > li {
      margin-right: 25px;
      padding: 7px 0;
      position: relative;
      > a {
        display: block;
        width: 48px;
        height: 48px;
        background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
        background-size: 363px; // Origin 96px
      }
      &:nth-child(1) > a { background-position: -106px -145px; }
      &:nth-child(2) > a { background-position: 0px -198px; }
      &:nth-child(3) > a { background-position: -53px -198px; }
      &:nth-child(4) > a { background-position: -94px -70px; }
      &:nth-child(1) > a:hover { background-position: -53px -145px; }
      &:nth-child(2) > a:hover { background-position: -159px -145px; }
      &:nth-child(3) > a:hover { background-position: 0px -145px; }
      &:nth-child(4) > a:hover { background-position: -106px -198px; }
      &:last-child { margin-right: 0; }
    }
  }
}
</style>
