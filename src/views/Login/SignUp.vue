<template>
  <div class="sign-up">
    <main class="sign-up__main">
      <div class="sign-up__main-content content">
        <h1>Create Account</h1>
        <el-form ref="signUpForm" :disabled="loading" :model="payload">
          <el-form-item prop="name">
            <el-input placeholder="Name" v-model="payload.name">
              <i slot="prefix" class="material-icons-outlined">person</i>
            </el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input placeholder="Email" v-model="payload.email">
              <i slot="prefix" class="material-icons-outlined">email</i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="Password" v-model="payload.password">
              <i slot="prefix" class="material-icons-outlined">lock</i>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" :loading="loading" @click="handleSignUp">
          Sign Up
        </el-button>
        <h3>
          Already have an account?
          <router-link to="/login">
            Login Here
          </router-link>
        </h3>
      </div>
    </main>
    <aside class="sign-up__mkt">
      <img class="sign-up__mkt-image" src="@/assets/pattern-full.png" />
      <div class="sign-up__mkt-content">
        <span class="sign-up__mkt-title">Lorem Ipsum Dolor</span>
        <span class="sign-up__mkt-subtitle"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
        >
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      payload: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleSignUp() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 300);
    }
  }
};
</script>

<style lang="scss">
.sign-up {
  &__mkt {
    display: none;
  }

  @include medium-up {
    display: flex;
    height: 100%;
    width: 100%;

    &__main {
      display: flex;
      flex: 65;
    }

    &__main-content {
      margin: auto;
      width: 426px;
    }

    &__mkt {
      background-color: $writtio-primary;
      @include gradient(45deg, (#84efb5 0%, #2f94f4 100%));
      display: flex;
      flex: 34;
      flex-flow: row wrap;
      overflow: hidden;
      position: relative;
      text-align: center;
      z-index: 2;

      &-content {
        flex: 0 276px;
        margin: auto;
      }

      &-image {
        filter: brightness(0.5);
        opacity: 0.1;
        position: absolute;
        right: -240px;
        top: -250px;
        -webkit-filter: brightness(0.5);
        z-index: 1;
      }

      &-title,
      &-subtitle {
        color: white;
      }

      &-title {
        display: inline-block;
        font-size: 44px;
        font-weight: 700;
        margin-bottom: 36px;
      }
    }
  }
}
</style>
