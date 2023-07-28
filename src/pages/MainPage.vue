<template>
  <section class="page">
    <div class="page__bar">
      <h2 class="page__title">Ray Driving Theory</h2>
      <div class="page__icon-wrapp">
        <div class="icon__wrapper icon__wrapper--crown">
          <iconCrown />
        </div>
        <div class="icon__wrapper icon__wrapper--fire">
          <iconFire />
          <span class="page__icon-text">13</span>
        </div>
      </div>
    </div>

    <div class="page__hero">
      <div class="page__hero-wrapp">
        <iconCap />
        <div class="page__text-wrapp">
          <span class="page__header">Learning</span>
          <span class="page__text-second">Category В</span>
        </div>
        <iconArrow />
      </div>
      <p class="page__info">
        {{ form.activeCount }} questions out of
        {{ form.questions.length }} passed
      </p>
      <ProgressBar
        :count="form.questions.length"
        :activeCount="form.activeCount"
      />
    </div>
    <div class="page__card-wrapp">
      <div class="page__card">
        <div><iconLayer /></div>
        <p class="page__card-name">DVSA Exam</p>
      </div>

      <div class="page__card">
        <div><iconRocket /></div>
        <p class="page__card-name">Express mode</p>
      </div>

      <div class="page__card">
        <div><iconPlay /></div>
        <p class="page__card-name">Hazard perception</p>
      </div>
      <div class="page__card">
        <div><iconRoad /></div>
        <p class="page__card-name">Road signs</p>
      </div>
      <div class="page__card page__card-width">
        <div><iconGame /></div>
        <span class="page__card-name">Multiplayer Learning</span>
      </div>
    </div>

    <div class="page__item-wrapp">
      <div class="page__item">
        <div class="page__item-wrapper"><iconPen /></div>
        <p class="page__text">Mistakes</p>
      </div>
      <div class="page__item">
        <div class="page__item-wrapper"><iconStatistic /></div>
        <p class="page__text">Statistics</p>
      </div>
      <div class="page__item">
        <div class="page__item-wrapper"><iconBook /></div>
        <p class="page__text">Highway Code</p>
      </div>
      <div class="page__item">
        <div class="page__item-wrapper"><iconMark /></div>
        <span class="page__text">Favorites</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import iconCrown from "@/components/icons/iconCrown.vue";
import iconFire from "@/components/icons/iconFire.vue";
import iconCap from "@/components/icons/iconCap.vue";
import iconArrow from "@/components/icons/iconArrow.vue";
import iconLayer from "@/components/icons/iconLayer.vue";
import iconRocket from "@/components/icons/iconRocket.vue";
import iconPlay from "@/components/icons/iconPlay.vue";
import iconRoad from "@/components/icons/iconRoad.vue";
import iconGame from "@/components/icons/iconGame.vue";
import iconPen from "@/components/icons/iconPen.vue";
import iconStatistic from "@/components/icons/iconStatistic.vue";
import iconBook from "@/components/icons/iconBook.vue";
import iconMark from "@/components/icons/iconBook.vue";
import ProgressBar from "@/components/ProgressBar.vue";

type formType = {
  questions: questionType[];
  activeCount: number;
};

type questionType = {
  id: number;
};

const initQuestions = (): questionType[] => [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
];

export default defineComponent({
  name: "MainPage",
  components: {
    iconCrown,
    iconFire,
    iconCap,
    iconArrow,
    iconLayer,
    iconRocket,
    iconPlay,
    iconRoad,
    iconGame,
    iconPen,
    iconStatistic,
    iconBook,
    iconMark,
    ProgressBar,
  },
  setup() {
    const form: formType = reactive({
      questions: initQuestions(),
      activeCount: 10,
    });
    return { form };
  },
});
</script>

<style lang="scss" scoped>
.page {
  &__bar {
    display: flex;
    flex-direction: row;
    padding-top: 60px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  &__header {
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
  &__title {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
  }
  &__info {
    margin-top: 16px;
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 20px;
  }
  &__text {
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

  &__icon-text {
    color: #2c2d2e;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
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
