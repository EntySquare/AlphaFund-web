<script lang="ts" setup>
import { ref } from 'vue';

const dataList = ref([
  { text: "2024’s Biggest Moments in AI", img: '/src/assets/img/in1.png', url: 'https://www.kdnuggets.com/2024-biggest-moments-ai' },
  { text: "OpenAI has created an AI model for longevity science", img: '/src/assets/img/in2.png', url: 'https://www.technologyreview.com/2025/01/17/1110086/openai-has-created-an-ai-model-for-longevity-science/' },
  { text: "White House Announces $500B AI Data Center Infrastructure Build-Ou", img: '/src/assets/img/in3.png', url: 'https://insideainews.com/2025/01/21/white-house-announces-500b-ai-data-center-infrastructure-build-out/' },
  { text: "Nvidia at CES: Omniverse Blueprint for Industry, Generative Physical AI, Access to Blackwells, Cosmos Model for Physical AI", img: '/src/assets/img/in4.png', url: 'https://insideainews.com/2025/01/07/nvidia-at-ces-omniverse-blueprint-for-industry-generative-physical-ai-access-to-blackwells-cosmos-model-for-physical-ai/' },
  { text: "An Appetite for AI: Trends and Predictions for 2025", img: '/src/assets/img/in5.png', url: 'https://www.dataversity.net/an-appetite-for-ai-trends-and-predictions-for-2025/' },
  { text: "AI & Big Data Expo Global 2025", img: '/src/assets/img/in6.png', url: 'https://datafloq.com/meet/ai-big-data-expo-global-2025/' },
])
const clickURL = (url: string) => {
  window.open(url, '_blank'); // Open URL in a new tab

}
</script>

<template>
  <div class="IndustryNews">
    <div class="container">
      <div class="title">Industry News</div>

      <div class="News">
        <div class="Media_Content">
          <div v-for="(member, index) in dataList" :key="index" class="item" @click="clickURL(member.url)">
            <LINE lineWidth="810px">
              <template #image>
                <img :src="member.img" class="itemimage" />
              </template>
              <!-- 文字插槽 -->
              <template #text>
               <el-popover v-if="index === 3" placement="bottom" :width="310" trigger="hover"
                :content="member.text">
                <template #reference>
                  <div class="itemname" v-html="member.text"></div>

                </template>
              </el-popover>
              <div class="itemname" v-else v-html="member.text"></div>
              </template>
            </LINE>
            <!-- <img :src="member.image" class="itemimage" />
          <div class="itemname" v-html="member.title"></div> -->
          </div>
        </div>

      </div>
      <div class="Open" id="ContactUs">
        <div class="openTitle">Grow with Us and Shape the Future!</div>
        <div class="openText">
         Access resources, funding, and strategic support for your startup.
        </div>
        <div class="text">No matter what stage your business is in, we’re here to help you succeed. Contact us today and explore limitless opportunities!</div>
        <div class="openButton">Contact Us</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.IndustryNews {
  // width: 100%;
}

.container {
  padding: 100px 120px 200px 120px;
  width: 100%;
}

.title {
  font-family: "Poppins", sans-serif;
font-size: 34px;  font-weight: 500;
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
      height: 204px;
    }

    .itemname {
      margin-top: 20px;
      max-width: 360px;
      font-family: Inter, Tahoma, sans-serif;
      font-size: 16px;
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
    }
  }
}

.News {
  width: 100%;
  display: flex;
  //   flex-wrap: wrap;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  row-gap: 30px;
  margin-bottom: 200px;


}

.Open {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 70px 0;
  flex-direction: column;
  background-color: #eaeaea;
  //background: #6d6d6dcc;
  border: 1px solid #ffffff;
  box-shadow: 6px 6px 1px 1px #000000e5;
  border-radius: 31px;

  .openTitle {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 56px;
    text-align: center;
    color: #272f38;
  }

  .openText {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    color: #272f38;
    margin-top: 15px;
    margin-bottom: 30px;
  }
  .text{
  font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    color: #272f38;
    margin-top: 15px;
    margin-bottom: 60px;
  }

  .openButton {
    background-color: #ff9633;
    border: 2px solid transparent;
    border-radius: 60px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    width: 180px;
    padding: 15px 23px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s ease-in-out;
    font-family: "Poppins", sans-serif;
    display: inline-block;
    line-height: 21px;
    box-shadow: 0px 8px 15px rgba(255, 150, 51, 0.5);
  }
}

@media (max-width: 1420px) {
  .container {
    padding: 100px 100px 200px 100px;
  }
}

@media (max-width: 1380px) {
  .container {
    padding: 100px 60px 200px 60px;
  }
}

@media (max-width: 1200px) {
  .container {
    .News {
      flex-wrap: wrap;
      justify-content: space-evenly;
      row-gap: 80px;
    }
  }
}

@media (max-width: 824px) {
  .IndustryNews {
    .container {
      padding: 50px 20px 100px 20px;

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
            margin-top: 10px;
            max-width: 320px;
            font-size: 14px;
            line-height: 22px;
            text-align: center;
          }
        }
      }

      .News {
        flex-direction: column;
        // align-items: center;
        margin-bottom: 100px;
        gap: 30px;
        row-gap: 30px;


      }

      .Open {
        padding: 30px 0;
        border-radius: 21px;

        .openTitle {
          font-size: 30px;
          line-height: 40px;
        }

        .openText {
          font-family: Inter, Tahoma, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          margin-top: 15px;
          margin-bottom: 40px;
        }

        .openButton {
          padding: 10px 30px;
          font-size: 14px;
          line-height: 28px;
        }
      }
    }
  }
}

@media (max-width: 460px) {
  .IndustryNews {
    .container {
      padding: 50px 20px 100px 20px;

      .Open {
        padding: 30px 10px;
        border-radius: 21px;

        .openTitle {
          font-size: 18px;
          line-height: 40px;
        }

        .openText {
          font-family: Inter, Tahoma, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          margin-top: 15px;
          margin-bottom: 40px;
        }

        .openButton {
          padding: 10px 30px;
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
