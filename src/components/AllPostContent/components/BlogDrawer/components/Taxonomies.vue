<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="Categories" name="Categories">
      <div v-for="item in data.categories" :key="item.index">
        <el-divider class="detail-divider"></el-divider>
        <el-row class="detail-item" style="display:flex;">
          <el-col>
            <p class="detail-item-title" style="padding-left:50px;">{{item}}</p>
          </el-col>
        </el-row>
      </div>
      <el-divider class="detail-divider"></el-divider>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Tags" name="Tags">
      <div v-for="item in data.tags" :key="item.index">
        <el-divider class="detail-divider"></el-divider>
        <el-row class="detail-item" style="display:flex;">
          <el-col>
            <p class="detail-item-title" style="padding-left:50px;">{{item}}</p>
          </el-col>
        </el-row>
      </div>
      <el-divider class="detail-divider"></el-divider>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      activeNames: ["Categories", "Tags"]
    };
  }
};
</script>