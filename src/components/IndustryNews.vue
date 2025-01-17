<script lang="ts" setup>
</script>

<template>
  <div class="IndustryNews">
    <div class="container">
      <div class="title">Industry News</div>
      <div class="News">
        <div class="NewsItem" v-for="(item, index) in 3" :key="index">
          <LINE lineWidth="810px">
            <template #image>
              <div class="itemImg">
                <img src="@/assets/img/Industry1.png" alt="" />
              </div>
            </template>
            <!-- 文字插槽 -->
            <template #text>
              <div class="itemtext">
                <span class="Research">Research:</span>
                The Far-Reaching Impact of Generative AI on Global Financial
                Markets
              </div>
            </template>
          </LINE>
          <!-- <div class="itemImg">
            <img src="@/assets/img/Industry1.png" alt="" />
          </div>
          <div class="itemtext">
            <span class="Research">Research:</span>
            The Far-Reaching Impact of Generative AI on Global Financial Markets
          </div> -->
        </div>
      </div>
      <div class="Open">
        <div class="openTitle">Open your account today & Enjoy!</div>
        <div class="openText">
          Don't miss out on such a perfect investment artifact
        </div>
        <div class="openButton">JOIN US</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.IndustryNews {
  width: 100%;
}
.container {
  padding: 100px 120px 200px 120px;
  width: 100%;
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
.News {
  width: 100%;
  display: flex;
  //   flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 200px;
  .NewsItem {
    display: flex;
    flex-direction: column;
    // gap: 30px;
    .itemImg {
      width: 360px;
      height: auto;
    }
    .itemtext {
      margin-top: 30px;
      font-family: PingFang SC;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      text-align: left;
      max-width: 360px;
      color: #000;
    }
  }
}
.Open {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 70px 0;
  flex-direction: column;
  background: #6d6d6dcc;
  border: 1px solid #ffffff;
  box-shadow: 6px 6px 1px 1px #000000e5;
  border-radius: 31px;
  .openTitle {
    font-family: PingFang SC;
    font-size: 40px;
    font-weight: 600;
    line-height: 56px;
    text-align: center;
    color: #ffffff;
  }
  .openText {
    font-family: PingFang SC;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    margin-top: 15px;
    margin-bottom: 60px;
  }
  .openButton {
    padding: 16px 60px;
    font-family: PingFang SC;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: #ffffff;
    border-radius: 2px;
    background: #000000;
  }
}

@media (max-width: 1420px) {
  .container {
    padding: 100px 100px 200px 100px;
  }
}
@media (max-width: 1380px) {
  .container {
    padding: 100px 60px 200px 60px;
  }
}
@media (max-width: 1200px) {
  .container {
    .News {
      flex-wrap: wrap;
      justify-content: space-evenly;
      row-gap: 80px;
    }
  }
}
@media (max-width: 824px) {
  .IndustryNews {
    .container {
      padding: 50px 20px 100px 20px;

      .title {
        font-size: 25px;
        margin-bottom: 30px;
      }
      .News {
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
        row-gap: 30px;

        .NewsItem {
          // gap: 15px;
          .itemImg {
            max-width: 320px;
            height: auto;
          }
          .itemtext {
            margin-top: 15px;

            font-size: 14px;
            text-align: center;
            max-width: 320px;
          }
        }
      }
      .Open {
        padding: 30px 0;
        border-radius: 21px;
        .openTitle {
          font-size: 30px;
          line-height: 40px;
        }
        .openText {
          font-family: PingFang SC;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          margin-top: 15px;
          margin-bottom: 40px;
        }
        .openButton {
          padding: 10px 30px;
          font-size: 14px;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
