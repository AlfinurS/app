<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style=""
    fill="none"
  >
    <path
      d="M29.5109 58C45.5271 58 58.5109 45.0163 58.5109 29C58.5109 12.9837 45.5271 0 29.5109 0C13.4946 0 0.510864 12.9837 0.510864 29C0.510864 45.0163 13.4946 58 29.5109 58Z"
      fill="#FF7355"
    />
    <path
      d="M35.3875 28.5065C35.524 28.643 35.524 28.8658 35.3875 29.0023L24.8442 39.5H19.0109V33.6666L29.5086 23.1235C29.6451 22.9858 29.8668 22.9858 30.0045 23.1235L35.3875 28.5065ZM39.3224 21.7784L36.7325 19.1883C35.8178 18.2736 34.334 18.2736 33.4193 19.1883L31.2281 21.3793C31.0916 21.5158 31.0916 21.7374 31.2281 21.8739L36.6368 27.2826C36.7733 27.4191 36.995 27.4191 37.1315 27.2826L39.3224 25.0917C40.2371 24.177 40.2371 22.693 39.3224 21.7784Z"
      fill="white"
    />
  </iconsWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconsWrapper from "@/components/icons/iconsWrapper.vue";

export default defineComponent({
  name: "iconPen",
  components: {
    iconsWrapper,
  },
  props: {
    iconColor: {
      type: String,
      default: "currentColor",
    },
    width: {
      type: [Number, String],
      default: 59,
    },
    height: {
      type: [Number, String],
      default: 58,
    },
    viewBox: {
      type: String,
      default: "0 0 59 58",
    },
  },
});
</script>
