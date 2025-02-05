<template>
  <div class="Cryptocurrency">
    <div class="container">
      <!--  Brilliance Corporation Section -->

      <div class="title">Invest</div>
        <div class="text">We invest in iconic founders from the early days of cryptocurrency and beyond, in the form of
        equity or tokens.</div>
      <div class="Cryptocurrency_Content">
        <div class="contentItem" v-for="item in cryptocurrencyData">
          <div class="itemImg"><img :src="item.img" alt="" /></div>
          <div class="itemTitle">{{ item.project }}</div>
          <el-popover
            placement="bottom"
            :width="280"
            trigger="hover"
            :content="item.text"
          >
            <template #reference>
              <div class="itemText">
                {{ item.text }}
              </div>
            </template>
          </el-popover>
        </div>
        <!-- <el-table
          :data="cryptocurrencyData"
          style="width: 100%"
          :header-cell-style="{
            background: '#f4f3fb',
            color: '#262628',
            height: '80px',
            fontSize: '14px',
          }"
        >
          <el-table-column prop="token" label="Token" align="center">
             <template #default="{ row }">
          <div class="project-name">
            <span>{{ row.project }}</span>
            <span class="token">({{ row.token }})</span>
          </div>
        </template> 
          </el-table-column>
          <el-table-column
            prop="project"
            label="Crypto projects"
            align="center"
          />
          <el-table-column
            prop="category"
            label="Segmentation"
            align="center"
          />
          <el-table-column
            prop="lowestPrice"
            label="lowest price"
            align="center"
          />
          <el-table-column
            prop="highestPrice"
            label="highest price"
            align="center"
          />
          <el-table-column prop="growth" label="Increase" align="center" />
          <el-table-column
            prop="marketCap"
            label="Market value"
            align="center"
          />
          <el-table-column prop="profitRate" label="Yield" align="center" />
        </el-table> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { text } from "stream/consumers"
import { ref } from "vue"

// Team Members
const cryptocurrencyData = [
  {
    project: "PEPE",
    img: "http://www.alphafound.cc/assets/img/cr1.png",
    text: "$PEPE is a meme coin with no presale, zero tax, LP burn, and contract renouncement.",
  },
  {
    project: "Mantle",
    img: "http://www.alphafound.cc/assets/img/cr2.png",
    text: "Mantle Network uses Ethereum Roll-up technology, supported by the Mantle Vault. The product and roadmap are fully governed by token holders. The Mantle token is the unified token used for products, governance, and the vault.",
  },
  {
    project: "Aave",
    img: "http://www.alphafound.cc/assets/img/cr3.png",
    text: "Aave converted its platform token LEND to AAVE at a ratio of 100:1 on October 3, 2020 (block height 10978863). Aave is an open-source decentralized lending protocol that provides users with deposit and borrowing services.",
  },
  {
    project: "NEAR Protocol",
    img: "http://www.alphafound.cc/assets/img/cr4.png",
    text: "NEAR Protocol is a highly scalable base protocol designed to support DApp operations quickly on mobile devices. NEAR Protocol allows developers to build mobile blockchain DApps and run them on users' native devices while providing developers with important information about DApps.",
  },
  {
    project: "Aptos",
    img: "http://www.alphafound.cc/assets/img/cr5.png",
    text: "Aptos is an independent high-performance PoS Layer 1 project focused on providing the world's most secure and scalable Layer 1 blockchain.",
  },
  {
    project: "Filecoin",
    img: "http://www.alphafound.cc/assets/img/cr6.png",
    text: "Filecoin is a token on IPFS, and Filecoin rewards miners by contributing idle hard drives.",
  },
  {
    project: "BitDAO",
    img: "http://www.alphafound.cc/assets/img/cr7.png",
    text: "BitDAO is a new DAO supported by Peter Thiel, Founders Fund, Pantera, Dragonfly, Spartan, Bybit, and others.",
  },
  {
    project: "Injective Protocol",
    img: "http://www.alphafound.cc/assets/img/cr8.png",
    text: "Injective Protocol is a layer-2 decentralized exchange protocol that enables decentralized cross-chain derivatives trading, unlocking the full potential of borderless decentralized finance.",
  },
  {
    project: "Optimism",
    img: "http://www.alphafound.cc/assets/img/cr9.png",
    text: "Optimism is a low-cost, lightning-fast Ethereum Layer 2 blockchain. The Optimism ecosystem provides an overview of applications and integrations in the ecosystem.",
  },
  {
    project: "Sei",
    img: "http://www.alphafound.cc/assets/img/cr10.png",
    text: "Sei is the first Layer 1 blockchain optimized for digital asset trading. SEI is the native token of the project.",
  },
  {
    project: "Ethereum Name Service",
    img: "http://www.alphafound.cc/assets/img/cr11.png",
    text: "Ethereum Name Service (ENS) is a distributed, open, and scalable naming system based on the Ethereum blockchain.",
  },
  {
    project: "Render",
    img: "http://www.alphafound.cc/assets/img/cr12.png",
    text: "The RNDR network is a peer-to-peer GPU computing network that connects creators in need of extra computing power to render scenes with providers who receive RNDR tokens for their GPU capabilities.",
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
 font-size: 34px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  color: #ff9633;
  margin-bottom: 15px;
}
.text{
text-align: center;
color: #353535;
font-size: 14px;
  margin-bottom: 100px;
}
.Cryptocurrency_Content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  row-gap: 50px;
  .contentItem {
    width: calc(18%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .itemImg {
      width: 30px;
      height: 30px;
    }
    .itemTitle {
      color: #000;
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      font-weight: 500;
      padding: 14px 0;
text-align: center;    }
    .itemText {
text-align: center;      color: #353535;

      font-family: "Poppins", sans-serif;
      font-size: 14px;
      letter-spacing: 0.5px; /* 控制字母之间的水平间距 */
      line-height: 20px;

       display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示两行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* 超出部分显示省略号 */
    }
  }
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
  }
  .text{
    margin-bottom: 30px;

}
  .Cryptocurrency_Content {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
    row-gap: 20px;
    .contentItem{
    width: 100%;}
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
