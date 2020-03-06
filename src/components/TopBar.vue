<template>
  <el-menu
    class="el-menu-top-bar"
    mode="horizontal"
    background-color="#fff"
    active-text-color="#6b6b6b"
  >
    <el-row>
      <el-col class="options" :span="4">
        <el-menu-item index="1">
          <!-- <i class="el-icon-document-copy"></i> -->
          <img src="@/assets/icon/asset-blogs.svg" class="iconSvg" >
        </el-menu-item>
        <el-menu-item index="2">
          <!-- <i class="el-icon-document-add"></i> -->
          <img src="@/assets/icon/asset-new blog.svg" class="iconSvg">
        </el-menu-item>

      </el-col>
      <el-col class="logo-wrapper" :span="15">
        <img class="logo" src="@/assets/writtio.png" alt />
      </el-col>
      <el-col class="user-options" :span="5">
        <el-menu-item index="3">
          <el-popover
            class="notification-popover"
            placement="bottom"
            :width="!isMobile? 400: 300"
            trigger="click"
            style="padding:0;"
          >
            <el-row>
              <el-col :span="15">
                <p class="notification-header">Notifications</p>
              </el-col>
              <el-col :span="9">
                <el-button id="markallread">Mark as all read</el-button>
              </el-col>
            </el-row>
            <el-divider class="notify-divider"></el-divider>
            <el-row v-for="(item, index) in notificationData" :key="index" class="notificaiotn-itembox">
              <div class="notification-box">
                <p class="notification-title">{{item.title}}</p>
                <p class="notification-hours">{{item.hours}}</p>
              </div>
              <el-divider class="notify-divider1"></el-divider>
            </el-row>

            <el-button  slot="reference" class="bellIcon"><i class="el-icon-message-solid"></i></el-button>
          </el-popover>

        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-question"></i>
          <span slot="title desktop-only">Help</span>
        </el-menu-item>
        <el-menu-item index="4">
          <a href="profileSettings" class="icon-setting">
            <i class="el-icon-setting"></i>
            <span slot="title" class="desktop-only" style="color: #6b6b6b; text-decoration: none;">Settings</span>
          </a>
        </el-menu-item>

      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
export default {
  data() {
    return {
      notificationData: [
        {
          title: 'Lorem ipsum dolor sit arnet consectetur adipiscing elit',
          hours: '32m',
        },
        {
          title: 'Lorem ipsum dolor sit arnet consectetur adipiscing elit',
          hours: '1h',
        },
        {
          title: 'Lorem ipsum dolor sit arnet consectetur adipiscing elit',
          hours: '2h',
        },
        {
          title: 'Lorem ipsum dolor sit arnet consectetur adipiscing elit',
          hours: '3h',
        }
      ],
      isMobile: isMobile ? true : false
    };
  }
};
</script>

<style lang="scss" scoped>
.el-row{
  outline: none;
}
.icon-setting{
  text-decoration: none;
}
.el-popover{
  padding: 0 !important;
}
.notificaiotn-itembox:hover{
  background-color: #F8F8F8;
}
.notification-header{
  color:#666666;
  font-weight: bold;
}
.notification-hours{
  margin-bottom: 12px;
  margin-top: 0;
}
.notification-title{
  margin-bottom: 0;
  color:#666666;
  font-weight: bold;
}
.notify-divider{
  margin:0;
}
.notify-divider1{
  margin-top: 12px;
  margin-bottom: 0;
}
.bellIcon {
  padding:0;
  border: none;
}
#markallread{
  color: #1e90ff;
  float: right;
  border: none;
}
.el-menu-top-bar {
  height: 100%;
  border: none;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      .el-menu-item {
        height: 100%;
      }
    }
  }
  .iconSvg{
    width:28px;
    height:28px;
    padding-right: 20px;
  }
  .logo-wrapper {
    .logo {
      width: 190px;
      max-width: 100%;
      height: 100%;
      margin: auto;
      display: block;
    }
  }
  .user-options {
    display: flex;
    .el-menu-item {
      font-size: 18px;
      font-family: "Poppins";
      color: rgb(107, 107, 107);
      line-height: 68px;
      &:hover {
        background-color: transparent !important;
      }
      i {
        font-size: 21px;
      }
    }
  }
  .options {
    display: flex;
    margin: 0;
    .el-menu-item {
      position: relative;
      width: 40%;
      text-align: center;
      line-height: 68px;
      &::after {
        content: "";
        width: 4px;
        background-color: darken($writtio-grey-4, 2.8);
        height: 70%;
        top: 0;
        right: 0;
        position: absolute;
        bottom: 0;
        margin: auto;
      }
      &:hover {
        background-color: transparent !important;
      }
      i {
        font-size: 36px;
      }
    }
  }
}

@media (max-width: 479px) {
  .el-menu-top-bar {
    padding: 0 4vw;
    .iconSvg {
      width: 20px;
      height: 20px;
      padding: 0;
    }

    .logo-wrapper {
      .logo {
        width: 140px;
        height: 50px;
        margin: 10px auto;
      }
    }

    .user-options {
      .el-menu-item {
        padding: 0;
      }
    }

    .options {
      .el-menu-item {
        padding: 0;

        &:after {
          width: 1px;
          height: 50%;
        }
      }
    }
  }
  .el-popover {
    width: 100%;
  }
}
</style>