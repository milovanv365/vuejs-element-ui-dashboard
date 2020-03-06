<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="Page Interactions" name="Page Interactions">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Views</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.views}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Active Time</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.activetime}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Reads</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.reads}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Skims</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.skims}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Scroll</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.scroll}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Bounce</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.bounce}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Idel</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.idle}}</p>
        </el-col>
      </el-row>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Clickthrough" name="Clickthrough">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">After read</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.clickafterread}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">After skim</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.clickafterskim}}</p>
        </el-col>
      </el-row>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Exits" name="Exits">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">After read</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.exitsafterread}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">After skim</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.exitsafterskim}}</p>
        </el-col>
      </el-row>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Opt-in" name="Opt-in">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">After read</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.optinafterread}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">After skim</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.optinafterskim}}</p>
        </el-col>
      </el-row>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Social Engagements" name="Social Engagements">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Coments</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.comments}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Facebook Likes</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.facebooklikes}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Facebook Shares</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.facebookshares}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Twitters Reach</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.twitterreach}}</p>
        </el-col>
      </el-row>
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
      activeNames: ["Page Interactions"]
    };
  }
};
</script>