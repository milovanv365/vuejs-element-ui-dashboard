<template>
  <div>
    <div class="head">
      <h1>{{data.Title}}</h1>
      <p>Draft {{data.Descripation}}</p>
      <el-button type="primary">Open Blog</el-button>
    </div>
    <el-divider></el-divider>
    <div class="options">
      <el-button
        type="info"
        v-bind:class="{ 'el-button--selected': activetab=='Writing Metrics' }"
        @click="activetab='Writing Metrics'"
      >Writing Metrics</el-button>
      <el-button
        type="info"
        v-bind:class="{ 'el-button--selected': activetab=='Structure' }"
        @click="activetab='Structure'"
      >Structure</el-button>
      <el-button
        type="info"
        v-bind:class="{ 'el-button--selected': activetab=='Taxonomies' }"
        @click="activetab='Taxonomies'"
      >Taxonomies</el-button>
      <el-button
        type="info"
        v-bind:class="{ 'el-button--selected': activetab=='Post Interactions' }"
        @click="activetab='Post Interactions'"
      >Post Interactions</el-button>
    </div>
    <div class="details">
      <p class="option-title">
        <b>{{activetab}}</b>
      </p>
      <div>
        <writing-metrics :data="data" v-if="activetab=='Writing Metrics'" />
        <Structure :data="data" v-if="activetab=='Structure'" />
        <Taxonomies :data="data" v-if="activetab=='Taxonomies'" />
        <post-interactions :data="data" v-if="activetab=='Post Interactions'" />
      </div>
    </div>
  </div>
</template>
<script>
import WritingMetrics from "./components/WritingMetrics";
import Structure from "./components/Structure";
import Taxonomies from "./components/Taxonomies";
import PostInteractions from "./components/PostInteractions";
export default {
  components: {
    WritingMetrics,
    Structure,
    Taxonomies,
    PostInteractions
  },
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      activetab: "Writing Metrics"
    };
  }
};
</script>
<style lang="scss" >
.head {
  padding: 25px;
  padding-bottom: 0px;
  h1 {
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 28px;
  }
  p {
    margin-top: 0px;
    color: #cacaca;
  }
  .el-button {
    min-width: 100%;
    span {
      color: #ffffff;
      font-size: large;
      font-weight: bolder;
    }
  }
}
.options {
  margin: 0px 20px;
  .el-button {
    border: #ffffff solid 6px;
    width: 50%;
    margin: 0px !important;
    border-radius: 10px;
  }
  .el-button--info {
    color: #656565;
    font-size: 15px;
    background-color: #eeeeee;
  }
  .el-button--selected {
    color: #ffffff;
    font-size: 15px;
    background-color: #69c9d7;
  }
}
.details {
  .option-title {
    background-color: #eeeeee;
    padding: 12px;
    color: #656565;
    font-weight: bolder;
    margin-bottom: 0px;
  }
  .detail-divider {
    margin: 0px;
  }
  .detail-item {
    .detail-item-title {
      padding-left: 20px;
      color: #868686;
      font-size: 14px;
    }
    .detail-item-data {
      padding-left: 20px;
      color: #868686;
      font-size: 14px;
    }
  }
}
.el-collapse-item__content {
  padding-bottom: 0px;
}
.el-collapse-item__header {
  padding-left: 20px;
  color: #666666;
  font-weight: bolder;
  font-size: 16px;
  i {
    color: #666666;
    font-weight: bolder;
    font-size: 16px;
  }
}
.el-collapse-item__header.is-active {
  color: #9099ff;
  i {
    color: #9099ff;
  }
}
</style>