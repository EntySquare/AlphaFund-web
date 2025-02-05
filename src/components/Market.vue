<template>
  <div class="Market">
    <div class="container">
      <!-- Market Brilliance Corporation Section -->

      <div class="title">Market Insights</div>

      <div class="Market_Content">
        <div v-for="(member, index) in teamMembers" :key="index" class="item" @click="PDFClick(member.pdf)">
          <LINE lineWidth="810px">
            <template #image>
              <img :src="member.image" class="itemimage" />
            </template>
            <!-- 文字插槽 -->
            <template #text>
              <el-popover v-if="index === 0 || index === 2 || index === 5" placement="bottom" :width="310" trigger="hover"
                :content="member.title">
                <template #reference>
                  <div class="itemname" v-html="member.title"></div>

                </template>
              </el-popover>
              <div class="itemname" v-if="index === 1 || index === 3 || index === 4" v-html="member.title"></div>

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
import router from "@/router";
import { ref } from "vue";

// Team Members
const teamMembers = ref([
  {
    image: "http://www.alphafound.cc/assets/img/Ma1.png",
    title:
      "Research: The Far-Reaching Impact of Generative AI on Global Financial Markets",
    pdf: 'http://www.alphafound.cc/pdf/TheMarkets.pdf'
  },
  {
    image: "http://www.alphafound.cc/assets/img/Ma2.png",
    title:
      "Research: The Synergistic Development of AI and Blockchain Technology",
    pdf: 'http://www.alphafound.cc/pdf/TheMarkets.pdf'

  },
  {
    image: "http://www.alphafound.cc/assets/img/Ma6.png",
    title:
      "Research: AI Market Trends and Future: A Global Perspective and Regional Analysis",
    pdf: 'http://www.alphafound.cc/pdf/TheTechnology.pdf'

  },
  {
    image: "http://www.alphafound.cc/assets/img/Ma3.png",
    title:
      "Research: Analysis of AI Talent Supply and Market Demand",
    pdf: 'http://www.alphafound.cc/pdf/AIMarket.pdf'

  },
  {
    image: "http://www.alphafound.cc/assets/img/Ma4.png",
    title:
      "Research: Analysis of Success Factors for Early Unicorn Projects",
    pdf: 'http://www.alphafound.cc/pdf/AnalysisProjects.pdf'

  },
  {
    image: "http://www.alphafound.cc/assets/img/Ma5.png",
    title:
      "Research: Technological Innovation in Sustainable Development: An Analysis of Opportunities and Challenges",
    pdf: 'http://www.alphafound.cc/pdf/Technological.pdf'

  },
]);

const PDFClick = (url: string) => {
  router.push({ path: '/pdf', query: { pdfUrl: url } }) // 传递查询参数
}
</script>

<style scoped lang="less">
.Market {
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
  font-size: 34px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  color: #ff9633;
  margin-bottom: 100px;
}

.Market_Content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  row-gap: 80px;

  .item {
    cursor: pointer;

    .itemimage {
      width: 360px;
      height: auto;
      border-radius: 4px;
    }

    .itemname {
      margin-top: 30px;
      max-width: 360px;
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      text-align: left;
      color: #000;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      /* 显示两行 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      /* 超出部分显示省略号 */
    }
  }
}

@media (max-width: 1420px) {
  .Market {
    padding: 0 100px;
  }
}

@media (max-width: 1380px) {
  .Market {
    padding: 0 60px;
  }
}

@media (max-width: 824px) {
  .Market {
    padding: 0 20px;
  }

  .container {
    padding: 50px 0;
  }

  .title {
    font-size: 25px;
    margin-bottom: 30px;
  }

  .Market_Content {
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