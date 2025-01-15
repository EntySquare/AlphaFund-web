<script lang="ts" setup name="AppFooter"></script>
<template>
  <footer class="app_footer">
    <div class="container">
      <div class="top">
        <div class="top_left">
          <div class="logo">
            <img src="@/assets/img/logo.svg" alt="BeWater" />
          </div>
          <div class="text">
            为投资者提供稳健的回报，<br />
            帮助他们实现长期财务目标。
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
  </footer>
</template>

<style scoped lang="less">
.app_footer {
  background-color: #eaeaea;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 180px;
    flex-direction: column;
    padding: 110px 190px 90px 120px;
  }
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
    gap: 140px;
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
</style>
