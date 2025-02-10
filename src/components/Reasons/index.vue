<template>
  <section>
    <div class="h-[120px] xl:h-[240px]"></div>
    <div class="container">
      <h3 class="!font-bold text-base text-center text-[#C4C4C6] mb-5">
        CORE FEATURES
      </h3>
      <h2
        class="text-[29px] xl:text-[56px] font-bold text-white text-center font-dela leading-[120%]"
      >
        Why choose Greep<span class="text-[#32FAC8]">Pay</span>
      </h2>
      <div class="h-[32px] sm:h-[64px]"></div>
      <div class="mt-[64px] w-full grid grid-cols-1">
        <!-- FEATURE -->
        <div
          @mouseenter="openItem(0)"
          @mouseleave="closeItem(0)"
          class="cursor-pointer"
        >
          <div>
            <div class="flex items-center !pt-6 gap-4">
              <div class="w-full h-[1px] bg-[#C4C4C6]"></div>
              <h3
                class="!font-bold text-base text-[#C4C4C6] whitespace-nowrap mb-5"
              >
                MULTI-CURRENCY SUPPORT
              </h3>
              <div class="w-full h-[1px] bg-[#C4C4C6]"></div>
            </div>
          </div>

          <div
            :style="{
              height: activeIndex === 0 ? contentHeights[0] + 'px' : '0px',
            }"
            class="overflow-hidden reveal-effect"
            ref="content1"
          >
            <div class="h-4"></div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="benefit-card">
                <h4
                  class="text-white text-[20px] mb-4 leading-[120%] font-dela"
                >
                  Accept <span class="text-[#32FAC8]"> African </span> Currency
                </h4>

                <div class="h-4"></div>
                <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
                  Collect payment in a wide range of African currencies which
                  seamlessly converts to any currency you want.
                </p>
                <div class="h-[96px]"></div>
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738839264/official/feat-3_eaatbw.webp"
                  alt=""
                  class="translate-x-[64px] !ml-auto h-[336px] object-contain"
                />
              </div>
              <div class="benefit-card">
                <h4
                  class="text-white text-[20px] mb-4 leading-[120%] font-dela"
                >
                  Accept <span class="text-[#32FAC8]">Stablecoin</span>
                </h4>
                <div class="h-4"></div>
                <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
                  Collect Stablecoin payments like USDT, which seamlessly
                  converts to any currency you want.
                </p>
                <div class="h-[96px]"></div>
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738839268/official/feat-6_muvms4.webp"
                  alt=""
                  class="translate-x-[64px] !ml-auto h-[336px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- FEATURE -->
        <div
          @mouseenter="openItem(1)"
          @mouseleave="closeItem(1)"
          class="cursor-pointer"
        >
          <div class="flex items-center !pt-6 gap-4">
            <div class="w-full h-[1px] bg-[#C4C4C6]"></div>
            <h3
              class="!font-bold text-base text-[#C4C4C6] whitespace-nowrap mb-5"
            >
              MULTI-PAYMENT OPTIONS
            </h3>
            <div class="w-full h-[1px] bg-[#C4C4C6]"></div>
          </div>
          <div
            :style="{
              height: activeIndex === 1 ? contentHeights[1] + 'px' : '0px',
            }"
            class="overflow-hidden reveal-effect"
            ref="content2"
          >
            <div class="h-4"></div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="benefit-card">
                <h4
                  class="text-white text-[20px] mb-4 leading-[120%] font-dela"
                >
                  Accept <span class="text-[#32FAC8]"> Transfer </span>
                </h4>

                <div class="h-4"></div>
                <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
                  Collect payments from your customers via transfer directly on
                  your POS terminaI.
                </p>
                <div class="h-[96px]"></div>
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738839264/official/feat-2_bopmda.webp"
                  alt=""
                  class="translate-x-[64px] !ml-auto h-[336px] object-contain"
                />
              </div>
              <div class="benefit-card">
                <h4
                  class="text-white text-[20px] mb-4 leading-[120%] font-dela"
                >
                  Accept <span class="text-[#32FAC8]">Card</span>
                </h4>
                <div class="h-4"></div>
                <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
                  Collect payments from your customers via Credit or Debit card
                  directly on your POS terminal.
                </p>
                <div class="h-[96px]"></div>
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738839265/official/feat-4_c8h4hg.webp"
                  alt=""
                  class="translate-x-[64px] !ml-auto h-[336px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- FEATURE -->
        <div
          class="cursor-pointer"
          @mouseenter="openItem(2)"
          @mouseleave="closeItem(2)"
        >
          <div>
            <div class="flex items-center !pt-6 gap-4">
              <div class="w-full h-[1px] bg-[#C4C4C6]"></div>
              <h3
                class="!font-bold text-base text-[#C4C4C6] whitespace-nowrap mb-5"
              >
                ADVANCED WALLET FEATURES
              </h3>
              <div class="w-full h-[1px] bg-[#C4C4C6]"></div>
            </div>
          </div>

          <div
            :style="{
              height: activeIndex === 2 ? contentHeights[2] + 'px' : '0px',
            }"
            class="overflow-hidden reveal-effect"
            ref="content3"
          >
            <div class="h-4"></div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="benefit-card">
                <h4
                  class="text-white text-[20px] mb-4 leading-[120%] font-dela"
                >
                  Multi-Currency <span class="text-[#32FAC8]"> Wallet </span>
                </h4>

                <div class="h-4"></div>
                <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
                  Keep money in your preferred currency – Stablecoin, Turkish
                  Lira, Euros, Pounds, or USD.
                </p>
                <div class="h-[96px]"></div>
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738839263/official/feat-1_csdont.webp"
                  alt=""
                  class="translate-x-[64px] !ml-auto h-[336px] object-contain"
                />
              </div>
              <div class="benefit-card">
                <h4
                  class="text-white text-[20px] mb-4 leading-[120%] font-dela"
                >
                  Wallet <span class="text-[#32FAC8]">Exchange</span>
                </h4>
                <div class="h-4"></div>
                <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
                  Shift money across different currencies in your wallet;
                  Stablecoin, Turkish Lira, Euros, Pounds, and USD.
                </p>
                <div class="h-[96px]"></div>
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738839267/official/feat-5_dfhtkd.webp"
                  alt=""
                  class="translate-x-[64px] !ml-auto h-[336px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- FEATURE -->
        <div
          class="cursor-pointer"
          @mouseenter="openItem(3)"
          @mouseleave="closeItem(3)"
        >
          <div class="flex items-center !pt-6 gap-4">
            <div class="w-full h-[1px] bg-[#C4C4C6]"></div>
            <h3
              class="!font-bold text-base text-[#C4C4C6] whitespace-nowrap mb-5"
            >
              LUCRATIVE REWARD PROGRAM
            </h3>
            <div class="w-full h-[1px] bg-[#C4C4C6]"></div>
          </div>
          <div
            :style="{
              height: activeIndex === 3 ? contentHeights[3] + 'px' : '0px',
            }"
            class="overflow-hidden reveal-effect"
            ref="content4"
          >
            <div class="h-4"></div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="benefit-card">
                <h4
                  class="text-white text-[20px] mb-4 leading-[120%] font-dela"
                >
                  Redeem <span class="text-[#32FAC8]"> Rewards </span>
                </h4>

                <div class="h-4"></div>
                <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
                  Use your hard earned GRP tokens to redeem valuable rewards, or
                  you can convert it to money/stablecoin.
                </p>
                <div class="h-[96px]"></div>
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738840201/official/Pngtree_3d_realistic_gift_box_with_8649915sssss_1_exrbqm.webp"
                  alt=""
                  class="translate-x-[64px] !ml-auto h-[336px] object-contain"
                />
              </div>
              <div class="benefit-card">
                <h4
                  class="text-white text-[20px] mb-4 leading-[120%] font-dela"
                >
                  Earn <span class="text-[#32FAC8]">GRP</span> Tokens
                </h4>
                <div class="h-4"></div>
                <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
                  Receive GRP - our very own crypto token, for every transaction
                  processed on the GreepPay POS. 
                </p>
                <div class="h-[96px]"></div>
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738840201/official/Greep_Token_GRP_1_plw88o.webp"
                  alt=""
                  class="translate-x-[64px] !ml-auto h-[336px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[40px] sm:h-[64px]"></div>
      <a
        href=""
        class="text-[18px] flex items-center justify-center gap-1 text-[#32FAC8] text-center"
        >Get Started
        <img
          src="https://res.cloudinary.com/dindu/image/upload/v1738842090/official/chevron-right_gza67b.svg"
          alt=""
          class="h-[30px] w-[30px] object-contain"
      /></a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const activeIndex = ref(0);
const contentRefs = ref([]);
const contentHeights = ref([]);

const content1 = ref(null);
const content2 = ref(null);
const content3 = ref(null);
const content4 = ref(null);

onMounted(() => {
  calculateHeights();
});

const calculateHeights = async () => {
  await nextTick(); // Wait for DOM update
  contentHeights.value = [
    content1.value ? content1.value.scrollHeight : 0,
    content2.value ? content2.value.scrollHeight : 0,
    content3.value ? content3.value.scrollHeight : 0,
    content4.value ? content4.value.scrollHeight : 0,
  ];
};

const openItem = (index) => {
  activeIndex.value = index;
};

const closeItem = () => {
  activeIndex.value = 0;
};
</script>

<style scoped>
.benefit-card {
  padding: 64px;
  padding-bottom: 0px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(64px);
  overflow: hidden;
}

@media (max-width: 768px) {
  .benefit-card {
    flex-direction: column;
    align-items: center;
    padding: 32px 20px 0 20px !important;
    text-align: center;
  }
}
.reveal-effect {
  transition: height 0.3s ease;
}
</style>
