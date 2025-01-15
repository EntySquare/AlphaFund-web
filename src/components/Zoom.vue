<script lang="ts" setup>
import { ref, defineProps } from "vue";

// 定义 props 接收图片路径和大小
const props = defineProps<{
  imagePath: string; // 图片路径
  imageWidth?: string; // 图片宽度 (可选)
  imageHeight?: string; // 图片高度 (可选)
}>();

// 控制鼠标悬停状态
const isHovered = ref(false);

// 处理鼠标移入事件
const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<template>
  <div
    class="hover-zone"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <!-- 图片区域 -->
    <div class="image-container" :class="{ active: isHovered }">
      <img
        :src="props.imagePath"
        :style="{
          width: props.imageWidth || '100%',
          height: props.imageHeight || 'auto',
        }"
        alt="dynamic-image"
      />
    </div>
    <!-- 文字区域 -->
    <div class="text-container" :class="{ active: isHovered }">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.hover-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer; /* 鼠标悬停时的指针样式 */
}

.image-container {
  // width: 100%;
  background: transparent;
  position: relative;
  overflow: hidden;
  transition: transform 0.8s ease; /* 平滑放大动画 */

  img {
    display: block;
    object-fit: cover; /* 确保图片适配容器 */
    transition: transform 0.8s ease; /* 图片平滑放大动画 */
  }

  &.active img {
    transform: scale(1.2); /* 鼠标悬停时放大 */
  }
}
</style>
