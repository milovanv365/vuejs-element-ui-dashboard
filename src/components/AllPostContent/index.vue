<template>
  <div>
    <div class="top-bar">
      <el-input
        placeholder="Search"
        prefix-icon="el-icon-search"
        v-model="Searchbox"
        class="demo-input-label"
      ></el-input>
      <div class="nav-btns">
        <el-button plain type="info">All</el-button>
        <el-button plain type="info">Engagements</el-button>
        <el-button plain type="info">Actions</el-button>
        <el-button plain type="info">Draft</el-button>
        <el-button plain type="info">Published</el-button>
      </div>
    </div>
    <!-- <el-switch v-model="softorhard" active-text="Hard" inactive-text="Soft" class="switch-postion"></el-switch> -->
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6" style="background-color: #f8f8f8;">
        <!-- <pie-chart :chart-data="datacollection3" :options="options3"></pie-chart> -->
        <pie-chart :data="pieChartData" :options="pieChartOption" />
        
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="background-color: #f8f8f8; margin-left: 80px;">
        <!-- <bar-chart :chart-data="datacollection1" :options="options1"></bar-chart> -->
        <column-chart :data="columnChartData" :options="options1"/>
      </el-col>
    </el-row>
    <blog-list v-for="item in blogdata" :key="item.index" :blog="item" @selectedblog="selectblog" />
    <el-drawer title="I am the title" :visible.sync="drawer" :with-header="false">
      <blog-drawer v-if="drawer" :data="selectedblog" />
    </el-drawer>
  </div>
</template>



<script src="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.js"></script>
<script>
import ".././../../node_modules/tui-chart/dist/tui-chart.css";
import { pieChart } from "@toast-ui/vue-chart";
import { columnChart } from "@toast-ui/vue-chart";
// import BarChart from "./BarChart.js";
// import PieChart from "./PieChart.js";
import BlogList from "./components/BlogList";
import BlogDrawer from "./components/BlogDrawer";
import blogs from "./data.json";
export default {
  components: {
    'pie-chart': pieChart,
    'column-chart': columnChart,
    // "bar-chart": BarChart,
    // "bar-chart": barChart,
    // PieChart,
    BlogList,
    BlogDrawer
  },
  mounted() {
    this.fillData();
  },
  data() {
    return {
      drawer: false,
      blogdata: blogs,
      selectedblog: [],
      pieChartData: {
        // for 'data' prop of 'bar-chart'
        categories: ["Engagement"],
        series: [
          {
            name: "High",
            data: 46
          },
          {
            name: "Medium",
            data: 20
          },
          {
            name: "Low",
            data: 34
          }
        ]
      },
      pieChartOption: {
         chart: {
              width: 400,
              height: 400,
              title: 'Summary of Engagement',
              format: '1,000'
          },
          chartExportMenu: {
            visible: false
          },
        legend: {
              align: 'right'
          },
      },

      columnChartData: {
        // for 'data' prop of 'bar-chart'
        categories: ["HIGH", "MEDIUM", "LOW"],
        series: [
          {
            name: 'opt-in rate',
            data: [3000, 5000, 7000]
          },
          {
              name: 'clickthrough rate',
              data: [1000, 7000, 2000]
          },
           {
              name: 'read rate',
              data: [1000, 7000, 2000]
          }
        ]
      },

      options1 : {
          chart: {
              width: 1160,
              height: 400,
              title: 'Summary of Actions',
              format: '1,000'
          },
          // yAxis: {
          //     title: 'Amount',
          //     min: 0,
          //     max: 9000
          // },
          // xAxis: {
          //     title: 'Month'
          // },
          legend: {
              align: 'top'
          },
          chartExportMenu: {
          visible: false
        },
      },
      Searchbox: "",
      datacollection1: {},
      datacollection3: {},
      options3: {
        title: {
          display: true,
          text: "Summary of Engagement"
        },
        responsive: true
      },
     
    };
  },
  methods: {
    fillData() {
      this.datacollection1 = {
        labels: ["Hign", "Medium", "Low"],
        datasets: [
          {
            label: "Opt-in rate",
            backgroundColor: ["#69C9D7"],
            borderColor: "black",
            borderWidth: 1,
            data: [37, 38, 36]
          },
          {
            label: "Clickthrough rate",
            backgroundColor: ["#7580FF"],
            borderColor: "black",
            borderWidth: 1,
            data: [40, 40, 40]
          },
          {
            label: "Read rate",
            backgroundColor: ["#FDD329"],
            borderColor: "black",
            borderWidth: 1,
            data: [35, 35, 35]
          }
        ]
      };
      this.datacollection3 = {
        labels: ["Hign", "Medium", "Low"],
        datasets: [
          {
            backgroundColor: ["#5ABC57", "#E8E72B", "#EA3234"],
            data: [50, 33, 17]
          }
        ]
      };
    },
    selectblog(item) {
      console.log("adsaasd", item);
      this.selectedblog = item;
      this.drawer = true;
    }
  }
};
</script>

<style lang="scss">
.top-bar {
  padding-bottom: 20px;
}
.chartjs-render-monitor {
  max-height: 330px;
}
.demo-input-label {
  display: inline-block;
  width: 350px;
  .el-input__inner {
    background: transparent !important;
    border-color: transparent !important;
    border-bottom: 2px solid #eeeeee !important;
  }
}
.nav-btns {
  float: right;
  .el-button {
    border: unset;
    border-radius: 6px;
  }
}
.el-drawer__body {
  overflow: auto;
}
.el-col-5 {
  /*width: fit-content;*/
}
</style>