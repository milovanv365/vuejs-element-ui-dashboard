<template>
  <el-container>
    <el-header height="70px">
      <TopBar />
    </el-header>
    <el-container>
      <el-aside width="auto">
        <h5 class="heading-blog">My First Blog</h5>
        <SideBar />
        <div class="upgrade-button">
          <p class="free-account">FREE ACCOUNT</p>
          <el-button plain @click="$router.push('maintenance')">UPGRADE</el-button>
        </div>
      </el-aside>
      <el-main>
        <performance-content />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import PerformanceContent from "@/components/PerformanceContent";

export default {
  components: {
    SideBar,
    TopBar,
    PerformanceContent
  }
};
</script>

<style lang="scss">
.el-header {
  padding: 0;
}
.el-aside {
  min-height: calc(100vh - 70px);
  background-color: rgb(245, 245, 245);
  .heading-blog {
    font-size: 21px;
    font-family: "Poppins";
    color: #fff;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    height: 80px;
    margin: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: $writtio-primary;
  }
  .upgrade-button {
    text-align: center;
    .free-account {
      font-size: 21px;
      font-family: "Poppins";
      color: rgb(102, 102, 102);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .el-button {
      background-color: $writtio-tertiary;
      font-size: 21px;
      font-family: "Poppins";
      color: #000;
      font-weight: bold;
      width: 200px;
      margin: 10px auto 30px auto;
      border: none;
      border-radius: 5px;
    }
  }
}
</style>
