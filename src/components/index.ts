// 管理所有的全局组件
import { App } from "vue";
import line from "./line.vue";
import SlideInContent from "./SlideInContent.vue";
import Zoom from "./Zoom.vue";
import IndustryNews from "./IndustryNews.vue";
import AlphaFund from "./AlphaFund.vue";
import Media from "./Media.vue";
import Market from "./Market.vue";
import Social from "./Social.vue";
import AboutUs from "./AboutUs.vue";
// 将全局组件封装到插件中
export default {
  install(Vue: App) {
    Vue.component("LINE", line);
    Vue.component("SlideInContent", SlideInContent);
    Vue.component("Zoom", Zoom);
    Vue.component("IndustryNews", IndustryNews);
    Vue.component("AlphaFund", AlphaFund);
    Vue.component("Media", Media);
    Vue.component("Market", Market);
    Vue.component("Social", Social);
    Vue.component("AboutUs", AboutUs);

  },
};
