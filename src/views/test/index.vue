<script setup lang='ts' name="HomeView"></script>
<template>
  <div class="home_view">
    <div class="container">
      <SlideInContent>
        <h1>Welcome to Carnegie</h1>
        <p>This is a sliding animation example.</p>
        <LINE lineWidth="810px">
          <template #image>
            <img
              src=" https://media.carnegie.org/filer_public_thumbnails/filer_public/27/28/2728866e-a5c0-452a-b898-2d5f3e03c952/call-for-submissions-grants-of-up-to-500000-will-support-public-libraries-nationwide.jpg__810x540_q85_crop_subsampling-2_upscale.jpg"
              alt=""
            />
          </template>
          <!-- 文字插槽 -->
          <template #text>
            <h1 style="font-size: 40px; color: red">
              Inside a High-Poverty School District’s Exceptional Postpandemic
              Rebound
            </h1>
          </template>
        </LINE>
      </SlideInContent>

      <SlideInContent>
        <h2>Another Section</h2>
        <p>This is the second content block.</p>
      </SlideInContent>
      <SlideInContent>
        <Zoom
          imagePath=" https://media.carnegie.org/filer_public_thumbnails/filer_public/27/28/2728866e-a5c0-452a-b898-2d5f3e03c952/call-for-submissions-grants-of-up-to-500000-will-support-public-libraries-nationwide.jpg__810x540_q85_crop_subsampling-2_upscale.jpg"
          imageWidth="880px"
          imageHeight="auto"
        >
          <!-- 文字插槽 -->
          <template #text>
            <h1 style="font-size: 40px; color: red">
              Inside a High-Poverty School District’s Exceptional Postpandemic
              Rebound
            </h1>
          </template></Zoom
        >
      </SlideInContent>
      <div style="height: 500px; width: 800px">
        <LINE
          imageUrl="https://media.carnegie.org/filer_public_thumbnails/filer_public/27/28/2728866e-a5c0-452a-b898-2d5f3e03c952/call-for-submissions-grants-of-up-to-500000-will-support-public-libraries-nationwide.jpg__810x540_q85_crop_subsampling-2_upscale.jpg"
          width="100%
          "
          height="300px"
        />
        <!-- <BBBOX>
          <div
            style="
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            通用组件 不需要导入直接使用 已经全局注册过了
          </div>
        </BBBOX> -->
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.home_view {
  background: black;
  // min-height: calc(100vh - 80px - 100px);

  .container {
    padding: 60px 0 40px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}
</style>