<template>
  <div class="Media">
    <div class="container">
      <!-- Media Brilliance Corporation Section -->

      <div class="title">Media Coverage</div>
      <div class="Media_Content">
        <div v-for="(member, index) in teamMembers" :key="index" class="item" @click="clickURL(member.url)">
          <LINE lineWidth="810px">
            <template #image>
              <img :src="member.image" class="itemimage" />
            </template>
            <!-- 文字插槽 -->
            <template #text>
              <el-popover v-if="index === 4" placement="bottom" :width="310" trigger="hover"
                :content="member.title">
                <template #reference>
                  <div class="itemname" v-html="member.title"></div>

                </template>
              </el-popover>
              <div class="itemname" v-else v-html="member.title"></div>
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
    image: "http://www.alphafound.cc/assets/img/me1.png",
    url:'http://financial.yxwbd.top/news/1952.html',
    title:
      "Brilliance Team Leading the Wave of AI Healthcare Investments",
  },
  {
    image: "http://www.alphafound.cc/assets/img/me2.png",
    url:'http://www.globalpapertimes.com/news/2098.html',
    title:
      "A Clean Energy Model from a Global Investment Perspective: The Rise of Northvolt",
  },
  {
    image: "http://www.alphafound.cc/assets/img/me3.png",
    url:'http://www.hlitechnology.com/news/1777.html',
    title:
      "Brilliance Team Forms Partnership with Renowned Research Institution ETH Zurich",
  },
  {
    image: "http://www.alphafound.cc/assets/img/me4.png",
    url:'http://www.newstrackings.cc/news/295.html',
    title:
      "A New Milestone in Education Equity: Brilliance Team Invests in Digital Learning",
  },
  {
    image: "http://www.alphafound.cc/assets/img/me5.png",
    url:'http://markets.zmssw.cc/news/2040.html',
    title:
      "The New Era of Autonomous Driving: Brilliance Team Accelerates RoadAI's Technological Breakthrough",
  },
  {
    image: "http://www.alphafound.cc/assets/img/me6.png",
    url:'http://www.netitimes.com/news/1912.html',
    title:
      "Brilliance Team Partners with Anthropic to Advance Responsible AI Development",
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
  font-family: "Poppins", sans-serif;
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
  .item {
    .itemimage {
      width: 360px;
      height: 204px;
    }
    .itemname {
      margin-top: 30px;
      max-width: 360px;
      font-family: "Poppins", sans-serif;
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
  
  