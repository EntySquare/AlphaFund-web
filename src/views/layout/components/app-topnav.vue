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

          <router-link to="/" class="nav-items" v-if="windowWidth > 824">
            <span
              v-for="item in navItems"
              :key="item"
              class="nav-item Fon24-500"
            >
              {{ item }}
            </span>
          </router-link>
          <div v-else @click="handleClick">
            <svg
              t="1737026939565"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2373"
              width="32"
              height="32"
            >
              <path
                d="M920.1 291.8h-820c-18.8 0-34-15.2-34-34s15.2-34 34-34h820c18.8 0 34 15.2 34 34s-15.2 34-34 34zM549.1 547.2h-449c-18.8 0-34-15.2-34-34s15.2-34 34-34h449c18.8 0 34 15.2 34 34s-15.2 34-34 34zM783.4 812.4H100.1c-18.8 0-34-15.2-34-34s15.2-34 34-34h683.3c18.8 0 34 15.2 34 34s-15.2 34-34 34z"
                fill="#000"
                p-id="2374"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div
      class="drawer"
      :class="{ open: isDrawerOpen }"
      v-if="windowWidth <= 824"
    >
      <div class="drawerTop">
        <div class="drawerToplogo">
          <img src="@/assets/img/logo.svg" alt="BeWater" />
        </div>
        <div @click="isDrawerOpen = false">
          <svg
            t="1737095890726"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4853"
            width="32"
            height="32"
          >
            <path
              d="M792.576 177.1264l54.2976 54.272L566.2976 512 846.848 792.576l-54.272 54.2976L512 566.2976 231.424 846.848l-54.2976-54.272L457.7024 512 177.1264 231.424l54.272-54.2976L512 457.7024 792.576 177.1264z"
              p-id="4854"
            ></path>
          </svg>
        </div>
      </div>
      <div class="drawer-content1">
        <ul v-for="(item, index) in navItems" :key="item">
          <li :style="getItemStyle(index)" class="drawer-item">
            {{ item }}
          </li>
          <div class="line" v-if="index < navItems.length - 1"></div>
        </ul>
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

// 控制抽屉状态
const isDrawerOpen = ref(false); // 抽屉是否打开
const menuState = ref(0); // 菜单状态：0=，1—，2X，3>

// 切换按钮状态
const handleClick = () => {
  isDrawerOpen.value = true; // 打开抽屉
};

// 抽屉中的内容

// 动态计算动画延迟
const getItemStyle = (index: number) => {
  return {
    transitionDelay: `${index * 0.1}s`,
  };
};
</script>

