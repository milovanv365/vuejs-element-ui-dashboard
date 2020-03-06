<template>
  <el-row class="list-backgroung" style="margin-top: 10px; display:flex;">
    <img :src="require('@/assets/icon/asset-all posts-gray copy (1).svg')" class="iconSvg" />
    <div>
      <div class="list-text" style="width: 100%;">
        <h1>{{blog.Title}}</h1>
        <p>{{blog.Descripation}}</p>
      </div>
      <div class="pageviews-box-sm">
        <p class="bar-title">Pageviews</p>
        <p class="bar-percentage">{{blog.PagViews}}</p>
      </div>
      <img
        :src="require('@/assets/icon/asset-blogs.svg')"
        class="btn-icon btn-icon-sm"
        @click="selectblog(blog)"
      />
    </div>
    <div class="right-side">
      <div class="pageviews-box">
        <p class="bar-title">Pageviews</p>
        <p class="bar-percentage">{{blog.PagViews}}</p>
      </div>
      <div class="progressbars">
        <div class="two-bar-block">
          <div class="progressbar">
            <p class="bar-title">Opt-in rate</p>
            <p class="bar-percentage">{{blog.Optinrate}}%</p>
            <el-progress :percentage="blog.Optinrate" status="exception" :show-text="false"></el-progress>
          </div>
          <div class="progressbar">
            <p class="bar-title">Clickthrough rate</p>
            <p class="bar-percentage">{{blog.ClicktroughtRate}}%</p>
            <el-progress :percentage="blog.ClicktroughtRate" status="exception" :show-text="false"></el-progress>
          </div>
        </div>
        <div class="two-bar-block">
          <div class="progressbar">
            <p class="bar-title">Read rate</p>
            <p class="bar-percentage">{{blog.ReadRate}}%</p>
            <el-progress :percentage="blog.ReadRate" status="warning" :show-text="false"></el-progress>
          </div>
          <div class="progressbar">
            <p class="bar-title">Engagements</p>
            <p class="bar-percentage">{{blog.Engagement}}%</p>
            <el-progress :percentage="blog.Engagement" status="success" :show-text="false"></el-progress>
          </div>
        </div>
      </div>
      <img
        :src="require('@/assets/icon/asset-blogs.svg')"
        class="btn-icon"
        @click="selectblog(blog)"
      />
    </div>
  </el-row>
</template>
<script>
export default {
  props: {
    blog: {
      type: Object
    }
  },
  methods: {
    selectblog(item) {
      this.$emit("selectedblog", item);
    }
  }
};
</script>
<style lang="scss">
.right-side {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @include large-down {
    display: block;
  }
}
.two-bar-block {
  display: flex;
  justify-content: center;
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex !important;
    .progressbar {
      width: 100% !important;
    }
  }
}
.iconSvg {
  width: 31px;
  height: 31px;
  padding: 20px;
  margin: auto 0px;
}
.list-backgroung {
  background-color: #f8f8f8;
  margin-top: 10px;
}
.list-text {
  margin: auto;
  h1 {
    margin-bottom: 0px;
  }
  p {
    margin-top: 0px;
    color: #cacaca;
  }
}
.el-progress-bar {
  // width: 200px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0px !important;
  .el-progress-bar__outer {
    border-radius: 0px !important;
    .el-progress-bar__inner {
      border-radius: 0px !important;
    }
  }
}
.progressbars {
  display: flex;
  // @media (min-width: 768px) and (max-width: 1023px) {
  //   display: block !important;
  // }
  margin: auto 0px;
  @include large-down {
    display: block;
  }
  .item:nth-child(odd) {
    clear: both;
  }
}
.progressbar {
  padding-left: 10px;
  padding-right: 10px;
  p {
    margin: 0px;
    text-align: center;
  }
  .bar-title {
    color: #cacaca;
  }
}
.pageviews-box-sm {
  display: none;
  @media (min-width: 768px) and (max-width: 1023px) {
    display: block !important;
  }
  margin: auto 0px;
  p {
    margin: 0px;
    text-align: center;
  }
}
.pageviews-box {
  padding: 0px 10px;
  @media (min-width: 768px) and (max-width: 1023px) {
    display: none !important;
  }
  margin: auto 0px;
  p {
    margin: 0px;
    text-align: center;
  }
}
.btn-icon {
  width: 31px;
  height: 31px;
  padding: 20px;
  margin: auto 0px;
  padding-left: 40px;
  cursor: pointer;
  @media (max-width: 1023px) {
    display: none !important;
  }
}
.btn-icon-sm {
  display: none !important;
  @media (max-width: 1023px) {
    display: block !important;
    padding-left: 20px;
  }
}
</style>