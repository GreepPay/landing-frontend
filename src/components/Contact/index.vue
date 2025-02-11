<template>
  <section>
    <div class="h-[120px] xl:h-[240px]"></div>
    <div class="container">
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="grid gap-6">
          <div class="contact-card">
            <h3 class="text-[12px] sm:text-base text-[#C4C4C6] mb-5">
              CONTACT US
            </h3>
            <div class="h-[12px] sm:h-[20px]"></div>
            <h2
              class="text-[29px] xl:text-[56px] font-bold text-white font-dela leading-[120%]"
            >
              Make <span class="text-[#32FAC8]"> Inquiries </span>
            </h2>
            <div class="h-[20px] sm:h-[32px]"></div>
            <p
              class="text-[16px] sm:text-[18px] text-[#C4C4C6] leading-[24px] sm:leading-[28px]"
            >
              Want to get in touch? Use the form, or click the icons below. We
              aim to get back to all inquiries within 24 hours, looking forward
              to hearing from you.
            </p>
            <div class="h-[20px] sm:h-[32px]"></div>
            <div class="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/showcase/greep-pay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1739256596/line-md_linkedin_gcpfh3.svg"
                  alt="Linkedin"
                  class="h-[28px] opacity-[80%] w-[28px]"
                />
              </a>
              <a
                href="https://res.cloudinary.com/dindu/image/upload/v1739256596/mingcute_tiktok-fill_fbgpcn.svg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1739256596/mingcute_tiktok-fill_fbgpcn.svg"
                  alt=""
                  class="h-[28px] opacity-[80%] w-[28px]"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738831133/official/Wassap_ksipyg.svg"
                  alt="Whatsapp"
                  class="h-[28px] w-[28px]"
                />
              </a>
              <a
                href="https://www.instagram.com/greeppay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dindu/image/upload/v1738831132/official/Insta_rjowen.svg"
                  alt="Instagram"
                  class="h-[28px] w-[28px]"
                />
              </a>
              <a
                href="https://x.com/Greeppay"
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <form
            id="my-form"
            action="https://formspree.io/f/xvgzbzde"
            method="POST"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
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
            <div class="grid sm:grid-cols-2 gap-5 sm:gap-4">
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
                id="my-form-button"
                class="text-[#07070E] cursor-pointer flex items-center justify-center font-semibold w-full text-[18px] leading-[28px] action-btn"
                :disabled="loading"
              >
                <img
                  v-if="loading"
                  class="animate-spin h-5 w-5 invert !my-1"
                  src="https://res.cloudinary.com/dindu/image/upload/v1739259354/icon-park_loading-four_wmiqvu.svg"
                  alt=""
                />
                <span v-else class="!font-semibold"> Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const formEle = ref();

import { toast, type ToastOptions } from "vue3-toastify";
const loading = ref(false);

async function handleSubmit(event) {
  event.preventDefault();
  loading.value = true;
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: formEle.value.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        toast("Thanks for your submission!", {
          type: "success",
          autoClose: 1000,
          position: toast.POSITION.TOP_RIGHT,
          transition: "slide",
          hideProgressBar: true,
        } as ToastOptions);

        formEle.value.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            toast(data["errors"].map((error) => error["message"]).join(", "), {
              type: "error",
              autoClose: 1000,
              position: toast.POSITION.TOP_RIGHT,
              transition: "slide",
              hideProgressBar: true,
            } as ToastOptions);
          } else {
            toast("Oops! There was a problem submitting your form", {
              type: "error",
              autoClose: 1000,
              position: toast.POSITION.TOP_RIGHT,
              transition: "slide",
              hideProgressBar: true,
            } as ToastOptions);
          }
        });
      }
    })
    .catch((error) => {
      toast("Oops! There was a problem submitting your form", {
        type: "error",
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
        transition: "slide",
      } as ToastOptions);
    })
    .finally(() => {
      loading.value = false;
    });
}

onMounted(() => {
  const form = document.getElementById("my-form");
  formEle.value = form;
  form.addEventListener("submit", handleSubmit);
});
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
  width: 100%;
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
  font-weight: 600;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

@media (max-width: 768px) {
  .contact-card {
    padding: 32px 20px;
    text-align: left;
  }
}
</style>
