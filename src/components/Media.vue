<template>
  <div class="Media">
    <div class="container">
      <!-- Media Brilliance Corporation Section -->

      <div class="title">Media Coverage</div>
      <div class="Media_Content">
        <div v-for="(member, index) in teamMembers" :key="index" class="item">
          <img :src="member.image" class="itemimage" />
          <div class="itemname" v-html="member.title"></div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
import { ref } from "vue";

// Team Members
const teamMembers = ref([
  {
    image: "/src/assets/img/Industry1.png",
    title:
      "<span style='font-weight:600;'>Research:</span> The Far-Reaching Impact of Generative AI on Global Financial Markets",
  },
  {
    image: "/src/assets/img/Industry1.png",
    title:
      "<span style='font-weight:600;'>Research:</span> The Synergistic Development of AI and Blockchain Technology",
  },
  {
    image: "/src/assets/img/Industry1.png",
    title:
      "<span style='font-weight:600;'>Research:</span> AI Market Trends and Future: A Global Perspective and Regional Analysis",
  },
  {
    image: "/src/assets/img/Industry1.png",
    title:
      "<span style='font-weight:600;'>Research:</span> Analysis of AI Talent Supply and Market Demand",
  },
  {
    image: "/src/assets/img/Industry1.png",
    title:
      "<span style='font-weight:600;'>Research:</span> Analysis of Success Factors for Early Unicorn Projects",
  },
  {
    image: "/src/assets/img/Industry1.png",
    title:
      "<span style='font-weight:600;'>Research:</span> Technological Innovation in Sustainable Development: An Analysis of Opportunities and Challenges",
  },
]);
</script>
  
  <style scoped lang="less">
.Media {
  padding: 0 120px;
  width: 100%;
}
.container {
  padding: 100px 0;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
}
.title {
  font-family: PingFang SC;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  color: #000;
  margin-bottom: 100px;
}
.Media_Content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  row-gap: 80px;
  .item {
    .itemimage {
      width: 360px;
      height: auto;
      margin-bottom: 30px;
    }
    .itemname {
      max-width: 360px;
      font-family: PingFang SC;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      text-align: left;
      color: #000;
    }
  }
}
</style>
  
  