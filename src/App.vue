<template>
  <div id="app">
    <!-- 全屏背景切换 -->
    <FullScreenBackground :backgrounds="backgrounds" />

    <!-- 页面内容 -->
    <div class="content">
      <section v-for="(section, index) in sections" :key="index">
        <h1>{{ section.title }}</h1>
        <p>{{ section.description }}</p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FullScreenBackground from "./components/FullScreenBackground.vue";

export default defineComponent({
  components: { FullScreenBackground },
  data() {
    return {
      // 背景图片/动画的列表
      backgrounds: [
        { type: "image", src: "/assets/bg1.jpg" },
        { type: "image", src: "/assets/bg2.jpg" },
        { type: "threejs" }, // 使用 Three.js 动画背景
      ],
      // 页面内容段落
      sections: [
        { title: "Section 1", description: "Welcome to the first section!" },
        { title: "Section 2", description: "Scroll to explore more." },
        { title: "Section 3", description: "Enjoy the interactive design." },
      ],
    };
  },
});
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}
.content {
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 20px;
  color: white;
}
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
