<template>
  <el-main class="main-div">
    <img class="" src="@/assets/no-content.png" />
    <p>Sorry, the dashboard can't be viewed on mobile devices yet.</p>
  </el-main>
</template>

<script>
export default {
  name: "MobileContent"
};
</script>

<style lang="scss" scoped>
.main-div {
  margin-top: 10vw;
  img {
    width: 100%;
  }
  p {
    font-size: 10pt;
    color: #747474;
    margin: 10vw;
    text-align: center;
  }
}
</style>
