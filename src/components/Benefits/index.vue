<template>
  <section>
    <div class="h-[240px]"></div>
    <div class="container">
      <h3 class="text-base text-center text-[#C4C4C6] mb-5">KEY BENEFITS</h3>
      <h2
        class="text-[56px] font-bold text-white text-center font-dela leading-[120%]"
      >
        More <span class="text-[#32FAC8]"> Value </span> to your business,
      </h2>
      <div class="h-[64px]"></div>
      <div
        class="mt-[64px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div v-for="(benefit, i) in benefits" :key="i" class="benefit-card">
          <div>
            <h4 class="text-white text-[20px] mb-4 leading-[120%] font-dela">
              <span class="text-[#32FAC8]">{{ benefit.title }}</span>
              {{ benefit.subTitle }}
            </h4>
            <div class="h-4"></div>
            <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="h-[64px]"></div>
      <a href="" class="text-[18px] block text-[#32FAC8] text-center"
        >Join our Waitlist</a
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const benefits = ref([
  {
    title: "Instant",
    subTitle: "Setup",
    description: "Get started in minutes without any hassle or downtime.",
  },
  {
    title: "Instant",
    subTitle: "Setup",
    description: "Get started in minutes without any hassle or downtime.",
  },
  {
    title: "Instant",
    subTitle: "Setup",
    description: "Get started in minutes without any hassle or downtime.",
  },
  {
    title: "Instant",
    subTitle: "Setup",
    description: "Get started in minutes without any hassle or downtime.",
  },
  {
    title: "Instant",
    subTitle: "Setup",
    description: "Get started in minutes without any hassle or downtime.",
  },
  {
    title: "Instant",
    subTitle: "Setup",
    description: "Get started in minutes without any hassle or downtime.",
  },
]);
</script>

<style scoped>
.benefit-card {
  display: flex;
  padding: 48px 64px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(64px);
}
</style>
