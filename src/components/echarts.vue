<template>
  <div style="width: 100%; height: 100%;">
    <!-- 饼图容器 -->
    <v-chart :option="chartOptions" style="height: 900px; width: 900px;"></v-chart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { use } from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';

// 注册 ECharts 需要的组件
use([PieChart, TooltipComponent, CanvasRenderer]);

export default defineComponent({
  name: 'PieChartComponent',
  components: {
    VChart,
  },
  data() {
    return {
      chartOptions: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}:  ({d}%)',
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: [
              { value: 40, name: 'Artificial Intelligence (AI)' },
              { value: 15, name: 'Clean Energy' },
              { value: 15, name: 'Educational Technology' },
              { value: 15, name: 'Blockchain' },
              { value: 15, name: 'Others' },
            ],
            color: ['#FFB300', '#FFA500', '#FFCC00', '#FF8C00', '#FFD700'], // 黄色、橙色系的颜色
            label: {
              show: false, // 去除饼图上的文字标签
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
    };
  },
});
</script>

<style scoped>
/* 你可以根据需求调整饼图容器的样式 */
</style>
