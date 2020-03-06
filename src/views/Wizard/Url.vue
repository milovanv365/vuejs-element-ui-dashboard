<template>
  <div class="wizard-url">
    <h1>Set up your URL</h1>
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis
    </h2>
    <el-input placeholder="https://yoursite.com" v-model="site" />
    <el-select placeholder="Blog topic" v-model="topic">
      <el-option :key="opt" v-for="opt in options" :label="opt" :value="opt" />
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["Topic 1", "Topic 2", "Topic 3"],
      topic: undefined,
      site: ""
    };
  }
};
</script>

<style lang="scss">
.wizard-url {
  max-width: 440px;
  margin: 0 auto;

  h1 {
    padding-bottom: 23px;
  }

  > .el-input {
    margin-top: 40px;
    margin-bottom: 20px;
  }
}
</style>
