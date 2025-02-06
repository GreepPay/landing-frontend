<template>
  <section>
    <div class="h-[240px]"></div>
    <div class="container">
      <h3 class="text-base text-center text-[#C4C4C6] mb-5">FEEDBACK</h3>
      <h2
        class="text-[56px] font-bold text-white text-center font-dela leading-[120%]"
      >
        The <span class="text-[#32FAC8]"> Buzz </span> from waitlisters
      </h2>
      <div class="h-[64px]"></div>
      <div class="relative">
        <button
          class="absolute top-[50%] left-0 translate-y-[-50%] z-30 cursor-pointer"
          @click="swiperPrevSlide"
        >
          <img
            src="https://res.cloudinary.com/dindu/image/upload/v1738830130/official/chevron_zsxjor.svg"
            alt="Arrow"
            class="h-[60px] w-[60px]"
          />
        </button>
        <button
          class="absolute top-[50%] right-0 translate-y-[-50%] z-30 cursor-pointer"
          @click="swiperNextSlide"
        >
          <img
            src="https://res.cloudinary.com/dindu/image/upload/v1738830130/official/chevron_zsxjor.svg"
            class="rotate-[180deg] h-[60px] w-[60px]"
            alt="Arrow"
          />
        </button>
        <swiper
          ref="swiperRef"
          :slidesPerView="'auto'"
          :centeredSlides="true"
          :spaceBetween="24"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :loop="true"
          :modules="modules"
          class="mySwiper"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="(feedback, i) in feedbacks"
            :key="i"
            class="feedback-card bg-white max-w-[480px] w-[480px]"
          >
            <img
              src="https://res.cloudinary.com/dindu/image/upload/v1738827197/official/w21uvhts2jkejo0elbyj.svg"
              class="h-10 w-12"
              alt=""
            />
            <div class="h-[48px]"></div>
            <p class="text-[18px] italic text-white leading-[28px]">
              {{ feedback.description }}
            </p>
            <div class="h-[64px]"></div>
            <div class="flex gap-6">
              <img
                :src="feedback.avatar"
                alt="Avatar"
                class="h-[56px] w-[56px]"
              />
              <div>
                <h6 class="font-bold text-[18px] leading-[28px] text-white">
                  <strong> {{ feedback.name }}</strong>
                </h6>
                <p class="text-[16px] leading-[24px] text-[#C4C4C6]">
                  {{ feedback.designation }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="h-[64px]"></div>
      <a href="" class="text-[18px] block text-[#32FAC8] text-center"
        >Choose now</a
      >
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { ref } from "vue";

import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperInstance = ref();
    function onSwiper(swiper) {
      swiperInstance.value = swiper;
    }
    const swiperNextSlide = () => {
      swiperInstance.value.slideNext();
    };
    const swiperPrevSlide = () => {
      swiperInstance.value.slidePrev();
    };
    return {
      modules: [Navigation],
      onSwiper,
      swiperNextSlide,
      swiperPrevSlide,
      feedbacks: [
        {
          description:
            "Bladerunner gave our brand the transformation it needed. Their team created a brand identity that perfectly reflects our innovative spirit and technical expertise. The new identity has been a game-changer in helping us stand out in a competitive market. I recommend them for anyone!",
          name: "Michael Grant",
          designation: "CEO, Code Decode Labs",
          avatar:
            "https://res.cloudinary.com/dindu/image/upload/v1738827290/official/avatar_k9qoa0.webp",
        },
        {
          description:
            "As a growing company, we needed a website that was professional, user-friendly, and aligned with our brand values. The team at Bladerunner exceeded our expectations. From initial brainstorming to the final launch, their attention to detail and creative vision were unmatched. ",
          name: "Zoe Kilman",
          designation: "COO, Studionna",
          avatar:
            "https://res.cloudinary.com/dindu/image/upload/v1738828528/official/avatar-3_zhzlbs.webp",
        },
        {
          description:
            "As a growing company, we needed a website that was professional, user-friendly, and aligned with our brand values. The team at Bladerunner exceeded our expectations. From initial brainstorming to the final launch, their attention to detail and creative vision were unmatched.",
          name: "Sarah Jenkins",
          designation: "CMO, Proxima",
          avatar:
            "https://res.cloudinary.com/dindu/image/upload/v1738828527/official/avatar-2_gjezok.webp",
        },
        {
          description:
            "Bladerunner gave our brand the transformation it needed. Their team created a brand identity that perfectly reflects our innovative spirit and technical expertise. The new identity has been a game-changer in helping us stand out in a competitive market. I recommend them for anyone!",
          name: "Michael Grant",
          designation: "CEO, Code Decode Labs",
          avatar:
            "https://res.cloudinary.com/dindu/image/upload/v1738827290/official/avatar_k9qoa0.webp",
        },
        {
          description:
            "As a growing company, we needed a website that was professional, user-friendly, and aligned with our brand values. The team at Bladerunner exceeded our expectations. From initial brainstorming to the final launch, their attention to detail and creative vision were unmatched. ",
          name: "Zoe Kilman",
          designation: "COO, Studionna",
          avatar:
            "https://res.cloudinary.com/dindu/image/upload/v1738828528/official/avatar-3_zhzlbs.webp",
        },
        {
          description:
            "As a growing company, we needed a website that was professional, user-friendly, and aligned with our brand values. The team at Bladerunner exceeded our expectations. From initial brainstorming to the final launch, their attention to detail and creative vision were unmatched.",
          name: "Sarah Jenkins",
          designation: "CMO, Proxima",
          avatar:
            "https://res.cloudinary.com/dindu/image/upload/v1738828527/official/avatar-2_gjezok.webp",
        },
      ],
    };
  },
};
</script>

<style scoped>
.feedback-card {
  padding: 72px;
  min-height: 572px;
  height: fit-content;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(64px);
}
.mySwiper {
  position: relative;
}
.mySwiper::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 30%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0.21%,
    rgba(7, 7, 14, 0.6) 61.9%,
    rgba(7, 7, 14, 0.98) 91.9%
  );
  top: 0;
  right: 0;
  z-index: 3;
}
.mySwiper::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 30%;
  background: linear-gradient(
    90deg,
    rgba(7, 7, 14, 0.98) 8.1%,
    rgba(7, 7, 14, 0.6) 38.9%,
    rgba(255, 255, 255, 0) 99.21%
  );

  top: 0;
  left: 0;
  z-index: 70;
}
</style>
