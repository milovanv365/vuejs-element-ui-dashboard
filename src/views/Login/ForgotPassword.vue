<template>
  <div class="forgot-password">
    <h1>Forgot Password?</h1>
    <h2>
      We just need your registered email address<br />to reset your password
    </h2>
    <el-form ref="forgotPasswordForm" :disabled="loading" :model="payload">
      <el-form-item prop="email">
        <el-input placeholder="Email" v-model="payload.email">
          <i slot="prefix" class="material-icons-outlined">email</i>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" :loading="loading" @click="handleResetPassword">
      Reset Password
    </el-button>
    <h3>
      Don't have an account yet?
      <router-link to="/sign-up">
        Create One!
      </router-link>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      payload: {
        email: ""
      }
    };
  },
  methods: {
    handleResetPassword() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.$router.push("/reset-password");
      }, 300);
    }
  }
};
</script>

<style lang="scss">
.forgot-password {
  .el-form {
    margin-top: 0;
  }

  @include medium-up {
    width: 425px;
  }
}
</style>
