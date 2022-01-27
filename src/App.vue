<template>
  <LNB />
  <TheHeader />
  <!-- r <RouterView /> Router에 구분된 내용들을 다 출력해보게다 -->
</template>

<script>
import LNB from '~/components/LNB'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    LNB, // 지역등록
    TheHeader
  }
}
</script>

<style lang="scss" scoped>
  @import "~/scss/main";
</style>
