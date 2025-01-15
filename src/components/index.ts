// 管理所有的全局组件
import { App } from "vue";
import line from "./line.vue";
import SlideInContent from "./SlideInContent.vue";
import Zoom from "./Zoom.vue";
// 将全局组件封装到插件中
export default {
  install(Vue: App) {
    Vue.component("LINE", line);
    Vue.component("SlideInContent", SlideInContent);
    Vue.component("Zoom", Zoom);
  },
};
