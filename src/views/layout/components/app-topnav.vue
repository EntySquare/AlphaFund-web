<template>
  <div class="navbar" :class="{ hidden: isHidden }">
    <div class="navbar-inner">
      <div class="container1">
        <div class="left-side">
          <router-link to="/">
            <div class="logo">
              <img src="@/assets/img/logo.svg" alt="BeWater" />
            </div>
          </router-link>

          <router-link to="/" class="nav-items">
            <span
              v-for="item in navItems"
              :key="item"
              class="nav-item Fon24-500"
            >
              {{ item }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
// 导航项列表
const navItems = ref([
  "Home",
  "About Us",
  "Investment Portfolio",
  "Social Impact",
  "Contact Us",
]);

import { useWindowSize } from "@/utils/useWindowSize";

//动态获取窗口大小
const { windowWidth } = useWindowSize();

const isHidden = ref(false); // 导航栏是否隐藏
let lastScrollY = window.scrollY; // 上一次滚动位置

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // 页面下滑且滚动距离超过80px时隐藏导航栏
    isHidden.value = true;
  } else {
    // 页面上滑时显示导航栏
    isHidden.value = false;
  }
  lastScrollY = currentScrollY;
};

// 添加和移除滚动事件监听
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="less">
.Fon24-500 {
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: center;
  color: #000000;
}
.navbar {
  position: fixed;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #f6f6f6;
  top: 0;
  left: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &.hidden {
    transform: translateY(-100%);
    opacity: 0;
  }
}

.navbar-inner {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  padding: 0px 120px 0 120px;
}
.container1 {
  width: 100%;
  display: flex;
  align-items: center;

  .left-side {
    gap: 118px;
    display: flex;
    align-items: center;
    .logo {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav-items {
      display: flex;
      align-items: center;
      gap: 118px;
    }
  }
  .right-side {
    display: flex;
    align-items: center;
    gap: 25px;
    .Language {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .line {
      width: 1px;
      height: 15px;
      background: #8a8a8a;
    }
    .right_button {
      display: flex;
      align-items: center;
      gap: 20px;
      .button {
        padding: 8px 12px;
        border: 1px solid #000000;
        border-radius: 2px;
      }
    }
  }
}
</style>
    