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
      margin-bottom: 30px;
    }
    .itemname {
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
</style>
  
  