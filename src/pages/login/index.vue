<template>
  <div>
    <VHeader title="登录">
      <router-link slot="left" to="/">返回</router-link>
    </VHeader>
    <form class="login" v-on:submit.prevent="onSubmit">
      <div class="line">
        <div v-show="btn && !form.username">用戶名不能爲空</div>
        <input type="text" placeholder="输入你的用戶名" v-model="form.username">
      </div>
      <div class="line">
        <div v-show="btn && !form.password">密碼不能爲空</div>
        <input type="password" placeholder="输入你的密码" v-model="form.password">
      </div>
      <input type="submit" value="登录">
    </form>
  </div>
</template>

<script>
import VHeader from '@/components/header.vue'

import * as sysApi from '@/api/system.js'
export default {
  data () {
    return {
      btn: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.btn = true
      if (!this.form.username || !this.form.password) {
        return
      }
      sysApi.login(this.form).then(res => {
        alert('success' + res)
      })
    }
  },
  components: {
    VHeader
  }
}
</script>
<style lang="less" scoped>
  .login {
    padding: 50px;
    text-align: center;
    .line {
      padding: 5px;
      input {
        padding: 0 10px;
        line-height: 28px;
      }
    }
    button {
      padding: 50px;
      margin-top: 20px;
      line-height: 28px;
    }
  }
</style>
