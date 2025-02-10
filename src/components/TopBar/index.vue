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
          :href="`#${item.id}`"
          class="text-[#C4C4C6] text-base cursor-pointer"
        >
          {{ item.text }}
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
      class="!ml-auto block xl:hidden h-6 w-6 cursor-pointer"
      @click="showNavigation = !showNavigation"
    />
    <div v-if="showNavigation" class="top-barmobile">
      <div class="flex flex-col gap-[12px]">
        <a
          v-for="(item, idx) in navItems"
          :key="idx"
          :href="`#${item.id}`"
          class="text-[#C4C4C6] block text-base cursor-pointer"
        >
          {{ item.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showNavigation = ref(false);

const navItems = ref([
  {
    text: "Home",
    id: "hero",
  },
  {
    text: "Mediums",
    id: "medium",
  },
  {
    text: "Benefits",
    id: "benefits",
  },
  {
    text: "Features",
    id: "reasons",
  },
  {
    text: "How it works",
    id: "works",
  },
  {
    text: "Feedback",
    id: "feedback",
  },
  {
    text: "Contact",
    id: "contact",
  },
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
.top-barmobile {
  border-radius: 12px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    rgba(7, 7, 14, 0.99);
  backdrop-filter: blur(32px);
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  padding: 24px;
}
</style>
