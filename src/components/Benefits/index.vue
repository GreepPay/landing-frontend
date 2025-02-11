<template>
  <section>
    <div class="h-[120px] xl:h-[240px]"></div>
    <div class="container">
      <h3 class="text-[12px] sm:text-base text-center text-[#C4C4C6] mb-5">
        KEY BENEFITS
      </h3>
      <h2
        class="text-[29px] xl:text-[56px] font-bold text-white text-center font-dela leading-[120%]"
      >
        More <span class="text-[#32FAC8]"> Value </span> To your business,
      </h2>
      <div class="h-[32px] sm:h-[64px]"></div>
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
            <p
              class="text-[16px] sm:text-[18px] text-[#C4C4C6] leading-[24px] sm:leading-[28px]"
            >
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="h-[40px] sm:h-[64px]"></div>
      <a
        href=""
        class="text-[18px] flex items-center justify-center gap-1 text-[#32FAC8] text-center"
        >Join our Waitlist
        <img
          src="https://res.cloudinary.com/dindu/image/upload/v1738842090/official/chevron-right_gza67b.svg"
          alt=""
          class="h-[30px] w-[30px] object-contain"
      /></a>
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
    title: "Fast",
    subTitle: " & Reliable",
    description:
      "Efficient and effortless payment process with no complications.",
  },
  {
    title: "Trusted ",
    subTitle: "Security",
    description: "Safety prioritized with industry leading security measures.",
  },
  {
    title: "Affordable",
    subTitle: "Fees",
    description: "A good deal on transaction rates mean more profits for you.",
  },
  {
    title: "Borderless",
    subTitle: "Deals",
    description:
      "Global transactions; no complex money conversions or hidden fees.",
  },
  {
    title: "24/7 ",
    subTitle: "Support",
    description:
      "Customer satisfaction guaranteed with personalized communication.",
  },
]);
</script>

<style scoped>
.benefit-card {
  display: flex;
  padding: 48px 64px !important;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(64px);
}

@media (max-width: 768px) {
  .benefit-card {
    padding: 32px 20px !important;
  }
}
</style>
