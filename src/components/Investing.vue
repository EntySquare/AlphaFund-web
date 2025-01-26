<template>
  <div class="full-screen-container">
    <div
      class="background"
      :style="{ transform: 'translateY(' + scrollPosition + 'px)' }"
    ></div>
    <div class="container">
      <div class="content">
        <div class="horizontal" v-if="windowWidth > 824">
          <div class="inText">Investing in Innovation</div>
          <div class="inText intextMargin">Shaping the AI-Driven Future.</div>
        </div>
        <div class="horizontal" v-else>
          <div class="inText intextMargin">
            Investing in Innovation Shaping the AI-Driven Future.
          </div>
        </div>
        <div class="AtText">
          At AlphaFund, we empower innovation to shape a brighter tomorrow. With
          a focus on Artificial Intelligence, Clean Energy, and EdTech, we
          invest in transformative technologies and sustainable solutions.
        </div>

        <div class="stats">
          <img src="@/assets/img/Group.png" class="avatar" />

          <div class="LOytext">
            <div class="numText">1000w +</div>
            <div class="LoyalText">Loyal users</div>
          </div>
        </div>

        <div class="joinButton">JOIN US</div>

        <div class="footer-text">
          In creating a future where technology and purpose intersect.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useWindowSize } from "@/utils/useWindowSize";

export default defineComponent({
  name: "FullScreenScroll",
  setup() {
    const { windowWidth } = useWindowSize();
    const scrollPosition = ref(0);

    // 监听滚动事件，更新背景的偏移量
    const handleScroll = () => {
      scrollPosition.value = window.scrollY * 0.7; // 调整这个值以控制背景滚动的速度
    };

    // 滚动到下一部分
    const scrollToNext = () => {
      window.scrollTo({ top: window.innerHeight + 80, behavior: "smooth" });
    };

    // 在页面加载时添加滚动事件监听
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      scrollPosition,
      scrollToNext,
      windowWidth,
    };
  },
});
</script>

<style scoped lang="less">
.full-screen-image {
  position: relative;
  top: -20px;
  width: 100%;
  height: 98vh;
  object-fit: cover;
}

.Investing {
  /* position: relative; */
  /* background: url("@/assets/img/OpenBg.png") no-repeat; */
  background-size: cover;
  height: 735px;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
}

.container {
  position: relative;
  height: 100%;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 120px;
}

.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.inText {
font-family: Inter, Tahoma, sans-serif;
  font-weight: 600;
  font-size: 35px;
  line-height: 1.1;
  text-align: center;
  color: #272f38;
}

.intextMargin {
  margin-bottom: 40px;
}

.AtText {
font-family: Inter, Tahoma, sans-serif;
  font-weight: 400;
  line-height: 19.6px;
  color: #fffffb;
  margin-bottom: 65px;
  max-width: 500px;
  font-size: 18px;
  line-height: 1.4;
  text-align: left;
  color: #272f38;
}

.stats {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.avatar {
  width: 160px;
  height: auto;
  margin-right: 18px;
}

.LOytext {
  .numText {
font-family: Inter, Tahoma, sans-serif;    font-size: 18px;
    font-weight: 700;
    line-height: 19.6px;
    text-align: left;
    color: #272f38;
  }

  .LoyalText {
font-family: Inter, Tahoma, sans-serif;    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    text-align: left;
    color: #272f38;
  }
}

.joinButton {
  background-color: #ff9633;
  border: 2px solid transparent;
  border-radius: 60px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  width: 170px;
  padding: 13px 23px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  font-family: "Poppins", sans-serif;
  display: inline-block;
  line-height: 21px;
  position: relative;
  overflow: hidden;
}

.joinButton:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 15px rgba(255, 150, 51, 0.5);
}

.joinButton::after {
  content: "";
  position: absolute;
  top: -120%;
  left: -120%;
  width: 250%;
  height: 8px;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(45deg);
  transition: none;
  opacity: 0;
}

.joinButton:hover::after {
  opacity: 1;
  animation: diagonal-sparkle 2.5s ease-out forwards;
}

@keyframes diagonal-sparkle {
  0% {
    top: -100%;
    left: -180%;
  }
  100% {
    top: 100%;
    left: 180%;
  }
}

.footer-text {
  margin-top: 30px;
font-family: Inter, Tahoma, sans-serif;  font-size: 18px;
  font-weight: 400;
  line-height: 19.6px;
  color: #272f38;
}

@media (max-width: 1420px) {
  .container {
    padding: 0 100px;
  }
}

@media (max-width: 1380px) {
  .container {
    padding: 0 60px;

    .content {
      .AtText {
        max-width: 450px;
        margin-bottom: 30px;
      }

      .intextMargin {
        margin-bottom: 20px;
      }

      .stats {
        margin-bottom: 50px;
      }

      .joinButton {
        margin-bottom: 20px;
      }
    }
  }
}

@media (max-width: 824px) {
  .Investing {
    height: 500px;
    background: url("@/assets/img/homeBanner.png") no-repeat;
    background-size: cover;
  }

  .container {
    padding: 0 20px;

    .content {
      .inText {
        font-size: 30px !important;
        font-weight: 500;
      }

      .horizontal {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
      }

      .AtText {
        width: 100%;
        max-width: 100%;
        margin-bottom: 15px;
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
      }

      .intextMargin {
        margin-bottom: 15px;
      }

      .stats {
        margin-bottom: 20px;
      }

      .joinButton {
        margin-bottom: 20px;
        padding: 8px 0px;
        width: 150px;
      }

      .avatar {
        width: 100px;
        height: auto;
        margin-right: 4px;
      }
    }
  }
}
@media (max-width: 460px) {
  .Investing {
    height: 500px;
    background: url("@/assets/img/homeBanner.png") no-repeat;
    background-size: cover;
  }

  .container {
    padding: 0 20px;

    .content {
      .inText {
        font-size: 30px !important;
        font-weight: 500;
      }

      .horizontal {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
      }

      .AtText {
        width: 100%;
        max-width: 100%;
        margin-bottom: 15px;
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
        //word-spacing: 3px;
        text-align: center;
      }

      .intextMargin {
        margin-bottom: 15px;
      }

      .stats {
        margin-bottom: 20px;
      }

      .joinButton {
        margin-bottom: 20px;
        padding: 8px 0px;
        width: 150px;
      }

      .avatar {
        width: 100px;
        height: auto;
        margin-right: 4px;
      }
    }
  }
}
</style>
<style scoped lang="less">
.full-screen-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  // background: url("@/assets/img/homeBanner.png") center center no-repeat;
  background: url("@/assets/img/bg.jpg") center center no-repeat;
  background-size: cover;
}
</style>
