<template>
  <div class="AlphaFund">
    <div class="container">
      <!-- AlphaFund Brilliance Corporation Section -->

      <div class="title">AlphaFund Brilliance Corporation</div>
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
    image: "/src/assets/img/al.png",
    name: "Alexander Wilson",
    position: "Founder & CEO",
 

  },
  {
    image: "/src/assets/img/al2.png",
    name: "Klaus Steiner",
    position: "CIO-Chief Investment Officer",
  },
  {
    image: "/src/assets/img/al3.png",
    name: "Pierre Laurent",
    position: "CTO",
  },
  {
    image: "/src/assets/img/al4.png",
    name: "Sophia Martinez",
    position: "COO",
  },
  {
    image: "/src/assets/img/al5.png",
    name: "Matteo Rossi",
    position: "Director of European Operations",
  },
  {
    image: "/src/assets/img/al6.png",
    name: "Amelia Zhang",
    position: "Director of CSR & Philanthropy",
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
font-size: 34px;  font-weight: 500;
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
  gap: 28px;
  row-gap: 30px;
  .item {
    border-radius: 26px;
    border: 2px solid #eeeeee;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 55px 50px 59px 50px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
    }
    .itemimage {
      width: 270px;
      height: 270px;
      border-radius: 50%;
      margin-bottom: 30px;
    }
    .itemname {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 600;
      line-height: 42px;
      text-align: center;
      color: #000000;
      margin-bottom: 22px;
    }
    .itemposition {
      max-width: 216px;
      font-family: "Poppins", sans-serif;
      font-size: 14px;
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
      border-radius: 20px;
      width: 100%;

      padding: 20px 25px 30px 20px;
      .itemimage {
        width: 200px;
        height: 200px;
        margin-bottom: 0px;
      }
      .itemname {
        font-size: 14px;
        margin-bottom: 0px;
      }
      .itemposition {
        max-width: 100%;
        font-size: 12px;
      }
    }
  }
}
</style>

