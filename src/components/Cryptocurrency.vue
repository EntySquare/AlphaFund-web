<template>
  <div class="Cryptocurrency">
    <div class="container">
      <!--  Brilliance Corporation Section -->

      <div class="title">Cryptocurrency Venture Portfolio</div>
      <div class="Cryptocurrency_Content">
    <el-table :data="cryptocurrencyData"  style="width: 100%;" :header-cell-style="{background:'#f4f3fb',color:'#262628',height: '80px',  fontSize: '14px'}">
      <el-table-column prop="token" label="Token" align="center">
        <!-- <template #default="{ row }">
          <div class="project-name">
            <span>{{ row.project }}</span>
            <span class="token">({{ row.token }})</span>
          </div>
        </template> -->
      </el-table-column>
      <el-table-column prop="project" label="Crypto projects" align="center" />
      <el-table-column prop="category" label="Segmentation" align="center" />
      <el-table-column prop="lowestPrice" label="lowest price" align="center" />
      <el-table-column prop="highestPrice" label="highest price" align="center" />
      <el-table-column prop="growth" label="Increase" align="center" />
      <el-table-column prop="marketCap" label="Market value" align="center" />
      <el-table-column prop="profitRate" label="Yield" align="center" />
    </el-table>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
import { ref } from "vue";

// Team Members
const cryptocurrencyData = [
  {
    token: "PEPE",
    project: "PEPE",
    category: "memes",
    lowestPrice: 0.00000006,
    highestPrice: 0.0000283,
    growth: "1602999%",
    marketCap: "69.8 billion US dollars",
    profitRate: "/",
  },
  {
    token: "MNT",
    project: "Mantle",
    category: "Layer2",
    lowestPrice: 0.30,
    highestPrice: 1.50,
    growth: "339.32%",
    marketCap: "36.8 billion US dollars",
    profitRate: "/",
  },
  {
    token: "AAVE",
    project: "Aave",
    category: "DeFi",
    lowestPrice: 25.95,
    highestPrice: 706.32,
    growth: "217%",
    marketCap: "57.2 billion US dollars",
    profitRate: "/",
  },
  {
    token: "NEAR",
    project: "NEAR Protocol",
    category: "Public chain",
    lowestPrice: 0.52,
    highestPrice: 20.53,
    growth: "137%",
    marketCap: "56.3 billion US dollars",
    profitRate: "/",
  },
  {
    token: "APT",
    project: "Aptos",
    category: "Public chain",
    lowestPrice: 3.06,
    highestPrice: 28,
    growth: "774.63%",
    marketCap: "35.7 billion US dollars",
    profitRate: "/",
  },
  {
    token: "FIL",
    project: "Filecoin",
    category: "DePIN",
    lowestPrice: 2.46,
    highestPrice: 237.61,
    growth: "960%",
    marketCap: "32.1 billion US dollars",
    profitRate: "/",
  },
  {
    token: "BIT",
    project: "BitDAO",
    category: "DAO",
    lowestPrice: 0.26,
    highestPrice: 4.76,
    growth: "180%",
    marketCap: "20 billion US dollars",
    profitRate: "/",
  },
  {
    token: "INJ",
    project: "Injective Protocol",
    category: "DeFi",
    lowestPrice: 0.65,
    highestPrice: 52.87,
    growth: "/",
    marketCap: "21 billion US dollars",
    profitRate: "/",
  },
  {
    token: "OP",
    project: "Optimism",
    category: "Layer2",
    lowestPrice: 0.40,
    highestPrice: 4.79,
    growth: "/",
    marketCap: "18.2 billion US dollars",
    profitRate: "/",
  },
  {
    token: "SEI",
    project: "Sei",
    category: "Public chain",
    lowestPrice: 0.09,
    highestPrice: 1.17,
    growth: "/",
    marketCap: "9.7 billion US dollars",
    profitRate: "/",
  },
  {
    token: "ENS",
    project: "Ethereum Name Service",
    category: "domain name",
    lowestPrice: 6.66,
    highestPrice: 85.79,
    growth: "/",
    marketCap: "7.5 billion US dollars",
    profitRate: "/",
  },
];

</script>
  
  <style scoped lang="less">
.Cryptocurrency {
  padding: 0 120px;
  width: 100%;
}
.container {
  padding: 100px 0;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
}
.title {
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  color: #ff9633;
  margin-bottom: 100px;
}
.Cryptocurrency_Content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  row-gap: 80px;

}

@media (max-width: 1420px) {
  .Cryptocurrency {
    padding: 0 100px;
  }
}
@media (max-width: 1380px) {
  .Cryptocurrency {
    padding: 0 60px;
  }
}
@media (max-width: 824px) {
  .Cryptocurrency {
    padding: 0 20px;
  }
  .container {
    padding: 50px 0;
  }
  .title {
    font-size: 25px;
    margin-bottom: 30px;
  }
  .Cryptocurrency_Content {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
    row-gap: 20px;
   
  }
}

.Cryptocurrency_Content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  row-gap: 80px;

  // 修改 el-table 样式
  ::v-deep(.el-table) {
  border: 1px solid #e9e9e9;
    border-radius: 12px; // 表格的圆角
  }

  // 表格边框样式
  ::v-deep(.el-table__cell) {
    border-color: #e9e9e9; // 自定义单元格边框颜色
  }

  // 表格行样式
  ::v-deep(.el-table__row) {
  height: 65px;
  color: #353535;
  font-size: 14px;
    &:hover {
      background-color: #f5faff; // 行悬停的背景色
    }
  }
}


</style>
  
