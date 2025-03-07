<script setup>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
import { useRoute } from "vue-router";
import TopBar from "./components/TopBar/index.vue";
import Footer from "./components/Footer/index.vue";

const route = useRoute();
const isHomePage = computed(() => route.path === "/");
</script>

<template>
  <div class="!w-100vw relative">
    <div class="!px-4 !sm:px-6 !z-[1000] sticky top-6">
      <TopBar class="top-4 w-full" />
    </div>
    <div
      v-if="!isHomePage"
      class="fixed bottom-[5vh] w-full h-full max-h-[100vh] z-[-1] flex items-center justify-center"
    >
      <img
        src="https://res.cloudinary.com/dindu/image/upload/v1738844078/official/Subtract_becelq.svg"
        alt=""
        class="w-[694.12px] h-[480px]"
      />
      <div class="blur-bg"></div>
    </div>
    <RouterView />
    <Footer id="footer" />
  </div>
</template>

<style scoped></style>
