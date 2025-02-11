<template>
  <section>
    <div class="hidden xl:block h-[144px]"></div>
    <div class="container">
      <h3 class="text-[12px] sm:text-base text-center text-[#C4C4C6] mb-5">
        OUR MEDIUMS
      </h3>
      <h2
        class="!text-[29px] xl:text-[56px] font-bold text-white text-center font-dela leading-[34.8px] xl:leading-[120%]"
      >
        <span class="text-[#32FAC8]"> One </span> Platform,
        <br class="block md:hidden" />
        <span class="text-[#32FAC8]">Two</span> Solutions
      </h2>
      <div class="h-[32px] sm:h-[64px]"></div>
      <div class="mt-[64px] w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          class="medium-card-bg backdrop-blur-[24px] rounded-[24px] bg-[rgba(255, 255, 255, 0.05)] px-[64px] pt-[64px]"
        >
          <div>
            <h4 class="text-white text-[22px] mb-4 leading-[120%] font-dela">
              <span class="text-[#32FAC8]">Hard</span> POS | Terminal
            </h4>
            <div class="h-4"></div>
            <p
              class="text-base xl:text-[16px] sm:text-[18px] text-[#C4C4C6] leading-[24px] sm:leading-[28px]"
            >
              A sleek, dedicated device for businesses that need high volume or
              in-store payment solutions.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dindu/image/upload/v1738823855/official/gp-1_h0vpyv.webp"
            alt="Hard POS Terminal device showing payment interface"
            class="xl:max-w-[333.206px] w-full h-[295px] xl:h-[328px] object-contain"
          />
        </div>
        <div
          class="medium-card-bg backdrop-blur-[24px] rounded-[24px] bg-[rgba(255, 255, 255, 0.05)] px-[64px] pt-[64px]"
        >
          <div>
            <h4 class="text-white text-[22px] mb-4 leading-[120%] font-dela">
              <span class="text-[#32FAC8]">Hard</span> POS | Terminal
            </h4>
            <div class="h-4"></div>
            <p
              class="text-base xl:text-[16px] sm:text-[18px] text-[#C4C4C6] leading-[24px] sm:leading-[28px]"
            >
              A sleek, dedicated device for businesses that need high volume or
              in-store payment solutions.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dindu/image/upload/v1738823965/official/gp-2_ux2ljv.webp"
            alt="Hard POS Terminal device showing payment interface"
            class="xl:max-w-[333.206px] w-full h-[295px] xl:h-[328px] object-contain xl:translate-x-[-30px]"
          />
        </div>
      </div>
      <div class="h-[40px] sm:h-[64px]"></div>
      <a href="" class="text-[18px] block text-[#32FAC8] text-center"
        >Choose now</a
      >
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MediumsSection",
});
</script>

<style scoped>
.medium-card-bg {
  display: flex;
  flex-direction: column;
  padding: 64px 64px 0px 64px;
  gap: 64px;
  flex: 1 0 0;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(64px);
}
@media (max-width: 768px) {
  .medium-card-bg {
    padding: 32px 20px 0 20px !important;
    gap: 32px;
  }
}
</style>
