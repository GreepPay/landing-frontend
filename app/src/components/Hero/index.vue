<template>
    <div class="relative !w-full !mt-16">
        <div
            class="absolute w-full h-full z-[-1] flex items-center justify-center"
        >
            <img
                src="https://res.cloudinary.com/dindu/image/upload/v1738844078/official/Subtract_becelq.svg"
                alt=""
                class="w-[694.12px] h-[480px]"
            />
            <div class="blur-bg"></div>
        </div>
        <div class="h-[34px] sm:h-[108px]"></div>
        <div
            class="grid !px-5 xl:px-0 xl:grid-cols-2 gap-y-16 gap-x-[84px] relative z-2 h-full max-w-[1200px] !mx-auto items-center justify-center text-white"
        >
            <div class="!max-w-[604px] !w-full !mx-auto">
                <p class="text-xs md:text-sm font-bold font-inter mb-5">
                    🚀 THE FUTURE OF BORDERLESS PAYMENTS
                </p>
                <h1
                    class="text-[35px] xl:text-[63px] font-bold font-dela leading-[38.5px] xl:leading-[70.4px]"
                >
                    Spend <span class="text-[#32FAC8]">African</span> Currencies
                    <span class="text-[#32FAC8]">Globally</span>
                </h1>
                <p class="font-inter text-[#C4C4C6] !mt-5 !sm:mt-7">
                    <b style="font-weight: bolder">Collect Payments</b> in
                    African currencies and receive them instantly a chosen
                    default currency while earning GRP tokens.
                    <b style="font-weight: bolder">Make Withdrawals</b>
                    from your wallet to the bank accounts of different
                    currencies - Crypto, African, Turkish, USD, Euro, etc.
                </p>
                <div
                    class="!mt-5 !sm:mt-8 flex flex-col gap-y-4 md:gap-y-0 md:flex-row gap-x-6 max-w-[204px] md:max-w-[100%]"
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf3Y6Lr1QxtG4Pxyg7fC3lqubrS4f1Wd30wE81VMPFWtjRgug/viewform"
                        class="bg-[#32FAC8] cursor-pointer gap-x-2 flex text-center text-base items-center !py-4 !px-5 rounded-lg !font-inter !font-bold text-[#07070E]"
                    >
                        Join Our Waitlist
                        <Arrow class="!w-4 !h-4" />
                    </a>
                    <button
                        class="bg-transparent w-[133px] md:w-fit cursor-pointer border-2 border-[#32FAC8] !text-base !text-[#32FAC8] !py-4 !px-5 rounded-lg !font-inter !font-bold"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            <div class="flex justify-center">
                <img
                    data-aos="fade-in"
                    class="h-auto w-[500px] xl:w-full object-contain"
                    src="/images/home-image.png"
                />
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
