<template>
  <footer id="footer" class="bg-zinc-900 text-gray-100 py-12">
    <div class="max-md:px-10 px-20 mx-auto">
      <div class="items-start max-md:text-center">
        <h2 class="text-2xl font-bold">بیایید در ارتباط باشیم</h2>
      </div>

      <div class="border-t border-zinc-700 my-6"></div>

      <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        <div class="flex flex-col items-start max-md:items-center gap-4 w-full lg:w-1/3">
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

        <div class="flex flex-col lg:flex-row justify-between items-start gap-8 w-full lg:w-2/3">
          <div class="w-full lg:w-1/3 flex flex-col lg:pr-12 max-md:text-center text-gray-200">
            <h3 class="text-lg font-bold mb-4 max-md:text-center">اطلاعات تماس</h3>
            <ul class="space-y-2">
              <li><span>09117291835</span></li>
              <li><span>ashjaee74@gmail.com</span></li>
            </ul>
          </div>

          <div class="w-full lg:w-1/3 text-gray-200">
            <h3 class="max-md:text-center text-lg font-bold mb-4">دریافت فایل رزومه</h3>
            <form @submit.prevent="handleSubmit">
              <div class="flex items-center">
                <input
                  v-model="email"
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  class="px-4 py-2 rounded-r-full focus:outline-none w-full text-black"
                  required
                />
                <button
                  type="submit"
                  class="bg-orange-400 text-white font-bold rounded-l-full px-4 py-2 hover:bg-orange-500 transition focus:outline-none"
                >
                  ارسال
                </button>
              </div>
            </form>
            <p v-if="message" class="mt-4 text-orange-400">{{ message }}</p>
          </div>
        </div>
      </div>

      <div class="border-t border-zinc-700 my-6"></div>

      <div class="text-sm text-center text-gray-300">© تمامی حقوق محفوظ است 2025 - مهلا حصاری</div>
    </div>
  </footer>
</template>

<script setup>
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
      "service_rwx3mvg",
      "template_y9bj9se",
      templateParams,
      "7dTHohzIgCX-xYSU-",
    );

    message.value = "رزومه با موفقیت ارسال شد!";
    email.value = "";
  } catch (error) {
    console.error(error);
    message.value = "خطایی رخ داد، لطفاً دوباره تلاش کنید.";
  }
};
</script>
