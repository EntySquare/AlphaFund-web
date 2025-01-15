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
    image: "/src/assets/img/al1.png",
    name: "Rayne Steinberg",
    position: "Chief Executive Officer, & Co-Founder",
  },
  {
    image: "/src/assets/img/al2.png",
    name: "Jerald David",
    position: "President, Arca Labs",
  },
  {
    image: "/src/assets/img/al3.png",
    name: "Anthony Bufinsky",
    position: "Head of Growth, Arca Labs",
  },
  {
    image: "/src/assets/img/al4.png",
    name: "Michael Fleming",
    position: "Director of Operations, Arca Labs",
  },
  {
    image: "/src/assets/img/al5.png",
    name: "Blair Bingham",
    position: "Lead Analyst, Arca Labs",
  },
  {
    image: "/src/assets/img/al6.png",
    name: "Marcus Lee",
    position: "Head of Korea Operations",
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
  font-family: PingFang SC;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  color: #000;
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
    .itemimage {
      width: 270px;
      height: 270px;
      border-radius: 50%;
      margin-bottom: 30px;
    }
    .itemname {
      font-family: PingFang SC;
      font-size: 30px;
      font-weight: 600;
      line-height: 42px;
      text-align: center;
      color: #000000;
      margin-bottom: 22px;
    }
    .itemposition {
      max-width: 216px;
      font-family: PingFang SC;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      text-align: center;
      color: #414141;
    }
  }
}
</style>

