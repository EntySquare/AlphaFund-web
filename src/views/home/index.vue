<script setup lang='ts' name="HomeView">

</script>
<template>
  <div class="home_view">
    <div class="container">
      <SlideInContent> <AboutUs /></SlideInContent>
      <SlideInContent> <Market /></SlideInContent>
      <SlideInContent> <Social /></SlideInContent>
      <SlideInContent> <Media /></SlideInContent>
      <SlideInContent> <AlphaFund /></SlideInContent>
      <SlideInContent> <IndustryNews /></SlideInContent>
    </div>
  </div>
</template>
<style scoped lang='less'>
.home_view {
  background-color: #f6f6f6; // min-height: calc(100vh - 80px - 100px);
  width: 100%;
  .container {
    width: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>