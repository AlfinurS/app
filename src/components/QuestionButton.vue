<template>
  <div class="page__number" @click="handleClick">{{ indexProps + 1 }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { questionType } from "@/types/common";
import { questionConst } from "@/constants/common";

export default defineComponent({
  name: "QuestionButton",
  components: {},

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
    const handleClick = () => {
      emit("handleClick", props.question);
    };
    return { handleClick };
  },
});
</script>

<style lang="scss" scoped>
.page {
  &__number {
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
}
</style>
