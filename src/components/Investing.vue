<template>
  <div class="Investing">
    <img
      v-if="windowWidth > 824"
      alt=""
      src="@/assets/img/homeBanner.png"
      loading="lazy"
      class="full-screen-image"
    />
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

<script lang="ts" setup>
import { useWindowSize } from "@/utils/useWindowSize";

const { windowWidth } = useWindowSize();
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
  height: 100%;
  position: absolute;
  height: 100%;
  /* left: 0; */
  top: 0;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 120px;
}
.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .inText {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    line-height: 19.6px;
    font-size: 4rem;
    letter-spacing: -0.05em;
    line-height: 1.1;
    text-align: left;
    color: #272f38;
  }
  .intextMargin {
    margin-bottom: 40px;
  }
  .AtText {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    line-height: 19.6px;
    color: #fffffb;
    margin-bottom: 65px;
    max-width: 500px;
    font-size: 1.5rem;
    letter-spacing: -0.05em;
    line-height: 1.1;
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
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 19.6px;
      text-align: left;
      color: #272f38;
    }
    .LoyalText {
      font-family: "Poppins", sans-serif;
      font-size: 14px;
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
    font-size: 0.875rem;
    font-weight: 700;
    width: 170px;
    padding: 13px 23px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s ease-in-out;
    font-family: "Poppins", sans-serif;
    display: inline-block;
    line-height: 21px;
  }
  .footer-text {
    margin-top: 20px;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
      font-weight: 700;
      line-height: 19.6px;
    color: #272f38;
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
    background: url("@/assets/img/homeBanner.png") no-repeat;
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