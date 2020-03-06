<template>
  <el-row class="list-backgroung" style="margin-top: 10px; display:flex;">

    <img v-if="!blog.publishedflag" :src="require('@/assets/icon/asset-draft.svg')" class="iconSvg" />
    <img v-else :src="require('@/assets/icon/asset-published.svg')" class="iconSvg" />
    <div class="list-text" style="width: 100%;">
      <h1>{{blog.Title}}</h1>
      <p>{{blog.Descripation}}</p>
    </div>
    <div style="display:flex;width: 100%;justify-content: flex-end;">
      <div class="pageviews-box">
        <p class="bar-title">Pageviews</p>
        <p class="bar-percentage">{{blog.PagViews}}</p>
      </div>
      <div class="progressbars">
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
      <img
        :src="require('@/assets/icon/asset-open.svg')"
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
.iconSvg {
  width: 28px;
  height: 28px;
  padding: 20px;
  margin: auto 0px;
}
.list-backgroung {
  background-color: #f8f8f8;
  margin-top: 10px;
}
.list-text {
  h1 {
    margin-bottom: 0px;
  }
  p {
    margin-top: 0px;
    color: #cacaca;
  }
}
.el-progress-bar {
  width: 200px;
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
  margin: auto 0px;
}
.progressbar {
  padding-left: 20px;
  p {
    margin: 0px;
    text-align: center;
  }
  .bar-title {
    color: #cacaca;
  }
}
.pageviews-box {
  margin: auto 0px;
  padding-right: 40px;
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
}
</style>
