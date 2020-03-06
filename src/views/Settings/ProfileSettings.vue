<template>
  <el-container>
    <el-header height="70px">
      <SettingTopBar />
    </el-header>
    <el-container>
      <el-aside width="340px">
        <div class="userImage">
          <img  src="@/assets/avata.png" />
        </div>
        <div class="username">
          <p>Sample User</p>
        </div>
        <SettingSideBar />
      </el-aside>
      <el-main>
        <!-- <writing-content /> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SettingSideBar from "@/components/SettingSideBar";
import SettingTopBar from "@/components/SettingTopBar";
import WritingContent from "@/components/WritingContent";

export default {
  components: {
    SettingSideBar,
    SettingTopBar,
    WritingContent
  }
};
</script>

<style lang="scss">
.userImage{
  padding-top:50px;
  margin:auto;
  img{
    width: 221px ;
    height: 221px ;
     margin: auto;
    display: inherit;

  }
}

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
  .username {
    text-align: center;
    p {
      margin-top:40px;
      font-size: 25px;
      font-family: "Poppins";
      color: rgb(102, 102, 102);
      line-height: 1.2;
      font-weight: bold;
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
