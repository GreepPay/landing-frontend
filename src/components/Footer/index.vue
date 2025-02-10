<template>
  <footer>
    <div class="h-[120px] xl:h-[240px]"></div>
    <div
      class="container max-w-[1200px] w-full flex flex-col lg:flex-row justify-between gap-6"
    >
      <div class="max-w-[342px]">
        <div class="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dindu/image/upload/v1738835471/official/ge-logo_gwurae.png"
            class="w-10 h-10 object-contain"
            alt="Logo"
          />
          <h5 class="font-dela text-white text-[28px] leading-[33px]">
            Greep<span class="text-[#32FAC8]">Pay</span>
          </h5>
        </div>
        <div class="h-[20px]"></div>
        <p class="text-[16px] leading-[24px] text-[#C4C4C6] footer-description">
          The future of borderless payments is here! We bring you the most
          efficient method of payment for the world of physical interconnection.
        </p>
      </div>
      <div>
        <h5 class="!font-bold text-white text-[16px] uppercase leading-[24px]">
          legal
        </h5>
        <div class="h-[12px]"></div>
        <div class="flex flex-col gap-1">
          <a
            v-for="(link, i) in legalLinks"
            :key="i"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#C4C4C6] text-[16px] leading-[24px]"
          >
            {{ link }}
          </a>
        </div>
      </div>
      <div>
        <h5 class="!font-bold text-white text-[16px] uppercase leading-[24px]">
          COMMUNITY
        </h5>
        <div class="h-[12px]"></div>
        <div class="flex flex-col gap-1">
          <a
            v-for="(link, i) in communityLinks"
            :key="i"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#C4C4C6] text-[16px] leading-[24px]"
          >
            {{ link }}
          </a>
        </div>
      </div>
      <div>
        <h5 class="!font-bold text-white text-[16px] uppercase leading-[24px]">
          COMPANY
        </h5>
        <div class="h-[12px]"></div>
        <div class="flex flex-col gap-1">
          <a
            v-for="(link, i) in companyLinks"
            :key="i"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#C4C4C6] text-[16px] leading-[24px]"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
    <div class="h-[80px]"></div>
    <div class="container max-w-[1200px] w-full">
      <p class="text-[16px] leading-[24px] text-[#C4C4C6]">
        © {{ new Date().getFullYear() }} Greep. All rights reserved.
      </p>
    </div>
    <div class="h-[48px]"></div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const legalLinks = ref([
  "Terms & Conditions",
  "Terms of Service",
  "Data Protection",
  "Privacy Policy",
]);

const communityLinks = ref(["Greep", "Greep FX", "Greep App", "GreepPay App"]);

const companyLinks = ref([
  {
    text: "About",
    link: "#about",
  },
  {
    text: "Careers",
    link: "#careers",
  },
  {
    text: "Events",
    link: "#events",
  },
  {
    text: "Team",
    link: "#team",
  },
]);
</script>

<style>
.footer-description {
  border-left: 2.5px solid #32fac8;
  padding: 2px 0px 6px 36px;
  margin-left: 36px;
}
</style>
