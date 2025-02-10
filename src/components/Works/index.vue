<template>
  <section>
    <div class="h-[120px] xl:h-[240px]"></div>
    <div class="container">
      <h3 class="text-base text-center text-[#C4C4C6] mb-5">HOW IT WORKS</h3>
      <h2
        class="text-[29px] xl:text-[56px] font-bold text-white text-center font-dela leading-[120%]"
      >
        More Steps To <span class="text-[#32FAC8]"> Begin </span> A New Era
      </h2>
      <div class="h-[32px] sm:h-[64px]"></div>
      <div class="mt-[64px] w-full grid grid-cols-1 gap-6">
        <div class="work-card">
          <div class="rounded-full number-bg flex items-center justify-center">
            <h3
              class="text-white text-[22px] xl:text-[28px] mb-4 leading-[120%] font-dela p-[32px]"
            >
              1
            </h3>
          </div>
          <div>
            <h4
              class="text-white text-[22px] xl:text-[28px] mb-4 leading-[120%] font-dela"
            >
              Join Our <span class="text-[#32FAC8]">Waitlist</span>
            </h4>
            <div class="h-4"></div>
            <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
              Start by joining our waitlist to gain early access to the future
              of payments.
            </p>
          </div>
        </div>
        <div class="work-card">
          <div class="rounded-full number-bg flex items-center justify-center">
            <h3
              class="text-white text-[22px] xl:text-[28px] mb-4 leading-[120%] font-dela p-[32px]"
            >
              2
            </h3>
          </div>
          <div>
            <h4
              class="text-white text-[22px] xl:text-[28px] mb-4 leading-[120%] font-dela"
            >
              Get Product Launch
              <span class="text-[#32FAC8]">Notification</span>
            </h4>
            <div class="h-4"></div>
            <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
              Get notification text/email for the full or beta-product launch.
            </p>
          </div>
        </div>
        <div class="work-card">
          <div class="rounded-full number-bg flex items-center justify-center">
            <h3
              class="text-white text-[22px] xl:text-[28px] mb-4 leading-[120%] font-dela p-[32px]"
            >
              3
            </h3>
          </div>
          <div>
            <h4
              class="text-white text-[22px] xl:text-[28px] mb-4 leading-[120%] font-dela"
            >
              Choose <span class="text-[#32FAC8]">Hard</span> POS or
              <span class="text-[#32FAC8]">Soft</span> POS
            </h4>
            <div class="h-4"></div>
            <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
              Get the Hard POS delivered to you for a fee or download the Soft
              POS for free.
            </p>
          </div>
        </div>
        <div class="work-card">
          <div class="rounded-full number-bg flex items-center justify-center">
            <h3
              class="text-white text-[22px] xl:text-[28px] mb-4 leading-[120%] font-dela p-[32px]"
            >
              4
            </h3>
          </div>
          <div>
            <h4 class="text-white text-[28px] mb-4 leading-[120%] font-dela">
              You’re in <span class="text-[#32FAC8]">business</span>
            </h4>
            <div class="h-4"></div>
            <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
              Receive, send, and manage payments; access real-time insights and
              detailed reports of all transactions and rewards.
            </p>
          </div>
        </div>
      </div>
      <div class="h-[40px] sm:h-[64px]"></div>
      <a href="" class="text-[18px] block text-[#32FAC8] text-center"
        >Join today</a
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
.work-card {
  display: flex;
  padding: 32px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(64px);
}

@media (max-width: 768px) {
  .work-card {
    flex-direction: column;
    align-items: center;
    padding: 32px 20px !important;
    text-align: center;
  }
}

.number-bg {
  border-radius: 99px;
  background: rgba(7, 7, 14, 0.5);
  padding: 32px;
  height: 88px;
  width: 88px;
}
@media (max-width: 768px) {
  .number-bg {
    flex-direction: column;
    align-items: center;
    padding: 24px !important;
    text-align: center;
  }
}
</style>
