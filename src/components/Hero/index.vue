<template>
  <div class="relative !w-full">
    <div class="absolute w-full h-full z-[-1] flex items-center justify-center">
      <img
        src="https://res.cloudinary.com/dindu/image/upload/v1738844078/official/Subtract_becelq.svg"
        alt=""
        class="w-[694.12px] h-[480px]"
      />
      <div class="blur-bg"></div>
    </div>
    <div class="h-[108px]"></div>
    <div
      class="grid grid-cols-2 gap-x-[122px] relative z-2 h-full max-w-[1200px] !mx-auto items-center justify-center text-white"
    >
      <div class="max-w-[526px]">
        <p class="text-sm font-bold font-inter mb-5">
          🚀 THE FUTURE OF BORDERLESS PAYMENTS
        </p>
        <h1 class="text-[64px] font-bold font-dela leading-[70.4px]">
          Get <span class="text-[#32FAC8]">Paid</span> And
          <span class="text-[#32FAC8]">Earn</span> Rewards With Our
          <span class="text-[#32FAC8]">POS</span>
        </h1>
        <p class="font-inter text-[#C4C4C6] !mt-7">
          With GreepPay you can accept payments in African currencies and
          Stablecoins like USDT while earning GRP tokens every time you process
          a payment.
        </p>
        <div class="!mt-8 flex gap-x-6">
          <button
            class="bg-[#32FAC8] cursor-pointer gap-x-2 flex text-center text-base items-center !py-4 !px-5 rounded-lg !font-inter !font-bold text-[#07070E]"
          >
            Join Our Waitlist
            <Arrow class="!w-4 !h-4" />
          </button>
          <button
            class="bg-transparent cursor-pointer border-2 border-[#32FAC8] !text-base !text-[#32FAC8] !py-4 !px-5 rounded-lg !font-inter !font-bold"
          >
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src="../../assets/img/heroImg.png" />
      </div>
    </div>
    <div class="h-[108px]"></div>
  </div>
</template>

<script setup lang="ts">
import Arrow from "../icons/arrow.vue";
</script>

<style scoped>
.hero-bg {
  background-image: url("../../assets/img/Herobg.png") !important;
  background-repeat: no-repeat;
  background-size: cover;
}
.blur-bg {
  background: rgba(7, 7, 14, 0.65);
  backdrop-filter: blur(48px);
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
