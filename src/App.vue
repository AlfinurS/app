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
import { defineComponent, provide, ref } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import questionsConst from "@/assets/questions.json";

export default defineComponent({
  name: "App",
  components: {
    FooterComponent,
  },
  setup() {
    const questions = ref(questionsConst.data);
    provide("questions", questions);
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
