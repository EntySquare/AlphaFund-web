<template>
  <div class="full-screen-container">
    <div class="background" :style="{ transform: 'translateY(' + scrollPosition + 'px)' }"></div>
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
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useWindowSize } from "@/utils/useWindowSize";

export default defineComponent({
  name: 'FullScreenScroll',
  setup() {
const { windowWidth } = useWindowSize();
    const scrollPosition = ref(0);

    // 监听滚动事件，更新背景的偏移量
    const handleScroll = () => {
      scrollPosition.value = window.scrollY * 0.7; // 调整这个值以控制背景滚动的速度
    };

    // 滚动到下一部分
    const scrollToNext = () => {
      window.scrollTo({ top: window.innerHeight+80, behavior: 'smooth' });
    };

    // 在页面加载时添加滚动事件监听
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    return {
      scrollPosition,
      scrollToNext,
      windowWidth
    };
  }
});
</script>


  <style scoped lang="less">
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
  height: 100%;
  position: absolute;
  height: 100%;
  /* left: 0; */
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
  align-items: center;
  justify-content: center;
  .inText {
    font-family: PingFang SC;
    font-size: 15px;
    font-weight: 400;
    line-height: 19.6px;

    text-align: left;
    color: #fffffb;
  }
  .intextMargin {
    margin-bottom: 40px;
  }
  .AtText {
    font-family: PingFang SC;
    font-size: 15px;
    font-weight: 400;
    line-height: 19.6px;
    color: #fffffb;
    margin-bottom: 65px;
    max-width: 290px;
  }
  .stats {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }
  .avatar {
    width: 100px;
    height: auto;
    margin-right: 18px;
  }
  .LOytext {
    .numText {
      font-family: PingFang SC;
      font-size: 13px;
      font-weight: 500;
      line-height: 19.6px;
      text-align: left;
      color: #fff;
    }
    .LoyalText {
      font-family: PingFang SC;
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      text-align: left;
      color: #e5e5e5;
    }
  }
  .joinButton {
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid #ffffff;
    background: #ffffff1a;
    font-family: PingFang SC;
    font-size: 15px;
    font-weight: 300;
    line-height: 21px;
    color: #fff;
    padding: 12px 40px;
    margin-bottom: 70px;
    border-radius: 4px;
  }
  .footer-text {
    font-family: PingFang SC;
    font-size: 15px;
    font-weight: 400;
    line-height: 19.6px;
    color: #fffffb;
  }
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
    background: url("@/assets/img/OpenBg.png") no-repeat;
    background-size: cover;
  }
  .container {
    padding: 0 20px;
    .content {
      .horizontal {
        display: flex;
        gap: 3px;
      }
      .AtText {
        width: 100%;
        max-width: 100%;
        margin-bottom: 15px;
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
  background: url('@/assets/img/bigBg.webp') center center no-repeat;
  background-size: cover;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
