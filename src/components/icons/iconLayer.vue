<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style=""
    fill="none"
    ><path
      opacity="0.1"
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill="#FF2045"
    />
    <path
      d="M28.3379 24.7145V29.2921C28.3379 29.6791 28.017 30 27.63 30H12.925C12.538 30 12.2171 29.6791 12.2171 29.2921V10.7079C12.2171 10.3209 12.538 10 12.925 10H18.6682C19.0599 10 19.3761 10.3209 19.3761 10.7079V24.0066H27.63C28.017 24.0066 28.3379 24.3228 28.3379 24.7145Z"
      fill="#FF2045"
    />
  </iconsWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconsWrapper from "@/components/icons/iconsWrapper.vue";

export default defineComponent({
  name: "iconLayer",
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
      default: 40,
    },
    height: {
      type: [Number, String],
      default: 40,
    },
    viewBox: {
      type: String,
      default: "0 0 40 40",
    },
  },
});
</script>
