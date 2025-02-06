<template>
  <section>
    <div class="h-[240px]"></div>
    <div class="container">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="grid gap-6">
          <div class="contact-card">
            <h3 class="text-base text-[#C4C4C6] mb-5">KEY BENEFITS</h3>
            <div class="h-[20px]"></div>
            <h2
              class="text-[56px] font-bold text-white font-dela leading-[120%]"
            >
              Make <span class="text-[#32FAC8]"> Inquiries </span>
            </h2>
            <div class="h-[32px]"></div>
            <p class="text-[18px] text-[#C4C4C6] leading-[28px]">
              Want to get in touch? Use the form, or click the icons below. We
              aim to get back to all inquiries within 24 hours, looking forward
              to hearing from you.
            </p>
            <div class="h-[32px]"></div>
            <div class="flex items-center gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738830953/official/call_j6pfjz.svg"
                  alt="Call Us"
                  class="h-[28px] w-[28px]"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738831058/official/sms_rgf35w.svg"
                  alt=""
                  class="h-[28px] w-[28px]"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738831133/official/Wassap_ksipyg.svg"
                  alt="Whatsapp"
                  class="h-[28px] w-[28px]"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738831132/official/Insta_rjowen.svg"
                  alt="Instagram"
                  class="h-[28px] w-[28px]"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738831132/official/ExTweet_tj3iya.svg"
                  alt="Twitter"
                  class="h-[28px] w-[28px]"
                />
              </a>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dindu/image/upload/v1738831762/official/contact_ukjaqh.webp"
            alt="Contact"
          />
        </div>
        <div class="contact-card">
          <form>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  class="text-[16px] leading-[24px] text-[#C4C4C6]"
                  for="fullName"
                  >Full Name</label
                >
                <div class="h-[8px]"></div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Smith"
                  class="form-item"
                  required
                />
              </div>
              <div>
                <label
                  class="text-[16px] leading-[24px] text-[#C4C4C6]"
                  for="email"
                  >Email Address</label
                >
                <div class="h-[8px]"></div>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  class="form-item"
                  required
                />
              </div>
            </div>
            <div class="h-[20px]"></div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  class="text-[16px] leading-[24px] text-[#C4C4C6]"
                  for="company"
                  >Company</label
                >
                <div class="h-[8px]"></div>
                <input
                  type="text"
                  name="company"
                  placeholder="Comcast"
                  class="form-item"
                  required
                />
              </div>
              <div>
                <label
                  class="text-[16px] leading-[24px] text-[#C4C4C6]"
                  for="Role"
                  >Role</label
                >
                <div class="h-[8px]"></div>
                <input
                  type="text"
                  name="Role"
                  placeholder="CEO"
                  class="form-item"
                  required
                />
              </div>
            </div>
            <div class="h-[20px]"></div>
            <div>
              <label
                class="text-[16px] leading-[24px] text-[#C4C4C6]"
                for="message"
                >Message</label
              >
              <div class="h-[8px]"></div>
              <textarea
                name="message"
                placeholder="Write here"
                class="form-item block w-full"
                required
                rows="5"
              ></textarea>
              <div class="h-[48px]"></div>
              <button
                class="text-[#07070E] w-full text-[18px] leading-[28px] action-btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped>
.contact-card {
  padding: 60px 72px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(64px);
}
.form-item {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(64px);
  padding: 12px 20px;
  overflow: hidden;
  color: #8c8c93;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  outline: none;
}
.action-btn {
  border-radius: 8px;
  border: 1px solid #32fac8;
  background: #32fac8;
  padding: 16px 22px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
</style>
