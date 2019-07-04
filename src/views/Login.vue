<template>
  <div class="login">
    <div class="login-card">
      <b-card title="登录" style="max-width: 30rem;" class="mb-2">
        <b-form @submit="onSubmit">
          <b-form-group id="input-user" label="用户名:" label-for="input-user">
            <b-form-input id="input-user" v-model="username" type="text" required placeholder="输入用户名"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="密码:" label-for="input-password">
            <b-form-input
              id="input-password"
              v-model="password"
              type="password"
              required
              placeholder="输入密码"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-user" label-for="checkbox-1">
            <b-form-checkbox
              id="checkbox-1"
              v-model="checked"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >记住密码</b-form-checkbox>
          </b-form-group>
          <b-button type="submit" variant="primary">登录</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ConfigUrl from '../config'
import { post } from '../request'
export default {
  data() {
    return {
      username: "",
      password: "",
      checked: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      console.log(this.username, this.password)

      post('/user/login', {
        username: this.username,
        password: this.password
      })
      .then(data => {
        console.log(data);
        if(!localStorage.getItem('user')) {
          localStorage.setItem('user', JSON.stringify({username: data.username, token: data.token}));
          this.$router.push({ path: '/'})
        }
      })
      .catch(err => {
        console.error(err);
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    width: 100%;
    position: relative;
    background-color: #181818;
    .login-card {
      width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
  }
</style>

