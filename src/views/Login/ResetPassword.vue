<template>
  <div class="reset-password">
    <h1>Reset Password</h1>
    <el-form ref="resetPasswordForm" :disabled="loading" :model="payload">
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="Create new password"
          v-model="payload.password"
        >
          <i slot="prefix" class="material-icons-outlined">lock</i>
        </el-input>
      </el-form-item>
      <el-form-item prop="confirmation">
        <el-input
          type="password"
          placeholder="Confirm new password"
          v-model="payload.confirmation"
        >
          <i slot="prefix" class="material-icons-outlined">lock</i>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" :loading="loading" @click="handleResetPassword">
      Submit
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
        password: "",
        confirmation: ""
      }
    };
  },
  methods: {
    handleResetPassword() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.$router.push("/login");
      }, 300);
    }
  }
};
</script>

<style lang="scss">
.reset-password {
  @include medium-up {
    width: 425px;
  }
}
</style>
