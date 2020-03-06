<template>
  <div>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo desktop-only"
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
          <div style="display:flex;">
            <img :src="item.src" class="iconSvg" v-if="!item.active" />
            <img :src="item.activesrc" class="iconSvg" v-if="item.active" />

            <span slot="title">{{ item.title }}</span>
          </div>
        </router-link>
      </el-menu-item>
    </el-menu>
    <el-menu
            default-active="2"
            class="el-menu-demo mobile-only"
            mode="horizontal"
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
          <div style="display:flex;">
            <img :src="item.src" class="iconSvg" v-if="!item.active" />
            <img :src="item.activesrc" class="iconSvg" v-if="item.active" />

<!--            <span slot="title">{{ item.title }}</span>-->
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
            title: "Dashboard",
            route: "/dashboard",
            icon: "el-icon-s-grid",
            active: "/dashboard" == this.$route.path,
            src: require("../assets/icon/asset-dashboard-gray.svg"),
            activesrc: require("../assets/icon/asset-dashboard-purple.svg")
          },
          {
            title: "All Posts",
            route: "/allposts",
            icon: "el-icon-collection",
            active: "/allposts" == this.$route.path,
            src: require("../assets/icon/asset-all posts-gray.svg"),
            activesrc: require("../assets/icon/asset-all posts-purple.svg")
          },
          {
            title: "Writing",
            route: "/writing",
            icon: "el-icon-edit",
            active: "/writing" == this.$route.path,
            src: require("../assets/icon/asset-writing-gray.svg"),
            activesrc: require("../assets/icon/asset-writing-purple.svg")
          },
          {
            title: "Topics",
            route: "/topics",
            icon: "el-icon-tickets",
            active: "/topics" == this.$route.path,
            src: require("../assets/icon/asset-topics-gray.svg"),
            activesrc: require("../assets/icon/asset-topics-purple.svg")
          },
          {
            title: "Performance",
            route: "/performance",
            icon: "el-icon-s-data",
            active: "/performance" == this.$route.path,
            src: require("../assets/icon/asset-topics-gray copy.svg"),
            activesrc: require("../assets/icon/asset-performance-purple.svg")
          },
          {
            title: "Guidelines",
            route: "/guidelines",
            icon: "el-icon-s-grid",
            active: "/guidelines" == this.$route.path,
            src: require("../assets/icon/asset-topics-gray copy 2.svg"),
            activesrc: require("../assets/icon/asset-guidelines-purple.svg")
          },
          {
            title: "Users",
            route: "/users",
            icon: "el-icon-s-grid",
            active: "/users" == this.$route.path,
            src: require("../assets/icon/asset-profile settings-gray.svg"),
            activesrc: require("../assets/icon/asset-profile settings-purple.svg")
          },
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
      width: 264px;
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
  .el-menu-demo {
    position: fixed;
    bottom: 2vw;
    border-bottom: none;
    li {
      width: calc(100vw * 1/6);
      margin: 0;
      padding: 0;
      &:last-child {
        display: none;
      }
    }
  }
</style>
