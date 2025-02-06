<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TopBar from "./components/TopBar/index.vue";
</script>

<template>
  <div class="!w-100vw relative">
    <div class="!px-6 !z-[1000] sticky top-6">
      <TopBar class="top-4 w-full" />
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
