<template>
  <div class="layout">
    <main>
      <router-view></router-view>
    </main>
    <div class="compensator"></div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import FooterComponent from "@/components/FooterComponent.vue";
import questionsConst from "@/assets/questions.json";

export default defineComponent({
  name: "App",
  components: {
    FooterComponent,
  },
  setup() {
    const store = useStore();
    const activeQuestions = computed(
      () => store.getters["common/activeQuestions"]
    );
    const questions = computed(() => store.getters["common/questions"]);

    const initQuestions = () => {
      store.dispatch("common/setQuestions", questionsConst.data);
    };
    initQuestions();

    return { activeQuestions, questions };
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
