<template>
  <div class="AlphaFund">
    <div class="container">
      <!-- AlphaFund Brilliance Corporation Section -->

      <div class="title">Advisory team</div>
      <div class="AlphaFund_Content">
        <div v-for="(member, index) in teamMembers" :key="index" class="item">
          <img :src="member.image" :alt="member.name" class="itemimage" />
          <div class="itemname">{{ member.name }}</div>
          <div class="itemposition">{{ member.position }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// Team Members
const teamMembers = ref([
  {
    image: "/src/assets/img/ad1.png",
    name: "이진섭",
    position: "Digital Asset Venture Capital Advisor",
 

  },
  {
    image: "/src/assets/img/ad2.png",
    name: "Sarah Thompson",
    position: "Wealth Management & Asset Allocation Consultant",
  },
  {
    image: "/src/assets/img/ad3.png",
    name: "Christopher Hughes",
    position: "AI & Technology Innovation Advisor",
  },
  {
    image: "/src/assets/img/ad4.png",
    name: "Maria Sanchez",
    position: "International Investment & Risk Management Consultant",
  },
 
]);
</script>

<style scoped lang="less">
.AlphaFund {
  padding: 0 120px;
  width: 100%;
}
.container {
  padding: 100px 0;
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
.AlphaFund_Content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  row-gap: 28px;
  .item {
    border-radius: 20px;
    border: 2px solid #eeeeee;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 30px 39px 30px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
    }
    .itemimage {
      width: 210px;
      height: 210px;
      border-radius: 50%;
      margin-bottom: 30px;
    }
    .itemname {
          max-width: 200px;

      font-family: "Poppins", sans-serif;
      font-size: 30px;
      font-weight: 600;
      line-height: 42px;
      text-align: center;
      color: #000000;
      margin-bottom: 22px;
    }
    .itemposition {
      max-width: 200px;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      text-align: center;
      color: #414141;
    }
  }
}

@media (max-width: 1420px) {
  .AlphaFund {
    padding: 0 100px;
  }
}
@media (max-width: 1380px) {
  .AlphaFund {
    padding: 0 60px;
  }
}
@media (max-width: 1288px) {
  .AlphaFund {
    padding: 0 50px;
    .AlphaFund_Content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  row-gap: 20px;
  .item {
    border-radius: 20px;
    border: 2px solid #eeeeee;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 25px 30px 25px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
    }
    .itemimage {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      margin-bottom: 30px;
    }
    .itemname {
          max-width: 170px;
      font-size: 26px;
      margin-bottom: 22px;
    }
    .itemposition {
      max-width: 170px;
      font-size: 18px;
      font-weight: 500;
    }
  }
}
  }
}
@media (max-width: 1096px) {
  .AlphaFund {

    .AlphaFund_Content {

  .item {
   flex: 0 0 calc(50% - 10px); /* 每个项占据一半的宽度，减去间距 */
   
    .itemname {
          max-width: 100%;
    }
    .itemposition {
      max-width: 100%;
    }
  }
}
  }
}
@media (max-width: 824px) {
  .AlphaFund {
    padding: 0 20px;
  }
  .container {
    padding: 50px 0;
    width: 100%;
  }
  .title {
    font-size: 25px;
    margin-bottom: 30px;
  }
  .AlphaFund_Content {
    gap: 14px;
    row-gap: 15px;
    .item {
      flex: 0 0 100% !important; /* 每个项占据一整行 */
      border-radius: 20px;
      width: 100%;

      padding: 20px 25px 30px 20px;
      .itemimage {
        width: 200px;
        height: 200px;
        margin-bottom: 0px;
      }
      .itemname {
        font-size: 16px;
        margin-bottom: 0px;
      }
      .itemposition {
        max-width: 100%;
        font-size: 14px;
      }
    }
  }
}
</style>

