<script lang="ts" setup>
import { ref, defineProps } from "vue";

// 定义 props
const props = defineProps<{
  lineWidth?: string; // 接受传入的线条宽度（百分比或具体数值）
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
    <div class="image-container">
      <slot name="image"></slot>

      <!-- 底部线条 -->
      <div
        class="line"
        :class="{ active: isHovered }"
        :style="{ width: props.lineWidth || '100%' }"
      ></div>
    </div>
    <!-- 文字区域 -->
    <div class="text-container">
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
  position: relative;
  width: 100%;
  overflow: hidden;
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.4);
      border-radius: 4px;

  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    background-color: #c0d8fc; /* 线条颜色 */
    transform: scaleX(0); /* 初始状态 */
    transform-origin: bottom right;
    transition: transform 0.6s ease-out; /* 动画效果 */
  }

  .line.active {
    transform: scaleX(1); /* 放大线条 */
    transform-origin: bottom left;
  }
}
</style>
