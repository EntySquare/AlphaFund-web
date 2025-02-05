<template>
  <div class="Media">
    <div class="container">
      <!-- Media Brilliance Corporation Section -->

      <div class="title">Social Impact</div>
    
      <div class="Media_Content">
        <div v-for="(member, index) in teamMembers" :key="index" class="item" @click="clickURL(member.url)">
          <LINE lineWidth="810px">
            <template #image>
              <img :src="member.image" class="itemimage" />
            </template>
            <!-- 文字插槽 -->
            <template #text>
              <div class="itemname" v-html="member.title"></div>
            </template>
          </LINE>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_title">Our Commitment</div>
        <div class="bottom_text">
          <span> AlphaFund</span>（Brilliance Corporation)  firmly believes that
          businesses should create a positive impact on society. We are
          dedicated to supporting sustainable development and social welfare
          projects to promote progress and prosperity in global communities.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { url } from "inspector";
import { ref } from "vue";

// Team Members
const teamMembers = ref([
  {
    image: "http://www.alphafound.cc/assets/img/Social1.png",
    title: "Caring for Nigerian Children: Brilliance Team in Action",
    url: 'http://www.hollywoodinews.com/news/1871.html'
  },
  {
    image: "http://www.alphafound.cc/assets/img/Social2.png",
    title: "나이지리아 아이들을 위한 희망의 손길: Brilliance Team의 Sunshine Classroom Project",
    url: 'http://news.financeweeks.com/news/804.html'
  },
  {
    image: "http://www.alphafound.cc/assets/img/Social3.png",
    title: "愛をもって希望を伝える：Brilliance Team、アフリカの高齢者に焦点を当てる",
    url: "http://jp.globalpapertimes.com/news/740.html"
  },
  {
    image: "http://www.alphafound.cc/assets/img/Social4.png",
    title: "  Spreading Hope with Love: Brilliance Team Focuses on Africa's Elderly Population",
    url: 'http://city.ulocaldaily.com/news/1810.html'
  },
  {
    image: "http://www.alphafound.cc/assets/img/Social5.png",
    title: "사랑으로 희망을 전하다: Brilliance Team, 아프리카 노인들을 위한 지원 활동",
    url: 'http://health.medicaldailys.com/news/806.html'
  },
  {
    image: "http://www.alphafound.cc/assets/img/Social6.png",
    title: "愛をもって希望を伝える：Brilliance Team、アフリカの高齢者に焦点を当てる",
    url: 'http://jp.globalpapertimes.com/news/740.html'
  },


]);

const clickURL = (url:string)=>{
   window.open(url, '_blank'); // Open URL in a new tab

}
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
font-family: Inter, Tahoma, sans-serif;
font-size: 34px;
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
  margin-bottom: 100px;

  .item {
    .itemimage {
      width: 360px;
      height: 180px;
      border-radius: 4px;
    }

    .itemname {
      margin-top: 30px;
      max-width: 360px;
    font-family: Inter, Tahoma, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 30.6px;

      color: #000;
    }
  }
}

.bottom {
  .bottom_title {
  font-family: Inter, Tahoma, sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 50.4px;
    text-align: left;
    color: #ff9633;
    margin-bottom: 15px;
  }

  .bottom_text {
  font-family: Inter, Tahoma, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 39.2px;
    text-align: left;
    color: #414141;

    span {
    font-family: Inter, Tahoma, sans-serif;
      font-size: 20px;
      font-weight: 600;
      line-height: 39.2px;
      text-align: left;
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
  font-family: Inter, Tahoma, sans-serif;
    font-size: 25px;
    margin-bottom: 30px;
  }

  .Media_Content {
    gap: 20px;
    row-gap: 20px;
    margin-bottom: 30px;

    .item {
      .itemimage {
        width: 320px;
      }

      .itemname {
        margin-top: 15px;
        max-width: 320px;
        font-size: 14px;
        text-align: center;
        line-height: 23.6px;
      }
    }
  }

  .bottom {
    .bottom_title {
    font-family: Inter, Tahoma, sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 40.4px;
      text-align: left;
      color: #ff9633;
      margin-bottom: 0px;
    }

    .bottom_text {
    font-family: Inter, Tahoma, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 22.2px;
      text-align: left;
      color: #414141;

      span {
      font-family: Inter, Tahoma, sans-serif;
        font-size: 14px;
        line-height: 22.2px;
        text-align: left;
      }
    }
  }
}
</style>