<style scoped lang="less">
.Fon24-500 {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
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
  height: 80px;
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

  padding: 0px 120px;
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
@media (max-width: 1420px) {
  .navbar-inner {
    padding: 0px 100px;
  }
}
@media (max-width: 1380px) {
  .navbar-inner {
    padding: 0px 60px;
    .container1 {
      .left-side {
        gap: 100px;
      }
      .nav-items {
        gap: 110px;
      }
    }
  }
}
@media (max-width: 1174px) {
  .navbar-inner {
    .container1 {
      .left-side {
        gap: 70px;
      }
      .nav-items {
        gap: 80px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .navbar-inner {
    .container1 {
      .left-side {
        gap: 40px;
      }
      .nav-items {
        gap: 40px;
      }
    }
  }
}
@media (max-width: 824px) {
  .navbar-inner {
    padding: 0 20px;

    .container1 {
      .left-side {
        width: 100%;
        justify-content: space-between;
      }
    }
  }
}

/* 抽屉样式 */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  opacity: 1;
  display: flex;
  flex-direction: column;

  right: -100%;
  height: 100%;
  transition: right 0.3s ease-in-out;

  transition: transform 0.3s ease;

  .drawerTop {
    display: flex;
    padding: 0px 14px;
    padding-top: 2px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0.5px 6px rgba(87, 85, 85, 0.1);
    .drawerToplogo {
      width: 50px;
    }
  }
}
.drawer-content1 {
  padding: 24px 24px;
  box-shadow: 0 0.5px 6px rgba(87, 85, 85, 0.1);

  li {
    color: #000;
    &:hover {
      color: #00ffff;
    }
  }
  font-family: "Basement Grotesque Bold", "Basement Grotesque Bold Placeholder",
    sans-serif;
  font-size: 16px;

  text-align: left;
  text-transform: uppercase;
}

.logoMobile {
  width: 44px;
  height: 32px;
}

.drawer.open {
  right: 0;
}

.drawer-item {
  margin: 10px 0;
  opacity: 0;
  transform: translateX(40px) translateY(-40px);

  transition: all 0.3s ease-in-out;
}

.drawer.open .drawer-item {
  opacity: 1;
  transform: translateX(0) translateY(0);
}

.line {
  background-color: rgba(42, 42, 42, 0.11);
  transform: none;
  transform-origin: 50% 50% 0px;
  height: 1px;
  width: 100%;
  margin: 16px 0;
  opacity: 0;
  transform: translateX(40px) translateY(-40px);

  transition: all 0.3s ease-in-out;
}
.drawer.open .line {
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
    

<!--<template>
 
  <div class="navbar"  :class="{ hidden: isHidden }">
    <div class="navbar-inner">
      <div class="container1">
        <div class="left-side">
          <router-link to="/">
            <div class="logo">
              <img src="@/assets/img/logo.svg" alt="BeWater" />
            </div>
          </router-link>

          <router-link to="/" class="nav-items" v-if="windowWidth > 824">
            <span
              v-for="item in navItems"
              :key="item"
              class="nav-item Fon24-500"
            >
              {{ item }}
            </span>
          </router-link>
          <div v-else @click="handleClick">
            <svg
              t="1737026939565"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2373"
              width="32"
              height="32"
            >
              <path
                d="M920.1 291.8h-820c-18.8 0-34-15.2-34-34s15.2-34 34-34h820c18.8 0 34 15.2 34 34s-15.2 34-34 34zM549.1 547.2h-449c-18.8 0-34-15.2-34-34s15.2-34 34-34h449c18.8 0 34 15.2 34 34s-15.2 34-34 34zM783.4 812.4H100.1c-18.8 0-34-15.2-34-34s15.2-34 34-34h683.3c18.8 0 34 15.2 34 34s-15.2 34-34 34z"
                fill="#000"
                p-id="2374"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div
      class="drawer"
      :class="{ open: isDrawerOpen }"
      v-if="windowWidth <= 824"
    >
      <div class="drawerTop">
        <div class="drawerToplogo">
          <img src="@/assets/img/logo.svg" alt="BeWater" />
        </div>
        <div @click="isDrawerOpen = false">
          <svg
            t="1737095890726"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4853"
            width="32"
            height="32"
          >
            <path
              d="M792.576 177.1264l54.2976 54.272L566.2976 512 846.848 792.576l-54.272 54.2976L512 566.2976 231.424 846.848l-54.2976-54.272L457.7024 512 177.1264 231.424l54.272-54.2976L512 457.7024 792.576 177.1264z"
              p-id="4854"
            ></path>
          </svg>
        </div>
      </div>
      <div class="drawer-content1">
        <ul v-for="(item, index) in navItems" :key="item">
          <li :style="getItemStyle(index)" class="drawer-item">
            {{ item }}
          </li>
          <div class="line" v-if="index < navItems.length - 1"></div>
        </ul>
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

// 控制抽屉状态
const isDrawerOpen = ref(false); // 抽屉是否打开
const menuState = ref(0); // 菜单状态：0=，1—，2X，3>

// 切换按钮状态
const handleClick = () => {
  isDrawerOpen.value = true; // 打开抽屉
};

// 抽屉中的内容

// 动态计算动画延迟
const getItemStyle = (index: number) => {
  return {
    transitionDelay: `${index * 0.1}s`,
  };
};
</script>

<style scoped lang="less">
.Fon24-500 {
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: #333c4e;
  font-family: "Poppins", sans-serif;
  text-align: center;
  display: block;
  line-height: 1.923;
  position: relative;
}
.navbar {
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
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

  padding: 0px 120px;
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
      width: 80px;
      height: 80px;
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
      gap: 100px;
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
@media (max-width: 1420px) {
  .navbar-inner {
    padding: 0px 100px;
  }
}
@media (max-width: 1380px) {
  .navbar-inner {
    padding: 0px 60px;
    .container1 {
      .left-side {
        gap: 100px;
      }
      .nav-items {
        gap: 110px;
      }
    }
  }
}
@media (max-width: 1154px) {
  .navbar-inner {
    .container1 {
      .left-side {
        gap: 70px;
      }
      .nav-items {
        gap: 80px;
      }
    }
  }
}
@media (max-width: 1002px) {
  .navbar-inner {
    .container1 {
      .left-side {
        gap: 40px;
      }
      .nav-items {
        gap: 40px;
      }
    }
  }
}
@media (max-width: 824px) {
  .navbar-inner {
    padding: 0 20px;

    .container1 {
      .left-side {
        width: 100%;
        justify-content: space-between;
      }
    }
  }
}

/* 抽屉样式 */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  opacity: 1;
  display: flex;
  flex-direction: column;

  right: -100%;
  height: 100%;
  transition: right 0.3s ease-in-out;

  transition: transform 0.3s ease;

  .drawerTop {
    display: flex;
    padding: 0px 14px;
    padding-top: 2px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0.5px 6px rgba(87, 85, 85, 0.1);
    .drawerToplogo {
      width: 50px;
    }
  }
}
.drawer-content1 {
  padding: 24px 24px;
  box-shadow: 0 0.5px 6px rgba(87, 85, 85, 0.1);

  li {
    color: #000;
    &:hover {
      color: #00ffff;
    }
  }
  font-family: "Basement Grotesque Bold", "Basement Grotesque Bold Placeholder",
    sans-serif;
  font-size: 16px;

  text-align: left;
  text-transform: uppercase;
}

.logoMobile {
  width: 44px;
  height: 32px;
}

.drawer.open {
  right: 0;
}

.drawer-item {
  margin: 10px 0;
  opacity: 0;
  transform: translateX(40px) translateY(-40px);

  transition: all 0.3s ease-in-out;
}

.drawer.open .drawer-item {
  opacity: 1;
  transform: translateX(0) translateY(0);
}

.line {
  background-color: rgba(42, 42, 42, 0.11);
  transform: none;
  transform-origin: 50% 50% 0px;
  height: 1px;
  width: 100%;
  margin: 16px 0;
  opacity: 0;
  transform: translateX(40px) translateY(-40px);

  transition: all 0.3s ease-in-out;
}
.drawer.open .line {
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>-->
