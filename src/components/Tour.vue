<template>
  <div>
    <v-tour name="myTour" :steps="steps" :options="{ highlight: true }">
      <template slot-scope="tour">
        <transition
          name="fade"
          v-for="(step, index) of tour.steps"
          :key="index"
        >
          <v-step
            v-if="tour.currentStep === index"
            :step="step"
            :previous-step="tour.previousStep"
            :next-step="tour.nextStep"
            :stop="tour.stop"
            :is-first="tour.isFirst"
            :is-last="tour.isLast"
            :labels="tour.labels"
            :highlight="tour.highlight"
          >
            <template v-if="tour.currentStep < tour.steps.length - 1">
              <div slot="actions">
                <button
                  @click="tour.nextStep"
                  class="v-step__button v-step__button-next"
                >
                  NEXT
                </button>
                <button
                  @click="tour.stop"
                  class="v-step__button v-step__button-skip"
                >
                  SKIP
                </button>
              </div>
            </template>
            <template v-else>
              <div slot="actions">
                <button
                  @click="tour.stop"
                  class="v-step__button v-step__button-finish"
                >
                  FINISH
                </button>
              </div>
            </template>
          </v-step>
        </transition>
      </template>
    </v-tour>
    <SideBar class="menu" />
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      steps: [
        {
          target: ".menu [data-v-step='0']",
          header: {
            title: "Dashboard"
          },
          content: "Dashboard content for blog",
          params: {
            placement: "left"
          }
        },
        {
          target: ".menu [data-v-step='1']",
          header: {
            title: "All Posts"
          },
          content:
            "Here, you can see all of your posts and dig into their individual stats",
          params: {
            placement: "left"
          }
        },
        {
          target: ".menu [data-v-step='2']",
          header: {
            title: "Writing"
          },
          content: "Writing content for blog",
          params: {
            placement: "left"
          }
        },
        {
          target: ".menu [data-v-step='3']",
          header: {
            title: "Topics"
          },
          content: "Topics content for blog",
          params: {
            placement: "left"
          }
        },
        {
          target: ".menu [data-v-step='4']",
          header: {
            title: "Performance"
          },
          content: "Performance content for blog",
          params: {
            placement: "left"
          }
        },
        {
          target: ".menu [data-v-step='5']",
          header: {
            title: "Guidelines"
          },
          content: "Guidelines content for blog",
          params: {
            placement: "left"
          }
        }
      ]
    };
  },
  mounted() {
    this.$tours["myTour"].start();
  }
};
</script>
<style lang="scss" scoped>

.menu {
  position: absolute;
  top: 80px;
}
.v-step__button-next {
  color: #fff !important;
  background: #3092ff !important;
  width: 70%;
  border-radius: 5px !important;
  padding: 1rem 0 1.8rem 0 !important;
  font-size: 15px !important;
  float: left;
}
.v-step__button-finish {
  color: #fff !important;
  background: #3092ff !important;
  width: 100%;
  border-radius: 5px !important;
  padding: 1rem 0 1.8rem 0 !important;
  font-size: 15px !important;
  float: left;
}
.v-step__button{
  padding: 1rem 0 1.8rem 0 !important;
}
</style>
