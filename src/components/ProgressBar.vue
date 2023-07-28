<template>
  <div class="progressbar" :style="progressbarClass">
    <div
      v-for="cellActive in activeCount"
      :key="cellActive"
      class="progressbar__cell progressbar__cell--active"
    ></div>
    <div
      v-for="cell in passiveCount"
      :key="cell"
      class="progressbar__cell"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "ProgressBar",
  components: {},
  props: {
    // общее количество ячеек
    count: {
      type: Number,
      default: 0,
    },
    // количество активных ячеек
    activeCount: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const passiveCount = computed(() => {
      return props.count - props.activeCount;
    });

    const progressbarClass = computed(() => {
      return `grid-template-columns: repeat(${props.count}, 1fr);`;
    });

    return { passiveCount, progressbarClass };
  },
});
</script>

<style lang="scss" scoped>
.progressbar {
  display: grid;
  column-gap: 3px;
  &__cell {
    height: 6px;
    background-color: #52a754;
    opacity: 0.1;
    border-radius: 3px;
    &--active {
      opacity: 1;
    }
  }
}
</style>
