<template>
  <div class="wizard">
    <main>
      <div class="wizard__content">
        <div class="wizard__view">
          <router-view />
        </div>
        <div class="wizard__navigation">
          <div class="help">
            <el-button type="text">
              <span class="material-icons-outlined">
                help_outline
              </span>
              Help
            </el-button>
          </div>
          <div class="buttons">
            <el-button
              type="text"
              class="previous"
              v-if="activeStep > 0"
              @click="$router.back()"
              >Previous</el-button
            >
            <el-button class="next" type="primary" @click="handleNavigation"
              >Next</el-button
            >
          </div>
        </div>
      </div>
    </main>
    <aside class="wizard__steps">
      <div class="pattern">
        <img src="@/assets/pattern-full.png" />
      </div>
      <div class="steps">
        <div :key="index" class="step" v-for="(step, index) in steps">
          <div
            class="info"
            :class="{
              '--active': index === activeStep,
              '--done': index !== activeStep && activeStep > index
            }"
          >
            <span
              v-if="index !== activeStep && activeStep > index"
              class="material-icons-outlined"
            >
              check
            </span>
            <span v-else>
              {{ index + 1 }}
            </span>
          </div>
          <div class="label">{{ step }}</div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: ["About you", "Set up your URL", "Installation"],
      activeStep: 0,
      payload: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  watch: {
    "$route.meta.step": {
      immediate: true,
      handler(step) {
        this.activeStep = step;
      }
    }
  },
  methods: {
    handleNavigation() {
      if (this.activeStep === 0) this.$router.push("/wizard/url");
      if (this.activeStep === 1) this.$router.push("/wizard/installation");
      else if (this.activeStep === 2) return;
      this.activeStep += 1;
    }
  }
};
</script>

<style lang="scss">
.wizard {
  aside {
    display: none;
  }

  @include medium-up {
    height: 100vh;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-flow: row wrap;

    main {
      flex: 66;
      display: flex;
      height: calc(100% - 160px);
      margin-top: 160px;
    }

    &__content {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
    }

    &__view {
      flex: 1;
      width: 100%;
    }

    &__navigation {
      padding: 0 60px;
      flex: 0 110px;
      display: flex;
      flex-flow: row wrap;

      .help {
        flex: 1;
      }

      .buttons {
        margin-left: auto;
        flex: 1;
        display: flex;
        justify-content: flex-end;
      }

      .previous {
        flex: 0 82px;
        width: 82px;
      }

      .next {
        flex: 0 144px;
        width: 144px;
        margin-left: 42px;
      }
    }

    aside {
      flex: 34;
      display: flex;
      flex-flow: row wrap;
      text-align: center;
      z-index: 2;
      position: relative;
      @include gradient(45deg, (#84efb5 0%, #2f94f4 100%));

      .pattern {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: absolute;
      }

      img {
        pointer-events: none;
        position: absolute;
        z-index: 1;
        -webkit-filter: brightness(0.5);
        filter: brightness(0.5);
        opacity: 0.1;
        right: -240px;
        top: -250px;
      }

      .content {
        flex: 0 276px;
        margin: auto;
      }
    }
  }

  &__steps {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  }

  .steps {
    margin: auto 0;

    .step {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      margin-bottom: 60px;
      position: relative;
    }

    .step > .info {
      width: 52px;
      height: 52px;
      font-size: 25px;
      font-weight: bold;
      line-height: 52px;
      border-radius: 100%;
      position: relative;
      transform: translate(-50%, 0);
      z-index: 10;
      background: #fff;
      border: 1px solid #d6d6d6;
      color: #d6d6d6;
      transition: all 0.3s ease;

      &.--done,
      &.--active {
        border: 1px solid $writtio-primary;
        background: $writtio-primary;
        color: white;
      }
    }

    .step > .label {
      font-size: 22px;
      font-weight: bold;
      font-family: "Poppins";
      color: #fff;
    }

    .step .material-icons-outlined {
      position: relative;
      font-size: 32px;
      top: 6px;
    }
  }
}
</style>
