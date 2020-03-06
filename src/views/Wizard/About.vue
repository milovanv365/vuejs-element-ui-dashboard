<template>
  <div class="wizard-about">
    <h1>About you</h1>
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis
    </h2>
    <el-select placeholder="Role" v-model="role">
      <el-option :key="opt" v-for="opt in options" :label="opt" :value="opt" />
    </el-select>
    <el-input placeholder="Organization" v-model="organization" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["Level 1", "Level 2", "Level 3"],
      role: undefined,
      organization: ""
    };
  }
};
</script>

<style lang="scss">
.wizard-about {
  max-width: 440px;
  margin: 0 auto;
  h1 {
    padding-bottom: 23px;
  }
  .el-select {
    margin-top: 40px;
    margin-bottom: 20px;
  }
}
</style>
