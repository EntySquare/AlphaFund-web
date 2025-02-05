<template>
  <div class="InvestmentPortfolio">
    <div class="container">
      <div class="title">Investment Portfolio</div>

      <div class="content_text">
        Reasonable asset allocation, risk management, and market insights
        provide support for our investment decisions.
      </div>
      <div class="InvestmentPortfolio_Cards">
        <div v-for="(content, index) in InvestmentPortfolioContent" :key="index" class="item"
          :class="{ hovered: hoveredIndex === index }" @mouseover="hoveredIndex = index"
          @mouseleave="hoveredIndex = -1">
          <img :src="content.image" :alt="content.title" class="itemimage" />
          <div class="itemtitle">{{ content.title }}</div>
          <div class="itemcontent" v-html="content.content"></div>
        </div>
      </div>
      <div class="Energy_Container">
        <div class="left_content">


          <ul>
            <li>Artificial Intelligence: 40%</li>
            <li>Blockchain: 20%</li>
            <li>Education Tech: 10%</li>
            <li>Clean Energy: 12%</li>
            <li>Others: 18%</li>
          </ul>
        </div>
        <div class="right_content">
          <div style="width: 100%; height: 100%;display: flex;align-items: center;justify-content: center;">
            <!-- 饼图容器 -->
            <v-chart :option="chartOptions" class="chart"></v-chart>
          </div>
          <!-- <div class="pie-chart">
            <img src="http://www.alphafound.cc/assets/img/pieChart.png" alt="Pie Chart" />
            <div class="rectangles">
              <div class="rightRectangle">
                <img
                  src="http://www.alphafound.cc/assets/img/rightRectangle.png"
                  alt="left rectangle"
                />
              </div>
              <div class="leftRectangle">
                <img
                  src="http://www.alphafound.cc/assets/img/leftRectangle.png"
                  alt="right rectangle"
                />
              </div>
              <div class="downRectangle">
                <img src="http://www.alphafound.cc/assets/img/rectangle.png" alt="down rectangle" />
              </div>

              <div class="rectangular-box-energy">
                <div class="percentage-box">30%</div>
                <div class="label">Clean Energy</div>
              </div>
              <div class="rectangular-box-tech">
                <div class="percentage-box">20%</div>
                <div class="label">Educational Technology</div>
              </div>
              <div class="rectangular-box-ai">
                <div class="percentage-box">50%</div>
                <div class="label">Artificial Intelligence (AI)</div>
              </div>
            </div>
          </div> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const hoveredIndex = ref<number | null>(-1); // state for holding the hovered card index

// About Us cards content
const InvestmentPortfolioContent = ref([
  {
    image: "http://www.alphafound.cc/assets/img/ip1.png",
    title: "Stock investment",
    content: "Focusing on high-quality stocks in high growth industries",
  },
  {
    image: "http://www.alphafound.cc/assets/img/ip2.png",
    title: "Fixed income",
    content: "Provide stable cash flow and security assurance",
  },
  {
    image: "http://www.alphafound.cc/assets/img/ip3.png",
    title: "Alternative investment",
    content:
      "Pursuing excess returns through channels such as hedge funds and private equity",
  },
]);

