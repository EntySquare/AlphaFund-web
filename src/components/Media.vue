<template>
  <div class="Media">
    <div class="container">
      <!-- Media Brilliance Corporation Section -->

      <div class="title">Media Coverage</div>
      <div class="Media_Content">
        <div v-for="(member, index) in teamMembers" :key="index" class="item">
          <LINE lineWidth="810px">
            <template #image>
              <img :src="member.image" class="itemimage" />
            </template>
            <!-- 文字插槽 -->
            <template #text>
              <div class="itemname" v-html="member.title"></div>
            </template>
          </LINE>
          <!-- <img :src="member.image" class="itemimage" />
          <div class="itemname" v-html="member.title"></div> -->
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
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  color: #ff9633;
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
    }
    .itemname {
      margin-top: 30px;
      max-width: 360px;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      text-align: left;
      color: #000;
    }
  }
}

@media (max-width: 1420px) {
  .Media {
    padding: 0 100px;
  }
}
@media (max-width: 1380px) {
  .Media {
    padding: 0 60px;
  }
}
@media (max-width: 824px) {
  .Media {
    padding: 0 20px;
  }
  .container {
    padding: 50px 0;
  }
  .title {
    font-size: 25px;
    margin-bottom: 30px;
  }
  .Media_Content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    row-gap: 20px;
    .item {
      .itemimage {
        width: 320px;
      }
      .itemname {
        margin-top: 15px;
        max-width: 320px;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
      }
    }
  }
}
</style>
  
  