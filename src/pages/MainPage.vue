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
        <div>
          <iconCap />
        </div>
        <div class="page__text-wrapp">
          <router-link :to="{ path: '/learning' }">
            <span class="page__header">Learning</span>
          </router-link>
          <span class="page__text-second">Category В</span>
        </div>
        <div>
          <iconArrow />
        </div>
      </div>
      <p class="page__info">
        {{ activeCount }} questions out of {{ questions.length }} passed
      </p>
      <ProgressBar :count="questions.length" :activeCount="activeCount" />
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
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
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
import iconMark from "@/components/icons/iconMark.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import { questionType } from "@/types/common";

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
    const store = useStore();
    const activeQuestions = computed(
      (): number[] => store.getters["common/activeQuestions"]
    );
    const questions = computed(
      (): questionType[] => store.getters["common/questions"]
    );

    const activeCount = computed((): number => {
      return activeQuestions.value.length;
    });

    return { activeQuestions, questions, activeCount };
  },
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
    &-second {
      color: #87898f;
    }
    &-wrapp {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      width: 100%;
    }
  }
  &__hero {
    width: 100%;
    border-radius: 20px;
    border: 1px solid #f3f3f3;
    background-color: #fff;
    padding: 24px;
    box-sizing: border-box;
    margin-top: 23px;
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
    margin-left: 4px;
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
    &-wrapper {
      margin-bottom: 8px;
    }
  }
  &__icon-wrapp {
    display: flex;
    flex-direction: row;
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
