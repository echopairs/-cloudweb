<template>
  <div>
    <VHeader title="首頁">
      <router-link slot="left" to="/">首頁</router-link>
      <router-link slot="right" to="/sigout">退出</router-link>
    </VHeader>
    <div style="padding: 50px;">欢迎回家</div>
  </div>
</template>

<script>
import VHeader from '@/components/header.vue'

export default {
  components: {
    VHeader
  }
}
</script>

<style scoped>

</style>
