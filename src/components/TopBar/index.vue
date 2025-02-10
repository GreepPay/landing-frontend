<template>
  <div
    class="!w-full flex justify-between items-center bg-topBar !px-4 !py-5 max-w-[100%]"
  >
    <img src="../../assets/img/Greep_Logo.png" class="w-[137px] sm:w-[160px]" />

    <div class="hidden xl:block">
      <div class="flex items-center gap-[48px]">
        <a
          v-for="(item, idx) in navItems"
          :key="idx"
          class="text-[#C4C4C6] text-base cursor-pointer"
        >
          {{ item }}
        </a>
      </div>
    </div>

    <button
      class="hidden xl:block bg-[#32FAC8] rounded-md !py-2 !px-4 text-sm !font-semibold !text-[#07070E]"
    >
      Get Started
    </button>

    <img
      src="https://res.cloudinary.com/dindu/image/upload/v1739201871/official/menu_q8pto8.png"
      class="!ml-auto block xl:hidden h-6 w-6"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const navItems = ref([
  "Home",
  "Mediums",
  "Benefits",
  "Features",
  "How it works",
  "Feedback",
  "Contact",
]);
</script>

<style scoped>
.bg-topBar {
  border-radius: 12px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    rgba(7, 7, 14, 0.75);
  backdrop-filter: blur(32px);
}
</style>
