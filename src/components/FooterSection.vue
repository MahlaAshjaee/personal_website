<template>
  <footer id="footer" class="bg-zinc-900 text-gray-100 py-12">
    <div class="max-md:px-10 px-20 mx-auto">
      <!-- هدر بخش -->
      <div class="text-right max-md:text-center">
        <h2 class="text-2xl font-bold">بیایید در ارتباط باشیم</h2>
      </div>

      <div class="border-t border-zinc-700 my-6 py-4"></div>

      <!-- محتوای اصلی در قالب گرید -->
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <!-- ستون 1: اطلاعات معرفی -->
        <div class="flex flex-col col-span-2 items-start max-md:items-center max-md:mb-2 gap-4">
          <div class="flex items-center gap-2">
            <img
              src="/logoMe.png"
              alt="لوگوی مهلا حصاری"
              class="rounded-full w-9 h-9 sm:w-11 sm:h-11 shadow"
            />
            <span class="text-lg font-bold text-gray-100">مهلا حصاری</span>
          </div>
          <p class="text-md max-md:text-center lg:pl-10 text-gray-200 leading-7">
            مهلا حصاری، طراح و توسعه‌دهنده فرانت‌اند وب. با عشق به کدنویسی، رابط‌های کاربری زیبا و
            کارآمد برای شما خلق می‌کنم.
          </p>
        </div>
        <!-- ستون 3: اطلاعات تماس -->
        <div class="flex flex-col text-right lg:text-start leading-6">
          <h3 class="text-lg font-bold mb-3">اطلاعات تماس</h3>
          <ul class="space-y-2 text-gray-200">
            <li>
              <span class="font-bold">شماره تماس : </span><br />
              09117291835
            </li>
            <li>
              <span class="font-bold">ایمیل : </span><br />
              ashjaee74@gmail.com
            </li>
          </ul>
        </div>

        <!-- ستون 2: شبکه‌های اجتماعی -->
        <div class="flex flex-col items-right pr-2 gap-4 max-md:mb-1">
          <h3 class="text-lg font-bold">شبکه‌های اجتماعی</h3>
          <!-- تلگرام -->
          <a
            href="https://t.me/Mahlahesari"
            target="_blank"
            class="hover:text-orange-400 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 240 240"
              fill="#0088cc"
              class="w-6 h-6"
            >
              <circle cx="120" cy="120" r="120" fill="#0088cc" />
              <path
                d="M182.125 74.679c.9-.049 1.657.242 2.056.69.4.449.523 1.143.324 1.897l-21.542 94.824c-.3 1.219-1.163 1.702-2.052 1.766-.888.064-2.04-.235-3.236-1.152l-29.885-22.144-14.493 13.944c-.992.975-1.818 1.801-3.625 1.801l5.2-34.543 62.7-56.249c.826-.782-.18-1.219-1.288-.435l-77.455 50.849-33.387-10.462c-1.146-.358-1.927-.849-2.16-1.764-.233-.915.27-1.805 1.49-2.266L179.553 75.05c.232-.091.464-.127.687-.142Z"
                fill="#fff"
              />
            </svg>
            <span class="text-sm font-bold">تلگرام</span>
          </a>

          <!-- واتساپ -->
          <a
            href="https://wa.me/+989117291835"
            target="_blank"
            class="hover:text-orange-400 flex items-center gap-2"
          >
            <WhatsappIcon class="w-6 h-6 text-[#25D366]" />
            <span class="text-sm font-bold">واتساپ</span>
          </a>

          <!-- اینستاگرام -->
          <a
            href="https://www.instagram.com/mahla.ashjaee"
            target="_blank"
            class="hover:text-orange-400 flex items-center gap-2"
          >
            <InstagramIcon class="w-6 h-6 text-[#E4405F]" />
            <span class="text-sm font-bold">اینستاگرام</span>
          </a>

          <!-- لینکدین -->
          <a
            href="https://www.linkedin.com/in/Mahla Hesari/"
            target="_blank"
            class="hover:text-orange-400 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-7 h-7">
              <rect width="450" height="450" rx="80" fill="#0A66C2" />
              <g transform="scale(0.6) translate(155, 140)">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.67 0 53.49A53.49 53.49 0 0 1 53.79 0a53.5 53.5 0 0 1 53.8 53.49c0 30.18-24.09 54.61-53.8 54.61ZM447.8 448h-92.3V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.8-43.7 31.1-2.2 5.4-2.8 13-2.8 20.6V448h-92.3s1.2-242.1 0-267.1H271v37.9c-0.2 0.3-0.4 0.6-0.6 0.9h0.6v-0.9c12.2-18.8 34-45.6 82.7-45.6 60.4 0 105.7 39.5 105.7 124.3V448z"
                  fill="#fff"
                />
              </g>
            </svg>
            <span class="text-sm font-bold">لینکدین</span>
          </a>
        </div>

        <!-- ستون‌های 4-5: فرم رزومه -->
        <div class="col-span-2">
          <h3 class="text-lg font-bold mb-4 text-center lg:text-start">دریافت فایل رزومه</h3>
          <form
            @submit.prevent="handleSubmit"
            class="flex flex-col items-center lg:items-start gap-4"
          >
            <div class="flex items-center w-full">
              <input
                v-model="email"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                class="px-4 py-3 rounded-r-full max-md:w-full w-10/12 focus:outline-none text-black"
                required
              />
              <button
                type="submit"
                class="bg-orange-400 text-white font-bold rounded-l-full px-4 py-3 hover:bg-orange-500 transition focus:outline-none"
              >
                ارسال
              </button>
            </div>
            <p v-if="message" class="mt-2 text-orange-400">{{ message }}</p>
          </form>
        </div>
      </div>

      <div class="border-t border-zinc-700 my-8"></div>

      <div class="text-sm text-right max-md:text-center text-gray-300">
        © تمامی حقوق محفوظ است 2025 - مهلا حصاری
      </div>
    </div>
  </footer>
</template>

<script setup>
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import WhatsappIcon from "vue-material-design-icons/Whatsapp.vue";
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const email = ref("");
const message = ref("");

const handleSubmit = async () => {
  if (!email.value) {
    message.value = "لطفاً ایمیل خود را وارد کنید.";
    return;
  }

  const templateParams = {
    email: email.value,
    file_url: window.location.origin + "/MahlaHesari.pdf",
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID,
    );

    message.value = "رزومه با موفقیت ارسال شد!";
    email.value = "";
  } catch (error) {
    console.error(error);
    message.value = "خطایی رخ داد، لطفاً دوباره تلاش کنید.";
  }
};
</script>
