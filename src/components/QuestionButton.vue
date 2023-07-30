<template>
  <div class="page__number" @click="handleClick">
    {{ indexProps + 1 }}
    <div class="page__icon-wrapp" v-if="isActive"><iconCheck /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { useStore } from "vuex";
import { questionType } from "@/types/common";
import { questionConst } from "@/constants/common";
import iconCheck from "@/components/icons/iconCheck.vue";

export default defineComponent({
  name: "QuestionButton",
  components: {
    iconCheck,
  },

  emits: ["handleClick"],
  props: {
    indexProps: {
      type: Number,
      default: 0,
    },
    question: {
      type: Object as PropType<questionType>,
      default: () => questionConst,
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const activeQuestions = computed(
      (): number[] => store.getters["common/activeQuestions"]
    );
    const isActive = computed((): boolean => {
      if (!props.question.id) return false;
      return activeQuestions.value.includes(props.question.id);
    });

    const handleClick = () => {
      emit("handleClick", props.question);
    };
    return { handleClick, activeQuestions, isActive };
  },
});
</script>

<style lang="scss" scoped>
.page {
  &__number {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 71px;
    height: 71px;
    border-radius: 50%;
    box-shadow: inset -8px -3px 4px 0px rgba(18, 25, 43, 0.04);
    background-color: #fff;
    user-select: none;
    cursor: pointer;
  }
  .page__number:hover {
    opacity: 0.7;
    transition-duration: 0.2s;
    background-color: #f4f5f5;
  }
  &__icon-wrapp {
    position: absolute;
    left: 42px;
    top: -2px;
  }
}
</style>
