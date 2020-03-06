<template>
  <div class="login">
    <h1>Log in to Writtio</h1>
    <el-form ref="loginForm" :disabled="loading" :model="payload">
      <el-form-item prop="email">
        <el-input placeholder="Email" v-model="payload.email">
          <i slot="prefix" class="material-icons-outlined">email</i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="Password"
          v-model="payload.password"
        >
          <i slot="prefix" class="material-icons-outlined">lock</i>
        </el-input>
      </el-form-item>
    </el-form>
    <router-link to="/forgot-password">
      Forgot your password?
    </router-link>
    <el-button type="primary" :loading="loading" @click="handleLogin">
      Login
    </el-button>
    <h3>
      Don't have an account yet?
      <router-link to="/sign-up">
        Create One!
      </router-link>
    </h3>
    <img class="login__my-password" src="@/assets/my-password.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      payload: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.$router.push("/wizard");
      }, 300);
    }
  }
};
</script>

<style lang="scss">
.login {
  .el-button {
    margin-top: 32px;
  }

  &__my-password {
    display: none;
  }

  @include medium-up {
    width: 425px;

    &__my-password {
      bottom: 0;
      display: block;
      position: absolute;
      right: 0;
      width: 275px;
      z-index: -1;
    }
  }
}
</style>
