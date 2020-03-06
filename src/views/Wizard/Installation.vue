<template>
  <div class="wizard-installation">
    <h1>Installation</h1>
    <h2>Choose your blog platform</h2>
    <blog-platform @click="handleClick"> </blog-platform>
  </div>
</template>

<script>
import BlogPlatform from "@/components/BlogPlatform";

export default {
  components: {
    BlogPlatform
  },
  data() {
    return {
      options: ["Topic 1", "Topic 2", "Topic 3"],
      topic: undefined,
      site: ""
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style lang="scss">
.wizard-installation {
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
