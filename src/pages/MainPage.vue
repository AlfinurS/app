<template>
  <section class="page">
    <h2 class="page__title">Ray Driving Theory</h2>

    <iconCrown />
    <iconFire />
    <p class="page__text">13</p>
    <div class="page__text-wrapp">
      <p class="page__header">Learning</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconCrown from "@/components/icons/iconCrown.vue";
import iconFire from "@/components/icons/iconFire.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    iconCrown,
    iconFire,
  },
});
</script>

<style lang="scss" scoped>
.page {
  &__header {
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    color: #2c2d2e;
    text-align: center;
    margin-bottom: 16px;
    margin-top: 16px;
  }
  &__title {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    color: #2c2d2e;
    text-align: center;
    margin-bottom: 16px;
    margin-top: 16px;
  }
  &__text {
    color: #c1c2c7;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
    max-width: 205px;
    &-notFound {
      margin-top: 56px;
    }
    &-wrapp {
      display: flex;
      justify-content: center;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
    @media (min-width: 748px) {
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    &-wrapper {
      margin-bottom: 40px;
    }
  }
  &__item {
    display: flex;
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    border: 1px solid #f4f5f5;
    background: white;
    &-wrapp {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &-btn {
      cursor: pointer;
    }
    &-avatar {
      border-radius: 50%;
      margin-right: 20px;
      width: 50px;
      height: 50px;
    }
    &-name {
      color: #1d1d1d;
      font-size: 17px;
      font-weight: 700;
      line-height: normal;
      margin-right: 8px;
    }
  }
  &__block-bottom {
    position: fixed;
    box-sizing: border-box;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    max-width: 1200px;
    border-radius: 10px 10px 0px 0px;
    background: #fff;
    box-shadow: 0px 0px 13px 0px rgba(22, 22, 23, 0.26);
    padding-left: 25px;
    padding-right: 25px;
    &-compensator {
      height: 80px;
    }
  }
  &__button {
    margin-bottom: 10px;
  }
  &__button-bottom {
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 93px;
  }
}
</style>
