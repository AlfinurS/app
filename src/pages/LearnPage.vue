<template>
  <section class="page">
    <div class="page__bar">
      <div class="page__icon-wrapp" @click="redirectMain">
        <div class="icon-wrapper">
          <iconBack />
        </div>
        <h2 class="page__title">Learning</h2>
      </div>
    </div>
    <div class="page__text-wrapper">
      <div class="page__text-wrapp">
        <p class="page__text">Tests</p>
      </div>
    </div>
    <div class="page__number-wrapp">
      <QuestionButton
        v-for="(question, index) in questions"
        :key="question.id"
        :indexProps="index"
        :question="question"
        @handleClick="handleClick"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import iconBack from "@/components/icons/iconBack.vue";
import QuestionButton from "@/components/QuestionButton.vue";
import { questionType } from "@/types/common";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LearnPage",
  components: {
    iconBack,
    QuestionButton,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const activeQuestions = computed(
      (): number[] => store.getters["common/activeQuestions"]
    );
    const questions = computed(
      (): questionType[] => store.getters["common/questions"]
    );

    const handleClick = (question: questionType) => {
      if (!question.id) return;
      const result = JSON.parse(JSON.stringify(activeQuestions.value));
      if (activeQuestions.value.includes(question.id)) {
        const index = activeQuestions.value.indexOf(question.id);
        if (index !== -1) {
          result.splice(index, 1);
          store.dispatch("common/setActiveQuestions", result);
        }
      } else {
        result.push(question.id);
        store.dispatch("common/setActiveQuestions", result);
      }
    };
    const redirectMain = () => {
      router.push({ name: "MainPage" });
    };
    return { handleClick, activeQuestions, questions, redirectMain };
  },
});
</script>

<style lang="scss" scoped>
.page {
  &__bar {
    display: flex;
    flex-direction: row;
    padding-top: 48px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 29px;
  }
  &__title {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
  }
  &__number-wrapp {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
  &__icon-wrapp {
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
  &__text {
    color: #ff7355;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    &-wrapp {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 109px;
      min-height: 50px;
      border-bottom-style: solid;
      border-bottom-width: 2px;
      border-bottom-color: #ff7355;
    }
    &-wrapper {
      max-width: 100%;
      margin-bottom: 26px;
    }
  }
}
.icon-wrapper {
  margin-right: 16px;
}
</style>
