<template>
  <TheHeader />
  <RouterView /> <!-- router에 구분된 내용들을 다 출력해보게다 -->
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>
