<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="Clarity" name="Clarity">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Readability Score</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.ReadabilityScore}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">% Of Dificult Words</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.DifficultWords}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Paragraph Length</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.PragraphLength}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">% Long Sentences</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.LongSentences}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Average syllables per word</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.AverageSyllablesPerWord}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="Impact" name="Impact">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">% Passive Voice</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.PassiveVoice}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">% Of Adverbs</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.Adverbs}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">% Of Adjectives</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.Adjectives}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Rythem</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.Rythm}}</p>
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
    <el-collapse-item title="Depth" name="Depth">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Reading Time</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.ReadingTime}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title"># Of Words</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.Words}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title"># of Characters</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.Characters}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Total # of internal links</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.TotalInternalLink}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Total # of External links</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.TotalExternalLink}}</p>
        </el-col>
      </el-row>
    </el-collapse-item>
    <!-- ===================== -->
    <el-collapse-item title="ESL Friendliness" name="ESLFriendliness">
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">ESL Score</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.ESLScore}}</p>
        </el-col>
      </el-row>
      <el-divider class="detail-divider"></el-divider>
      <el-row class="detail-item" style="display:flex;">
        <el-col>
          <p class="detail-item-title">Difficult Words</p>
        </el-col>
        <el-col>
          <p class="detail-item-data">{{data.DifficultWord}}</p>
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
      activeNames: ["Clarity"]
    };
  }
};
</script>