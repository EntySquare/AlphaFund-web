<template>
  <div class="Media">
    <div class="container">
      <!-- Media Brilliance Corporation Section -->

      <div class="title">Social Impact</div>
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
import { ref } from "vue";

// Team Members
const teamMembers = ref([
  {
    image: "/src/assets/img/Social2.png",
    title: "Sunshine Classroom Project  ",
  },
  {
    image: "/src/assets/img/Social2.png",
    title: "Sunshine Classroom Project  ",
  },
  {
    image: "/src/assets/img/Social2.png",
    title: "Sunshine Classroom Project  ",
  },
  {
    image: "/src/assets/img/Social2.png",
    title: "Sunshine Classroom Project  ",
  },
  {
    image: "/src/assets/img/Social2.png",
    title: "Sunshine Classroom Project  ",
  },
  {
    image: "/src/assets/img/Social2.png",
    title: "Sunshine Classroom Project  ",
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
  margin-bottom: 100px;
  .item {
    .itemimage {
      width: 360px;
      height: auto;
    }
    .itemname {
      margin-top: 30px;
      max-width: 360px;
      font-family: PingFang SC;
      font-size: 24px;
      font-weight: 600;
      line-height: 33.6px;

      color: #000;
    }
  }
}
.bottom {
  .bottom_title {
    font-family: PingFang SC;
    font-size: 36px;
    font-weight: 500;
    line-height: 50.4px;
    text-align: left;
    color: #000;
    margin-bottom: 25px;
  }
  .bottom_text {
    font-family: PingFang SC;
    font-size: 28px;
    font-weight: 400;
    line-height: 39.2px;
    text-align: left;
    color: #414141;

    span {
      font-family: PingFang SC;
      font-size: 28px;
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
    font-family: PingFang SC;
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
      font-family: PingFang SC;
      font-size: 20px;
      font-weight: 500;
      line-height: 40.4px;
      text-align: left;
      color: #000;
      margin-bottom: 0px;
    }
    .bottom_text {
      font-family: PingFang SC;
      font-size: 14px;
      font-weight: 400;
      line-height: 22.2px;
      text-align: left;
      color: #414141;

      span {
        font-family: PingFang SC;
        font-size: 14px;
        line-height: 22.2px;
        text-align: left;
      }
    }
  }
}
</style>
  
  