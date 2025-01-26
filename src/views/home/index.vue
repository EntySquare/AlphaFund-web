<script setup lang='ts' name="HomeView">


</script>
<template>
  <div class="home_view">
    <SlideInContent id="Home"> <Investing /></SlideInContent>
    <div class="container">
      <SlideInContent id="AboutUs"> <AboutUs /></SlideInContent>
      <SlideInContent id="InvestmentPortfolio"> <InvestmentPortfolio /></SlideInContent>
      <SlideInContent id="Invest"> <Cryptocurrency/></SlideInContent>
      <SlideInContent id="MarketInsights"> <Market /></SlideInContent>
      <SlideInContent id="SocialImpact"> <Social /></SlideInContent>
      <SlideInContent id="MediaCoverage"> <Media /></SlideInContent>
      <SlideInContent id="BrillianceCorporation"> <AlphaFund /></SlideInContent>
      <SlideInContent id="Advisoryteam"> <Advisory /></SlideInContent>
      <SlideInContent id="IndustryNews"> <IndustryNews /></SlideInContent>
    </div>
  </div>
</template>
<style scoped lang='less'>
.home_view {
  background-color: #f6f6f6; // min-height: calc(100vh - 80px - 100px);
  width: 100%;
  padding-top: 50px;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>