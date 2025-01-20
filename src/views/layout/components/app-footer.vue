<script lang="ts" setup name="AppFooter">
import { useWindowSize } from "@/utils/useWindowSize";

const { windowWidth } = useWindowSize();
</script>
<template>
  <footer class="app_footer">
    <div class="container">
      <div class="top">
        <div class="top_left">
          <div class="logo">
            <img src="@/assets/img/logo.svg" alt="BeWater" />
          </div>
          <div class="text" v-if="windowWidth > 824">
            To provide investors with stable returns，<br />
            Help them achieve long-term financial goals.
          </div>
          <div class="text" v-else>
            To provide investors with stable returns， Help them achieve long-term financial goals.
          </div>
          <div class="Links">
            <img src="@/assets/img/in.png" alt="" />
            <img src="@/assets/img/twi.png" alt="" />
            <img src="@/assets/img/facebook.png" alt="" />
          </div>
        </div>
        <div class="top_right">
          <div class="navSpecial">
            <div class="nav">
              <div class="navTitle">Contact</div>
              <div class="navText">+123-456-7890</div>
              <div class="navText">info@alphafund.com</div>
              <div class="navText">Online Contact Form</div>
            </div>
            <div class="nav">
              <div class="navTitle">Address</div>
              <div class="navText">公司地址</div>
            </div>
          </div>
          <div class="nav">
            <div class="navTitle">Explore</div>
            <div class="navText">Home</div>
            <div class="navText">About us</div>
            <div class="navText">Investment Portfolio</div>
            <div class="navText">Market Insights</div>
            <div class="navText">Social Impact</div>
            <div class="navText">Media Coverage</div>
            <div class="navText">Brilliance Corporation</div>
          </div>
          <div class="nav">
            <div class="navTitle">Support</div>
            <div class="navText">Legal Notice</div>
            <div class="navText">Privacy Policy</div>
            <div class="navText">Term of service</div>
          </div>
        </div>
      </div>
      <div class="bottom">版权信息：© 2023 AlphaFund. All rights reserved.</div>
    </div>
  </footer>
  <!-- <footer class="app_footer">
    <div class="container">
      <div class="top">
        <div class="top_left">
          <div class="logo">
            <img src="@/assets/img/logo.svg" alt="BeWater" />
          </div>
          <div class="text" v-if="windowWidth > 824">
            为投资者提供稳健的回报，<br />
            帮助他们实现长期财务目标。
          </div>
          <div class="text" v-else>
            为投资者提供稳健的回报， 帮助他们实现长期财务目标。
          </div>
          <div class="Links">
            <img src="@/assets/img/in.png" alt="" />
            <img src="@/assets/img/twi.png" alt="" />
            <img src="@/assets/img/facebook.png" alt="" />
          </div>
        </div>
        <div class="top_right">
          <div class="navSpecial">
            <div class="nav">
              <div class="navTitle">联系方式</div>
              <div class="navText">+123-456-7890</div>
              <div class="navText">info@alphafund.com</div>
            </div>
            <div class="nav">
              <div class="navTitle">地址</div>
              <div class="navText">公司地址</div>
            </div>
          </div>
          <div class="nav">
            <div class="navTitle">探索</div>
            <div class="navText">主页</div>
            <div class="navText">关于我们</div>
            <div class="navText">市场见解</div>
            <div class="navText">团队介绍</div>
            <div class="navText">社会影响</div>
            <div class="navText">在线联系表</div>
          </div>
          <div class="nav">
            <div class="navTitle">支持</div>
            <div class="navText">法律声明</div>
            <div class="navText">隐私政策</div>
            <div class="navText">帮助中心</div>
          </div>
        </div>
      </div>
      <div class="bottom">版权信息：© 2023 AlphaFund. All rights reserved.</div>
    </div>
  </footer> -->
</template>

<style scoped lang="less">
.app_footer {
  background-color: #eaeaea;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 180px;
  flex-direction: column;
  padding: 110px 190px 90px 120px;
}
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  .top_left {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .logo {
      width: 120px;
      height: 120px;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-family: PingFang SC;
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
      text-align: left;
      color: #000000;
    }
    .Links {
      display: flex;
      gap: 10px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  .top_right {
    display: flex;
    gap: 90px;
    .navSpecial {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    .nav {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .navTitle {
        margin-bottom: 10px;
        font-family: PingFang SC;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        text-align: left;
        color: #000000;
      }
      .navText {
        font-family: PingFang SC;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        text-align: left;
        color: #000000;
      }
    }
  }
}
.bottom {
  font-family: PingFang SC;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  color: #000000;
}

@media (max-width: 1420px) {
  .app_footer {
    .container {
      padding: 110px 140px 90px 100px;
    }
  }
}
@media (max-width: 1200px) {
  .app_footer {
    .container {
      padding: 110px 70px 90px 50px;
      gap: 70px;
      .top_right {
        gap: 70px;
      }
    }
  }
}
@media (max-width: 824px) {
  .app_footer {
    .container {
      padding: 60px 20px 40px 20px;
      gap: 40px;
      .top {
        display: flex;
        flex-direction: column;
        width: 100%;
        .top_left {
          gap: 10px;
          align-items: center;
          margin-bottom: 40px;
          .logo {
            width: 60px;
            height: 60px;
            margin-bottom: 0px;
          }
          .Links {
            img {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
      .top_right {
        display: flex;
        // flex-direction: column;
      }
    }
  }
}
@media (max-width: 576px) {
  .app_footer {
    .container {
      .top {
        .text {
          text-align: center;
        }
        .top_right {
          flex-direction: column;
          align-items: center;
          gap: 10px;
          .navSpecial {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          .nav {
            align-items: center;
            gap: 5px;
            .navTitle {
              margin-bottom: 0px;
              font-size: 16px;
            }
            .navText {
              font-size: 14px;
            }
          }
        }
      }
      .bottom {
        font-size: 14px;
      }
    }
  }
}
</style>
