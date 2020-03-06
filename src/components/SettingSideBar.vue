<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <!-- <p>{{$route.path}}</p> -->
      <el-menu-item
        :index="item.route"
        v-for="(item, index) in items"
        :key="index"
        v-bind:class="{ isactive: item.active }"
        :data-v-step="index"
      >
        <router-link :to="item.route">
          <div style="display:flex; margin-left: 2rem;">
            <img :src="item.src" class="iconSvg" v-if="!item.active" />
            <img :src="item.activesrc" class="iconSvg" v-if="item.active" />
            <span slot="title">{{ item.title }}</span>
          </div>
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      items: [
        {
          title: "Profeile Settings",
          route: "/profileSettings",
          active: "/profileSettings" == this.$route.path,
          src: require("../assets/icon/asset-profile settings-gray.svg"),
          activesrc: require("../assets/icon/asset-profile settings-purple.svg")
        },
        {
          title: "My Plan",
          route: "/myplan",
          active: "/myplan" == this.$route.path,
          src: require("../assets/icon/asset-my plan-gray.svg"),
          activesrc: require("../assets/icon/asset-my plan-pruple.svg")
        },
        {
          title: "Billing History",
          route: "/billingHistory",
          active: "/billingHistory" == this.$route.path,
          src: require("../assets/icon/asset-billing history-gray.svg"),
          activesrc: require("../assets/icon/asset-billing history-purple.svg")
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.iconSvg {
  width: 31px;
  height: 31px;
  padding-right: 20px;
  align-self: center;
}
.el-menu-vertical-demo {
  &:not(.el-menu--collapse) {
    width: 340px;
  }
  background-color: transparent;
  height: 100%;
  border: none;
  .el-menu-item {
    font-size: 21px;
    font-family: "Poppins";
    height: 80px;
    line-height: 80px;
    &.is-active {
      span {
        color: $writtio-grey-3;
        font-weight: bold;
      }
    }
    &:hover,
    &.is-active {
      background-color: darken($writtio-grey-4, 2.8);
    }
  }
  .el-menu-item * {
    text-decoration: none !important;
    color: #d2d2d2;
  }
  .isactive {
    padding-left: 15px !important;
    border-left: 5px solid #7580ff;
    // [class^="el-icon-"] {
    // font-size: 30px;
    span {
      color: #6b6b6b;
      font-weight: bold;
    }

    // }
  }
}
</style>
