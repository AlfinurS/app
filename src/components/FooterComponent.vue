<template>
  <footer class="footer">
    <div class="footer__item footer__item--red">
      <div class="footer__item-wrapper footer__item-wrapper--red">
        <iconHome />
      </div>
      <span>Home</span>
    </div>
    <div class="footer__item">
      <div class="footer__item-wrapper">
        <iconRoute />
      </div>
      <span>Your plan</span>
    </div>
    <div class="footer__item">
      <div class="footer__item-wrapper">
        <iconRank />
      </div>
      <span>Leaderboard</span>
    </div>
    <div class="footer__item">
      <div class="footer__item-wrapper">
        <iconProfile />
      </div>
      <span>Profile</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconProfile from "@/components/icons/iconProfile.vue";
import iconRank from "@/components/icons/iconRank.vue";
import iconRoute from "@/components/icons/iconRoute.vue";
import iconHome from "@/components/icons/iconHome.vue";

export default defineComponent({
  name: "FooterComponent",
  components: {
    iconProfile,
    iconRank,
    iconRoute,
    iconHome,
  },
});
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: row;
  margin-top: 14px;
  width: 360px;
  height: 74px;
  background-color: white;
  border-radius: 24px 24px 0px 0px;
  box-shadow: 0px 0px 13px 0px rgba(22, 22, 23, 0.26);
  padding-left: 45px;
  padding-right: 45px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  &__item {
    color: #87898f;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    cursor: pointer;
    &-wrapper {
      position: relative;
      margin-bottom: 12px;
      &--red {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffe3dd;
        width: 40px;
        height: 40px;
        border-radius: 12px;
        margin-bottom: 0;
      }
    }
    &--red {
      color: #ef7958;
      border: 2px solid white;
    }
  }

  &__item :hover {
    opacity: 0.7;
  }
}
</style>
