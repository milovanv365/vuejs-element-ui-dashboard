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
                <el-row :gutter="20">
                    <el-col :span="14" :offset="2">
                        <div class="myplan">
                            <h3>Select a Plan</h3>
                            <el-divider></el-divider>
                            <el-row :gutter="20">
                                <el-col :span="16">
                                    <p class="titledropdown">Monthly Pageviews </p>
                                </el-col>
                                <el-col :span="8">
                                    <el-select v-model="value">
                                        <el-option
                                                v-for="item in monthlyPageView"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>

                        </div>
                    </el-col>
                    <el-col :span="2" :offset="2"></el-col>

                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6" :offset="2">
                        <MyPlan
                                :title="'Writtio Business'"
                                :description="'Great for business blog on a mission'"
                                :icon="'@/assets/avata.png'"
                        />
                    </el-col>
                    <el-col :span="6" :offset="2">
                        <MyPlan
                                :title="'Writtio Pro'"
                                :description="'Perfect for a professional blogger'"
                        />
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="14" :offset="2">
                        <el-table
                                :header-row-style="{ color: '#666666'}"
                                :row-style="{color: '#666666'}"
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    prop="planName">
                            </el-table-column>
                            <el-table-column
                                    prop="pro"
                                    label="Pro">
                                <template slot-scope="scope">
                                    <i class="el-icon-check right-icon" v-if="scope.row.pro"></i>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="business"
                                    label="business">
                                <template slot-scope="scope">
                                    <i class="el-icon-check right-icon" v-if="scope.row.business"></i>                                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :span="4" :offset="2"></el-col>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
  import SettingSideBar from "@/components/SettingSideBar";
  import SettingTopBar from "@/components/SettingTopBar";
  import MyPlan from "./PlanCard";

  export default {
    data() {
      return {
        monthlyPageView: [{
          value: 50000,
          label: '50,000'
        }, {
          value: 100000,
          label: '100,000'
        }, {
          value: 2500000,
          label: '250,000'
        }, {
          value: '2500000+',
          label: 'More than 250,000'
        }],
        value: 50000,
        tableData: [{
          planName: 'Writing Metrics',
          pro: true,
          business: true
        }, {
          planName: 'Performance Analyctics',
          pro: true,
          business: true
        }, {
          planName: 'Visitor Behavior',
          pro: false,
          business: true
        }, {
          planName: 'Team Guidelines',
          pro: false,
          business: true
        }]
      }
    },
    components: {
      SettingSideBar,
      SettingTopBar,
      MyPlan
    }
  };
</script>

<style lang="scss">
    .myplan{
        margin-top: 24px;
        position: relative;
        h3 {
            font-size: 21px;
            letter-spacing: 0px;
            line-height: 29px;
            color: #666666;
            font-family: "Poppins";
            font-weight: 700;
            margin: 0;
        }
    }
    .right-icon {
        color: #62bcc6;
        font-size: 20px;
        font-weight: bold;
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
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
    .titledropdown {
        color: $writtio-grey-3;
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
