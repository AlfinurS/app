<template>
  <section class="page"></section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Page",
  components: {},
});
</script>

<style lang="scss" scoped>
.page {
  &__bar {
    display: flex;
    flex-direction: row;
    padding-top: 63px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  &__header {
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    color: #2c2d2e;
  }
  &__title {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    color: #2c2d2e;
    text-align: center;
  }
  &__text {
    color: #2c2d2e;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
    &-second {
      color: #87898f;
    }
    &-wrapp {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      margin-right: 75px;
    }
  }
  &__icon-text {
    color: #2c2d2e;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
  }
  &__hero {
    width: 100%;
    border-radius: 20px;
    border: 1px solid #f3f3f3;
    background-color: #fff;
    padding: 24px;
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 8px;
    &-wrapp {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  &__card {
    display: flex;
    align-items: center;
    padding: 16px 12px;
    border-radius: 20px;
    border: 1px solid #f3f3f3;
    background-color: #fff;
    &-name {
      color: rgba(0, 0, 0, 0.87);
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      margin-left: 8px;
    }
    &-wrapp {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
    &-width {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-wrapp {
      margin-top: 24px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-bottom: 92px;
    }
  }
  &__icon-wrapp {
    display: flex;
    flex-direction: row;
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
}
.icon__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  &--crown {
    padding: 4px 6px;
    margin-right: 8px;
  }
  &--fire {
    padding-right: 8px;
    padding-left: 8px;
  }
}
</style>