import { defineComponent } from "vue";
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import { TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import VChart from "vue-echarts";

// 注册 ECharts 需要的组件
use([PieChart, TooltipComponent, CanvasRenderer]);

const chartOptions = {
  tooltip: {
    trigger: "item",
    formatter: "{b}:  ({d}%)",
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 40, name: "Artificial Intelligence" },
        { value: 20, name: "Blockchain" },
        { value: 10, name: "Education Tech" },
        { value: 12, name: "Clean Energy" },
        { value: 18, name: "Others" },
      ],
      color: ["#FFB300", "#FFA500", "#FFCC00", "#FF8C00", "#FFD700"], // 黄色、橙色系的颜色
      label: {
        show: false, // 去除饼图上的文字标签
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
</script>

<style scoped lang="less">
.InvestmentPortfolio {
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
  line-height: 56px;
  text-align: center;
  color: #ff9633;
  margin-bottom: 80px;
}

.content_text {
  font-family: Inter, Tahoma, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 33.6px;
  text-align: center;
  color: #414141;
  margin-bottom: 80px;
}

.InvestmentPortfolio_Cards {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  row-gap: 30px;

  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
    width: 345px;
    height: 434px;

    .itemimage {
      width: 100px;
      height: 100px;
      margin-top: 40px;
      // margin: 40px 0px;
    }

    .itemtitle {
      font-family: Inter, Tahoma, sans-serif;
      font-size: 20px;
      font-weight: 600;
      line-height: 42px;
      text-align: center;
      color: #414141;
      // margin-bottom: 22px;
      padding: 30px 0px;
    }

    .itemcontent {
      max-width: 360px;
      padding-top: 16px;
      font-family: Inter, Tahoma, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 30.8px;
      text-align: center;
      color: #414141;
      padding: 0px 40px;
    }
  }

  .item:hover {
    background: linear-gradient(to bottom, white 1%, #f6f6f6 99%);
    transition: background 0.4s ease-in-out;
    border-radius: 20px;
    box-shadow: 0px 0px 4px 0px #0000001a;
  }
}

.Energy_Container {
  width: 100%;
  // height: 565px;
  display: flex;
  flex: column;

  align-items: center;
  margin-top: 10px;

  .left_content {
    width: 50%;
    display: flex;
    text-align: center;
    flex-direction: column;
    padding-left: 20px;

    ul {
      list-style-type: disc;
      display: flex;
      text-align: center;
      flex-direction: column;
    }

    li {
      font-family: Inter, Tahoma, sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 42px;
      text-align: start;
      color: #414141;
      margin-bottom: 30px;
    }
  }

  .right_content {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // position: relative;
    .chart {
      height: 600px;
      width: 600px;
    }

    .pie-chart {
      width: 100%;
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .pie-chart img {
      width: 80%;
      height: auto;
      display: block;
      z-index: 3;
    }

    .rectangular-box-energy {
      width: 27%;
      height: 15%;
      display: flex;
      border-radius: 3px;
      border: 1px solid #cfcfcf;
      font-family: Inter, Tahoma, sans-serif;
      background-color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 11%;
      left: 0%;
      z-index: 4;
    }

    .rectangular-box-tech {
      width: 27%;
      height: 15%;
      display: flex;
      border-radius: 3px;
      border: 1px solid #cfcfcf;
      font-family: Inter, Tahoma, sans-serif;
      background-color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 11%;
      right: 0%;
      z-index: 4;
    }

    .rectangular-box-ai {
      width: 27%;
      height: 15%;
      display: flex;
      border-radius: 3px;
      border: 1px solid #cfcfcf;
      font-family: Inter, Tahoma, sans-serif;
      background-color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0%;
      right: 36%;
      z-index: 4;
    }

    .leftRectangle {
      width: 23%;
      display: flex;
      position: absolute;
      left: 12%;
      top: 23%;
      z-index: 2;
    }

    .rightRectangle {
      width: 23%;
      display: flex;
      position: absolute;
      top: 23%;
      right: 7%;
      z-index: 2;
    }

    .downRectangle {
      display: flex;
      position: absolute;
      bottom: 13%;
      right: 47%;
      z-index: 2;
    }

    .percentage-box {
font-family: Inter, Tahoma, sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 29.05px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #000;
    }

    .label {
font-family: Inter, Tahoma, sans-serif;
      font-size: 1.05rem;
      font-weight: 400;
      line-height: 30.04px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #000;
      opacity: 0.5;
    }
  }
}

@media (max-width: 1420px) {
  .InvestmentPortfolio {
    padding: 0 100px;
  }
}

@media (max-width: 1380px) {
  .InvestmentPortfolio {
    padding: 0 60px;
  }
}

@media (max-width: 1220px) {
  .InvestmentPortfolio {
    padding: 0 60px;

    .Energy_Container {
      width: 100%;
      display: flex;
      flex: column;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      margin-bottom: 150px;

      .left_content {
        width: 100%;
        display: flex;
        text-align: center;
        flex-direction: column;
        padding-left: 20px;

        ul {
          list-style-type: none;
          display: flex;
          text-align: center;
          flex-direction: column;
          justify-content: center;
        }

        li {
          font-family: Inter, Tahoma, sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 20px;
          text-align: center;
          color: #414141;
          margin-bottom: 50px;
        }
      }

      .right_content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        .chart {
          height: 600px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .pie-chart {
          width: 100%;
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .pie-chart img {
          width: 80%;
          height: auto;
          display: block;
          z-index: 3;
        }

        .rectangular-box-energy {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 11%;
          left: 0%;
          z-index: 4;
        }

        .rectangular-box-tech {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 11%;
          right: 0%;
          z-index: 4;
        }

        .rectangular-box-ai {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0%;
          right: 36%;
          z-index: 4;
        }

        .leftRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          left: 12%;
          top: 23%;
          z-index: 2;
        }

        .rightRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          top: 23%;
          right: 7%;
          z-index: 2;
        }

        .downRectangle {
          display: flex;
          position: absolute;
          bottom: 13%;
          right: 47%;
          z-index: 2;
        }

        .percentage-box {
font-family: Inter, Tahoma, sans-serif;
          font-size: clamp(20px, 1vw, 18px);
          font-weight: 600;
          text-align: center;
          line-height: 18px;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          color: #000;
        }

        .label {
font-family: Inter, Tahoma, sans-serif;
          font-size: clamp(13px, 1vw, 16px);
          font-weight: 400;
          text-align: center;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          line-height: 24px;
          color: #000;
          opacity: 0.5;
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .InvestmentPortfolio {
    padding: 0 20px;

    .Energy_Container {
      width: 100%;
      display: flex;
      flex: column;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      margin-bottom: 100px;

      .left_content {
        width: 100%;
        display: flex;
        text-align: center;
        flex-direction: column;
        padding-left: 20px;

        ul {
          list-style-type: none;
          display: flex;
          text-align: center;
          flex-direction: column;
          justify-content: center;
        }

        li {
          font-family: Inter, Tahoma, sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 20px;
          text-align: center;
          color: #414141;
          margin-bottom: 50px;
        }
      }

      .right_content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        .pie-chart {
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .pie-chart img {
          width: 80%;
          height: auto;
          display: block;
          z-index: 3;
        }

        .rectangular-box-energy {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0px;
          position: absolute;
          top: 11%;
          left: 0%;
          z-index: 4;
        }

        .rectangular-box-tech {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 11%;
          right: 0%;
          z-index: 4;
        }

        .rectangular-box-ai {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0%;
          right: 36%;
          z-index: 4;
        }

        .leftRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          left: 12%;
          top: 23%;
          z-index: 2;
        }

        .rightRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          top: 23%;
          right: 7%;
          z-index: 2;
        }

        .downRectangle {
          display: flex;
          position: absolute;
          bottom: 13%;
          right: 47%;
          z-index: 2;
        }

        .percentage-box {
font-family: Inter, Tahoma, sans-serif;
          font-size: clamp(16px, 1vw, 16px);
          font-weight: 600;
          text-align: center;
          line-height: 18px;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          color: #000;
        }

        .label {
font-family: Inter, Tahoma, sans-serif;
          font-size: clamp(11px, 1vw, 14px);
          font-weight: 400;
          text-align: center;
          line-height: 18px;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          color: #000;
          opacity: 0.5;
        }
      }
    }
  }
}

@media (max-width: 824px) {
  .InvestmentPortfolio {
    padding: 0 20px;

    .container {
      padding: 50px 0;
    }

    .title {
      font-size: 25px;
      margin-bottom: 100px;
    }

    .content_text {
      font-size: 16px;
      line-height: 24.2px;
      padding-bottom: 00px;
      margin-bottom: 30px;
      text-align: start;
      padding: 0px;
    }

    .InvestmentPortfolio_Cards {
      flex-direction: column;
      align-items: center;
      gap: 0px;
      row-gap: 20px;

      .item {
        width: 100%;
        height: 10%;
        border-radius: 14px;
        border: 1px solid #e4e4e4;
        background: linear-gradient(to bottom, white 1%, #f6f6f6 99%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 20px 25px 20px;

        .itemimage {
          width: 70px;
          height: 70px;
          margin: 20px 0px;
        }

        .itemtitle {
          font-size: 20px;
          line-height: 22px;
          margin-bottom: 0;
        }

        .itemcontent {
          padding-top: 0px;
          font-size: 14px;
          max-width: 100%;
          line-height: 20.8px;
        }
      }
    }

    .Energy_Container {
      width: 100%;
      display: flex;
      flex: column;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      margin-bottom: 00px;

      .left_content {
        width: 100%;
        display: flex;
        text-align: center;
        flex-direction: column;
        padding-left: 20px;

        ul {
          list-style-type: none;
          display: flex;
          text-align: center;
          flex-direction: column;
          justify-content: center;
        }

        li {
          font-family: Inter, Tahoma, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 10px;
          text-align: center;
          color: #414141;
          margin-bottom: 50px;
        }
      }

      .right_content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        .pie-chart {
          width: 100%;
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .pie-chart img {
          width: 80%;
          height: auto;
          display: block;
          z-index: 3;
        }

        .rectangular-box-energy {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 11%;
          left: 0%;
          z-index: 4;
        }

        .rectangular-box-tech {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 11%;
          right: 0%;
          z-index: 4;
        }

        .rectangular-box-ai {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0%;
          right: 36%;
          z-index: 4;
        }

        .leftRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          left: 12%;
          top: 23%;
          z-index: 2;
        }

        .rightRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          top: 23%;
          right: 7%;
          z-index: 2;
        }

        .downRectangle {
          display: flex;
          position: absolute;
          bottom: 13%;
          right: 47%;
          z-index: 2;
        }

        .percentage-box {
font-family: Inter, Tahoma, sans-serif;
          font-weight: 600;
          line-height: 18px;

          color: #000;
        }

        .label {
font-family: Inter, Tahoma, sans-serif;
          font-size: 1vw;
          font-weight: 400;
          line-height: 18px;
          color: #000;
          opacity: 0.5;
        }
      }
    }

    //   .Energy_Container{
    //     width: 100%;
    //     display: flex;
    //     flex: column;
    //     flex-direction: column;
    //     align-items: center;
    //     margin-top: 100px;
    //     margin-bottom: 200px;
    //   .left_content{
    //       width: 100%;
    //       display: flex;
    //       text-align: center;
    //       flex-direction: column;
    //       padding-left: 20px;
    //     ul {
    //       list-style-type: none;
    //       display: flex;
    //       text-align: center;
    //       flex-direction: column;
    //       justify-content: center;
    //     }
    //     li {
    //     font-family: Inter, Tahoma, sans-serif;    //       font-size: 30px;
    //       font-weight: 500;
    //       line-height: 42px;
    //       text-align: center;
    //       color: #414141;
    //       margin-bottom: 50px;
    //     }
    //   }

    // .right_content{
    // width: 100%;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   flex-direction: column;
    //    position: relative;

    // .pie-chart {
    //   width:100%;
    //   height: 100%;
    //   position: relative;
    // }

    // .pie-chart img {
    //   width: 500px;
    //    height: 500px;
    //   justify-content: center;
    //    z-index: 3;
    // }

    // .rectangular-box-energy {
    //   width: 120px;
    //   height: 70px;
    //   display: flex;
    //   border-radius: 3px;
    //   border: 1px solid #CFCFCF;
    // font-family: Inter, Tahoma, sans-serif;    //   background-color: white;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: center;
    //   position: absolute;
    //   top:  60px;
    //   left:  80px;
    //   z-index: 4;

    // }

    // .rectangular-box-tech {
    // width: 120px;
    // height: 70px;
    //   display: flex;
    //   border-radius: 3px;
    //   border: 1px solid #CFCFCF;
    // font-family: Inter, Tahoma, sans-serif;    //   background-color: white;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: center;
    //   position: absolute;
    //   top:  60px;
    //   right: 60px;
    //   z-index: 4;
    // }

    // .rectangular-box-ai {
    // width: 120px;
    // height: 70px;
    //   display: flex;
    //   border-radius: 3px;
    //   border: 1px solid #CFCFCF;
    // font-family: Inter, Tahoma, sans-serif;    //   background-color: white;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: center;
    //   position: absolute;
    //   bottom: 00px;
    //   right: 270px;
    //   z-index: 4;
    // }

    // .leftRectangle{
    //   width: 100px;
    //   height: 50px;
    //   display: flex;
    //   position: absolute;
    //   bottom: 330px;
    //   left: 115px;
    //   z-index: 2;

    // }

    // .rightRectangle{
    //  width: 100px;
    //   height: 50px;
    //   display: flex;
    //   position: absolute;
    //   bottom: 330px;
    //   right: 120px;
    //   z-index: 2;

    // }
    // .downRectangle{
    //   width: 20px;
    //   height: 50px;
    //   display: flex;
    //   position: absolute;
    //   bottom: 58px;
    //   right:  340px;
    //   z-index: 2;

    // }

    // .percentage-box {
    // font-size: 16px;
    // font-weight: 700;
    // color: #414141;
    // }

    // .label {
    // font-size: 14px;
    // font-weight: 500;
    // color: #414141;
    // }
    //   }
    // }
  }
}

@media (max-width: 756px) {
  .InvestmentPortfolio {
    padding: 0 20px;

    .container {
      padding: 50px 0;
    }

    .title {
      font-size: 25px;
      margin-bottom: 100px;
    }

    .content_text {
      font-size: 16px;
      line-height: 24.2px;
      padding-bottom: 00px;
      margin-bottom: 30px;
      text-align: start;
      padding: 0px;
    }

    .InvestmentPortfolio_Cards {
      flex-direction: column;
      align-items: center;
      gap: 0px;
      row-gap: 20px;

      .item {
        width: 100%;
        height: 10%;
        border-radius: 14px;
        border: 1px solid #e4e4e4;
        background: linear-gradient(to bottom, white 1%, #f6f6f6 99%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 20px 25px 20px;

        .itemimage {
          width: 70px;
          height: 70px;
          margin: 20px 0px;
        }

        .itemtitle {
          font-size: 20px;
          line-height: 22px;
          margin-bottom: 0;
        }

        .itemcontent {
          padding-top: 0px;
          font-size: 14px;
          max-width: 100%;
          line-height: 20.8px;
        }
      }
    }

    .Energy_Container {
      width: 100%;
      height: 50%;
      display: flex;
      flex: column;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      margin-bottom: 00px;

      .left_content {
        width: 100%;
        display: flex;
        text-align: center;
        flex-direction: column;
        padding-left: 20px;

        ul {
          list-style-type: none;
          display: flex;
          text-align: center;
          flex-direction: column;
          justify-content: center;
        }

        li {
          font-family: Inter, Tahoma, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 10px;
          text-align: center;
          color: #414141;
          margin-bottom: 50px;
        }
      }

      .right_content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        .chart {
          height: 350px;
          width: 350px;
        }

        .pie-chart {
          width: 100%;
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .pie-chart img {
          width: 80%;
          height: auto;
          display: block;
          z-index: 3;
        }

        .rectangular-box-energy {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 11%;
          left: 0%;
          z-index: 4;
        }

        .rectangular-box-tech {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 11%;
          right: 0%;
          z-index: 4;
        }

        .rectangular-box-ai {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0%;
          right: 36%;
          z-index: 4;
        }

        .leftRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          left: 12%;
          top: 23%;
          z-index: 2;
        }

        .rightRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          top: 23%;
          right: 7%;
          z-index: 2;
        }

        .downRectangle {
          display: flex;
          position: absolute;
          bottom: 13%;
          right: 47%;
          z-index: 2;
        }

        .percentage-box {
          font-family: Inter;
          font-weight: 600;
          font-size: 2vw;
          line-height: 18px;
          color: #000;
        }

        .label {
          font-family: Iowan Old Style;
          font-size: 1.2vw;
          font-weight: 400;
          line-height: 10px;
          color: #000;
          opacity: 0.5;
        }
      }
    }

    //   .Energy_Container{
    //     width: 100%;
    //     display: flex;
    //     flex: column;
    //     flex-direction: column;
    //     align-items: center;
    //     margin-top: 100px;
    //     margin-bottom: 200px;
    //   .left_content{
    //       width: 100%;
    //       display: flex;
    //       text-align: center;
    //       flex-direction: column;
    //       padding-left: 20px;
    //     ul {
    //       list-style-type: none;
    //       display: flex;
    //       text-align: center;
    //       flex-direction: column;
    //       justify-content: center;
    //     }
    //     li {
    //     font-family: Inter, Tahoma, sans-serif;    //       font-size: 30px;
    //       font-weight: 500;
    //       line-height: 42px;
    //       text-align: center;
    //       color: #414141;
    //       margin-bottom: 50px;
    //     }
    //   }

    // .right_content{
    // width: 100%;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   flex-direction: column;
    //    position: relative;

    // .pie-chart {
    //   width:100%;
    //   height: 100%;
    //   position: relative;
    // }

    // .pie-chart img {
    //   width: 500px;
    //    height: 500px;
    //   justify-content: center;
    //    z-index: 3;
    // }

    // .rectangular-box-energy {
    //   width: 120px;
    //   height: 70px;
    //   display: flex;
    //   border-radius: 3px;
    //   border: 1px solid #CFCFCF;
    // font-family: Inter, Tahoma, sans-serif;    //   background-color: white;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: center;
    //   position: absolute;
    //   top:  60px;
    //   left:  80px;
    //   z-index: 4;

    // }

    // .rectangular-box-tech {
    // width: 120px;
    // height: 70px;
    //   display: flex;
    //   border-radius: 3px;
    //   border: 1px solid #CFCFCF;
    // font-family: Inter, Tahoma, sans-serif;    //   background-color: white;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: center;
    //   position: absolute;
    //   top:  60px;
    //   right: 60px;
    //   z-index: 4;
    // }

    // .rectangular-box-ai {
    // width: 120px;
    // height: 70px;
    //   display: flex;
    //   border-radius: 3px;
    //   border: 1px solid #CFCFCF;
    // font-family: Inter, Tahoma, sans-serif;    //   background-color: white;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: center;
    //   position: absolute;
    //   bottom: 00px;
    //   right: 270px;
    //   z-index: 4;
    // }

    // .leftRectangle{
    //   width: 100px;
    //   height: 50px;
    //   display: flex;
    //   position: absolute;
    //   bottom: 330px;
    //   left: 115px;
    //   z-index: 2;

    // }

    // .rightRectangle{
    //  width: 100px;
    //   height: 50px;
    //   display: flex;
    //   position: absolute;
    //   bottom: 330px;
    //   right: 120px;
    //   z-index: 2;

    // }
    // .downRectangle{
    //   width: 20px;
    //   height: 50px;
    //   display: flex;
    //   position: absolute;
    //   bottom: 58px;
    //   right:  340px;
    //   z-index: 2;

    // }

    // .percentage-box {
    // font-size: 16px;
    // font-weight: 700;
    // color: #414141;
    // }

    // .label {
    // font-size: 14px;
    // font-weight: 500;
    // color: #414141;
    // }
    //   }
    // }
  }
}


@media (max-width: 456px) {
  .InvestmentPortfolio {
    padding: 0 20px;

    .container {
      padding: 50px 0;
    }

    .title {
      font-size: 25px;
      margin-bottom: 100px;
    }

    .content_text {
      font-size: 16px;
      line-height: 24.2px;
      padding-bottom: 00px;
      margin-bottom: 30px;
      text-align: start;
      padding: 0px;
    }

    .InvestmentPortfolio_Cards {
      flex-direction: column;
      align-items: center;
      gap: 0px;
      row-gap: 20px;

      .item {
        width: 100%;
        height: 10%;
        border-radius: 14px;
        border: 1px solid #e4e4e4;
        background: linear-gradient(to bottom, white 1%, #f6f6f6 99%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 20px 25px 20px;

        .itemimage {
          width: 70px;
          height: 70px;
          margin: 20px 0px;
        }

        .itemtitle {
          font-size: 20px;
          line-height: 22px;
          margin-bottom: 0;
        }

        .itemcontent {
          padding-top: 0px;
          font-size: 14px;
          max-width: 100%;
          line-height: 20.8px;
        }
      }
    }

    .Energy_Container {
      width: 100%;
      height: 50%;
      display: flex;
      flex: column;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      margin-bottom: 00px;

      .left_content {
        width: 100%;
        display: flex;
        text-align: center;
        flex-direction: column;
        padding-left: 20px;

        ul {
          list-style-type: none;
          display: flex;
          text-align: center;
          flex-direction: column;
          justify-content: center;
        }

        li {
          font-family: Inter, Tahoma, sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 5px;
          text-align: center;
          color: #414141;
          margin-bottom: 50px;
        }
      }

      .right_content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        .chart {
          height: 280px;
          width: 280px;
        }

        .pie-chart {
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .pie-chart img {
          width: 80%;
          display: block;
          z-index: 3;
        }

        .rectangular-box-energy {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 11%;
          left: 0%;
          z-index: 4;
        }

        .rectangular-box-tech {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 11%;
          right: 0%;
          z-index: 4;
        }

        .rectangular-box-ai {
          width: 27%;
          height: 15%;
          display: flex;
          border-radius: 3px;
          border: 1px solid #cfcfcf;
          font-family: Inter, Tahoma, sans-serif;
          background-color: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0%;
          right: 36%;
          z-index: 4;
        }

        .leftRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          left: 12%;
          top: 23%;
          z-index: 2;
        }

        .rightRectangle {
          width: 23%;
          display: flex;
          position: absolute;
          top: 23%;
          right: 7%;
          z-index: 2;
        }

        .downRectangle {
          display: flex;
          position: absolute;
          bottom: 13%;
          right: 47%;
          z-index: 2;
        }

        .percentage-box {
          font-family: Inter;
          font-size: clamp(10px, 1vw, 12px);
          font-weight: 600;

          line-height: 10px;
          color: #000;
        }

        .label {
          font-family: Iowan Old Style;
          font-size: clamp(5px, 1vw, 8px);
          font-weight: 400;
          line-height: 10px;
          color: #000;
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
