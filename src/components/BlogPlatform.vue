<template>
  <div class="blog-platforms">
    <div
      class="cms"
      :key="it.logo"
      :class="{
        '--inactive': !it.active
      }"
      v-for="it in cms"
    >
      <div
        :class="{
          '--wide': it.wide
        }"
        class="img"
      >
        <img :src="it.logo" />
      </div>
      <span>{{ it.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BlogPlatform extends Vue {
  data() {
    return {
      cms: [
        {
          name: "Wordpress",
          logo: require("@/assets/cms/wordpress.svg"),
          active: true
        },
        {
          name: "Joomla",
          logo: require("@/assets/cms/joomla.svg"),
          active: false
        },
        {
          name: "Drupal",
          wide: true,
          logo: require("@/assets/cms/drupal.svg"),
          active: false
        },
        {
          name: "Squarespace",
          logo: require("@/assets/cms/squarespace.svg"),
          active: false
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.blog-platforms {
  max-width: 320px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;

  .cms {
    flex: 0 135px;
    height: 135px;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    border: 3px solid $writtio-primary;
    margin-bottom: 25px;
    text-align: center;
    cursor: pointer;

    &.--inactive {
      border-color: $writtio-primary;
      border-width: 2px;
      position: relative;
      top: 1px;
      right: 1px;

      img {
        filter: grayscale(1000%) brightness(0) opacity(0.2);
      }

      > span {
        opacity: 0.2;
      }
    }
  }

  .img {
    margin: 0 auto;
    flex: 0 100%;
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 22px;
    margin-top: 6px;

    img {
      max-width: 50px;
    }

    &.--wide {
      width: 90px;
      img {
        top: 5px;
        position: relative;
        max-width: 90px;
      }
    }
  }

  span {
    flex: 0 100%;
    display: block;
    height: 16px;
  }
}
</style>
