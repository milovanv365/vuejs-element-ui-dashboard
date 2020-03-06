<template>
  <div class="public">
    <header>
      <router-link to="/">
        <!-- This logo has padding left and right, we should ask Chesca to provide us with a new one without them -->
        <img src="@/assets/writtio.png" />
      </router-link>
    </header>
    <main>
      <transition>
        <router-view />
      </transition>
    </main>
  </div>
</template>

<style lang="scss">
.public {
  height: 100%;
  text-align: center;

  > header {
    box-sizing: border-box;
    padding-top: 30px;
    position: absolute;
    text-align: center;
    width: 100%;

    > a {
      display: inline-block;

      > img {
        width: 160px;
      }
    }
  }

  > main {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;

    a {
      color: $writtio-grey-3;
      font-size: 9px;
      position: relative;
      text-decoration: none;

      &::after {
        background: #f2f2f2;
        bottom: -10px;
        content: "";
        height: 2px;
        left: 1px;
        position: absolute;
        right: 1px;
      }
    }
  }

  h1 {
    color: $writtio-primary;
    margin: 0;
  }

  h2 {
    color: $writtio-grey-3;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 22px;
    margin-top: 22px;
  }

  h3 {
    color: $writtio-grey-2;
    font-weight: 400;
    margin-top: 22px;

    &,
    a {
      font-size: 12px;
    }
  }

  .el-form {
    margin-top: 40px;
  }

  .el-input {
    input {
      font-size: 12px;
    }

    &__inner {
      padding-left: 40px;
      background: $writtio-grey-4;
    }

    &__prefix {
      width: 40px;
      left: 0;
      display: flex;
    }

    .material-icons-outlined {
      font-size: 14px;
      margin: auto;
    }
  }

  .el-button {
    display: block;
    margin-top: 22px;
    text-transform: uppercase;
    width: 100%;
  }

  @include medium-down {
    @media (orientation: landscape) {
      > header {
        position: relative;
      }
    }
  }

  @include medium-up {
    > main a {
      font-size: 13px;
    }

    > header {
      padding-left: 55px;
      padding-top: 55px;
      text-align: left;
    }

    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      &,
      a {
        font-size: 16px;
      }
    }

    .el-form {
      margin-top: 80px;
    }

    .el-input {
      input {
        font-size: 16px;
      }

      &__inner {
        height: 60px;
        padding-left: 50px;
      }

      &__prefix {
        width: 52px;
      }

      .material-icons-outlined {
        font-size: 18px;
      }
    }

    .el-button {
      font-size: 18px;
      padding-bottom: 20px;
      padding-top: 20px;
    }
  }
}
</style>
