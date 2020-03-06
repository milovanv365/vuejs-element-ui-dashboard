<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="Visual Index" name="Visual Index">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Image</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.image}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Text-to-image Ratio</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.texttoimageratio}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Actionable" name="Actionable">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Call to action</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.calltoaction}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Internal Links</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.internallinks}}</p>
        </el-col>
      </el-row>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Feel" name="Feel">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Tone</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.Tone}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Gender</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.Gender}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Sentiment</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.Sentiment}}</p>
        </el-col>
      </el-row>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Text Structure" name="Text Structure">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Total Paragraphs</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.totalparagraphs}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Words Between Images</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.wordsbetweenimage}}</p>
        </el-col>
      </el-row>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Pn-Page SEO" name="Pn-Page SEO">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Header 1</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.header1}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Header 2</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.header2}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Header 3</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.header3}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Header 4</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.header4}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Header 5</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.header5}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Header 6</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.header6}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Featured Image</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.featuredimage}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Authored Bio</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.Authorbio}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Keywords</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.keywords}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Meta</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.meta}}</p>
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
      activeNames: ["Visual Index"]
    };
  }
};
</script>