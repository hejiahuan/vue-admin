<template>
  <div class="login">
    <div class="main">
      <div class="form">
        <div class="form_title">
          <span>登录</span>
        </div>
        <div>
          <el-form :model="form">
            <el-form-item>
              <el-input
                placeholder="请输入内容"
                v-model="form.username"
                prefix-icon="el-icon-search"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-input
                placeholder="请输入密码"
                v-model="form.password"
                show-password
                clearable
                prefix-icon="el-icon-search"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="button" @click="login" :loading="isLogin" round>登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../../network/login";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "admin",
        password: "123456"
      },
      isLogin: false
    };
  },
  methods: {
    async login() {
      this.isLogin = true;
      const res = await login(this.form);
      const { token } = res.data.data;
      if (token) {
        this.$message("登录成功..");
        window.sessionStorage.setItem("token", token);
        this.$router.push("/layout");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    width: 650px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    opacity: 0.9;
    .form {
      height: 60%;
      margin: 0 auto;
      width: 50%;
      margin-top: 15%;
      .form_title {
        margin-bottom: 14px;
        text-align: center;
        font-size: 35px;
        color: #333;
        font-weight: 200;
      }

      .button {
        margin-left: 100px;
      }
    }
  }
}
</style>