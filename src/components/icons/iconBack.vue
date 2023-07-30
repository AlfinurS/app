<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style=""
    fill="none"
  >
    <g id="2 - Regular / arrow-left">
      <path
        id="arrow-left-Regular"
        d="M21.5 12C21.5 12.414 21.164 12.75 20.75 12.75H4.561L10.281 18.47C10.574 18.763 10.574 19.238 10.281 19.531C10.135 19.677 9.943 19.751 9.751 19.751C9.559 19.751 9.36703 19.678 9.22103 19.531L2.22103 12.531C1.92803 12.238 1.92803 11.763 2.22103 11.47L9.22103 4.46999C9.51403 4.17699 9.98901 4.17699 10.282 4.46999C10.575 4.76299 10.575 5.23803 10.282 5.53103L4.56204 11.251H20.75C21.164 11.25 21.5 11.586 21.5 12Z"
        fill="#41416E"
      />
    </g>
  </iconsWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconsWrapper from "@/components/icons/iconsWrapper.vue";

export default defineComponent({
  name: "iconBack",
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
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
  },
});
</script>
