<template>
  <div class="AboutUs">
    <div class="container">
      <!-- About Us Section -->
      <div class="title">About Us</div>
      <div class="AboutUs_Content">
        <div class="content_text">
          <span> AlphaFund</span> focuses on investment opportunities in
          high-potential global industries, committed to promoting the deep
          integration of global capital and technology to create sustainable
          asset growth for our clients. We firmly believe that investors have
          the right to a transparent, secure, and efficient investment
          environment, which is not only their entitlement but also our
          commitment to service.
        </div>
      </div>
      <div class="AboutUs_Cards">
        <div
          v-for="(content, index) in aboutUsContent"
          :key="index"
          class="item"
          :class="{ hovered: hoveredIndex === index }"
          @mouseover="hoveredIndex = index"
          @mouseleave="hoveredIndex = -1"
        >
          <img
            :src="
              hoveredIndex === index
                ? '/src/assets/img/ab5.png'
                : '/src/assets/img/ab4.png'
            "
            class="itemheadimg"
          />
          <img :src="content.image" :alt="content.title" class="itemimage" />
          <div class="itemtitle">{{ content.title }}</div>
          <div class="itemcontent" v-html="content.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const hoveredIndex = ref<number | null>(-1) // state for holding the hovered card index

// About Us cards content
const aboutUsContent = ref([
  {
    image: "/src/assets/img/ab1.png",
    title: "Company Profile",
    content:
      "<span style='font-weight:600;'>AlphaFund</span> was founded in 2005 and is committed to providing excellent asset management services to both individual and institutional investors",
  },
  {
    image: "/src/assets/img/ab2.png",
    title: "Vision",
    content:
      "To drive human society toward a more innovative and sustainable future through the synergy of capital and technology.",
  },
  {
    image: "/src/assets/img/ab3.png",
    title: "Mission",
    content:
      "To discover and support change-makers in the technology sector and to build an inclusive and intelligent global financial ecosystem.",
  },
])
</script>

<style scoped lang="less">
.AboutUs {
  padding: 0 120px;
  width: 100%;
}
.container {
  padding: 100px 0;
  border-bottom: 1px solid #d9d9d9;
}
.title {
  font-family: Inter, Tahoma, sans-serif;
  font-size: 34px;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  color: #ff9633;

  margin-bottom: 80px;
}
.AboutUs_Content {
  padding-bottom: 80px;
  .content_text {
    font-family: Inter, Tahoma, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 39.2px;
    text-align: left;
    color: #414141;

    span {
      font-family: Inter, Tahoma, sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 39.2px;
      text-align: left;
    }
  }
}
.AboutUs_Cards {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  row-gap: 30px;
  .item {
    position: relative;
    border-radius: 17px;
    border: 1px solid #e4e4e4;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 55px 30px 55px 30px;
    width: 375px;
    transition: background 0.4s ease;

    .itemimage {
      width: 70px;
      height: 70px;
      margin: 30px 0px;
    }
    .itemheadimg {
      width: 35px;
      height: 30px;
      position: absolute;
      top: 40px;
      left: 30px;
    }
    .itemtitle {
      font-family: Inter, Tahoma, sans-serif;
      font-size: 22px;
      font-weight: 600;
      line-height: 42px;
      text-align: center;
      color: #414141;
      margin-bottom: 22px;
    }
    .itemcontent {
      max-width: 360px;
      padding-top: 20px;
      font-family: Inter, Tahoma, sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 30.8px;
      text-align: center;
      color: #414141;
    }
  }
  .item:hover {
    background: linear-gradient(to bottom, white 30%, #c1bfbf 90%);
    transition: background 0.4s ease;
  }
}

@media (max-width: 1420px) {
  .AboutUs {
    padding: 0 100px;
  }
}
@media (max-width: 1380px) {
  .AboutUs {
    padding: 0 60px;
  }
}
@media (max-width: 824px) {
  .AboutUs {
    padding: 0 20px;
    .container {
      padding: 50px 0;
    }
    .title {
      font-size: 25px;
      margin-bottom: 100px;
    }
    .AboutUs_Content {
      padding-bottom: 30px;
      .content_text {
        font-size: 16px;
        line-height: 24.2px;

        span {
          font-size: 16px;
          line-height: 24.2px;
        }
      }
    }
    .AboutUs_Cards {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      row-gap: 20px;
      .item {
        border-radius: 14px;
        padding: 25px 20px 25px 20px;
        width: 100%;
        .itemimage {
          width: 50px;
          height: 50px;
          margin: 20px 0px;
        }
        .itemheadimg {
          width: 28px;
          height: auto;
          position: absolute;
          top: 20px;
          left: 25px;
        }
        .itemtitle {
          font-size: 20px;
          line-height: 22px;
          margin-bottom: 0;
        }
        .itemcontent {
          padding-top: 20px;
          font-size: 14px;
          max-width: 100%;
          line-height: 20.8px;
        }
      }
    }
  }
}
</style>
