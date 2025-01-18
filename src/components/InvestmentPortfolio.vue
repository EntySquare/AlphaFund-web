<template>
    <div class="InvestmentPortfolio">
      <div class="container">
        <!-- Investment Portfolio Section -->
        <div class="title">Investment Portfolio</div>
    
            <div class="content_text">
          Reasonable asset allocation, risk management, and market insights provide support for our investment decisions.
      
        </div>
        <div class="InvestmentPortfolio_Cards">
          <div v-for="(content, index) in InvestmentPortfolioContent" :key="index" class="item" 
          :class="{'hovered':hoveredIndex === index}"
          @mouseover="hoveredIndex = index"
          @mouseleave="hoveredIndex = -1"
          >
            <img :src="content.image" :alt="content.title" class="itemimage" />
            <div class="itemtitle">{{ content.title }}</div>
            <div class="itemcontent"  v-html="content.content"></div>
          </div>
        </div>
        <div class="Energy_Container">
            <div class ="left_content">
                <ul>
        <li>Clean Energy: 30%</li>
        <li>Educational Technology: 20%</li>
        <li>Artificial Intelligence (AI): 50%</li>
    </ul>
            </div>
    <div class="right_content">
      <!-- Pie chart image -->
      <div class="pie-chart">
        <img src="/src/assets/img/pieChart.png" alt="Pie Chart" />
        <div class="rectangles">
          
            <div class = "rightRectangle">
      <img src="/src/assets/img/rightRectangle.png" alt="left rectangle" />
    </div>
            <div class = "leftRectangle">
      <img src="/src/assets/img/leftRectangle.png" alt="right rectangle" />
    </div>
    <div class = "downRectangle">
      <img src="/src/assets/img/rectangle.png" alt="down rectangle" />
    </div>
   
        <div class="rectangular-box-energy">
          <div class="percentage-box">30%</div>
          <div class="label">Clean Energy</div>
        </div>
        <div class="rectangular-box-tech">
          <div class="percentage-box">20%</div>
          <div class="label">Educational Technology</div>
        </div>
          </div>
         
        <div class="rectangular-box-ai">
          <div class="percentage-box">50%</div>
          <div class="label">Artificial Intelligence (AI)</div>
  
      </div>
      </div>
    
  
    
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
    image: "/src/assets/img/ip1.png",
    title: "Stock investment",
    content: "Focusing on high-quality stocks in high growth industries",
  },
  {
    image: "/src/assets/img/ip2.png",
    title: "Fixed income",
    content: "Provide stable cash flow and security assurance",
  },
  {
    image: "/src/assets/img/ip3.png",
    title: "Alternative investment",
    content: "Pursuing excess returns through channels such as hedge funds and private equity",
  }
]);
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
  font-family: PingFang SC;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  color: #000;
  margin-bottom: 100px;
}
.content_text{
        font-family: PingFang SC;
    font-size: 24px;
    font-weight: 400;
    line-height: 33.6px;
    text-align: center;
    color: #414141;
    margin-bottom: 100px;
    padding: 0px 100px;
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
    width: 375px;
    height: 484px;
    .itemimage {
      width: 100px;
      height: 100px;
      margin: 40px 0px;
    }
    .itemtitle {
      font-family: PingFang SC;
      font-size: 30px;
      font-weight: 600;
      line-height: 42px;
      text-align: center;
      color: #414141;
      margin-bottom: 22px;
      padding: 30px 0px;

    }
    .itemcontent {
      max-width:360px;
      padding-top: 20px;
      font-family: PingFang SC;
      font-size: 22px;
      font-weight: 400;
      line-height: 30.8px;
      text-align: center;
      color: #414141;
      padding: 0px 40px;

    }
  }
   .item:hover {
    background: linear-gradient(to bottom, white 1%, #F6F6F6 99%);
    transition: background 0.4s ease-in-out;
    border-radius: 20px;
    box-shadow: 0px 0px 4px 0px #0000001A;
}
}

.Energy_Container{
    width: 100%;
    height: 565px;
    display: flex;
    flex: column;
    align-items: center;
    margin-top: 100px;
    

    .left_content{
      width: 40%;
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
      font-family: PingFang SC;
      font-size: 30px;
      font-weight: 500;
      line-height: 42px;
      text-align: start;
      color: #414141;
      margin-bottom: 50px;
}
    }

.right_content{
    width: 60%;
    display: flex;  
    justify-content: center;  
    align-items: center;  
    flex-direction: column; 
     position: relative;
    
.pie-chart {
    width:100%;
    height: 100%;
    position: relative;
    margin-bottom: 70px;
    padding-left: 100px;
    display: flex;  
    justify-content: center;  
    align-items: center;  
    flex-direction: column; 
    padding: 00px;
}

.pie-chart img {
    width: 90%;
     height: 90%;
     margin-left: 20px;
     z-index: 3;
}

.rectangles {
  width: 100%;
  height: 100%;
 text-align: center;
 background-color: #000;

}

.rectangular-box-energy {
    width: 190px;
    height: 90px;
    display: flex;
    border-radius: 3px;
    border: 1px solid #CFCFCF;
    font-family: PingFang SC;
    background-color: white;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    position: absolute;
    top:  60px;
    left:  -00px;
    z-index: 4;
 
}

.rectangular-box-tech {
  width: 190px;
  height: 90px;
    display: flex;
    border-radius: 3px;
    border: 1px solid #CFCFCF;
    font-family: PingFang SC;
    background-color: white;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    position: absolute;
    top:  60px;
    right: 00px;
    z-index: 4;
}

.rectangular-box-ai {
    width: 190px;
    height: 90px;
    display: flex;
    border-radius: 3px;
    border: 1px solid #CFCFCF;
    font-family: PingFang SC;
    background-color: white;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    position: absolute;
    bottom: 00px;
    right: 260px;
    z-index: 4;
}

.leftRectangle{
    width: 150px;
    height: 100px;
    display: flex;
    position: absolute;
    bottom: 420px;
    left: 65px;
    z-index: 2;
    
}

.rightRectangle{
    width: 150px;
    height: 100px;
    display: flex;
    position: absolute;
    bottom: 420px;
    right:  84px;
    z-index: 2;

    
}
.downRectangle{
    width: 50px;
    height: 100px;
    display: flex;
    position: absolute;
    bottom: 60px;
    right:  340px;
    z-index: 2;
    
}

.percentage-box {
  font-size: 20px;
  font-weight: 700;
  color: #414141;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: #414141;
}
    }
}

</style>

