<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
const elementRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true; // 当元素进入视口时触发动画
      }
    },
    {
      threshold: 0.1, // 当元素 10% 可见时触发
    }
  );

  if (elementRef.value) observer.observe(elementRef.value);

  // 清理观察器
  onUnmounted(() => {
    if (elementRef.value) observer.unobserve(elementRef.value);
  });
});
</script>

<template>
  <div ref="elementRef" class="slide-up" :class="{ active: isVisible }">
    <slot></slot>
    <!-- 插槽内容 -->
  </div>
</template>

<style scoped lang="less">
.slide-up {
  width: 100%;
  opacity: 0; /* 初始透明度 */
  transform: translateY(130px); /* 初始位置为向下偏移 */
  transition: opacity 1s ease, transform 1s ease; /* 动画效果 */
}

.slide-up.active {
  opacity: 1; /* 滑动后完全可见 */
  transform: translateY(0); /* 滑动到原始位置 */
}
</style>
