<template>
  <section class="bg-white text-gray-800 py-16 px-8 sm:px-16 rounded-md shadow-md text-center">
    <h2 class="max-md:text-2xl text-4xl font-bold mb-6 max-md:leading-relaxed">
      <span class="text-orange-400">ایده فوق‌العاده‌ای</span> برای پروژه دارید؟ بیاید با هم صحبت
      کنیم
    </h2>
    <p class="max-md:text-sm text-xl mb-6 max-md:leading-relaxed">
      اگر پروژه‌ای منحصر به فرد و حرفه‌ای برای اجرا دارید، می‌توانید همین حالا ارتباط برقرار کنید.
      تعهد ما طراحی حرفه‌ای و تضمین کیفیت است.
    </p>
    <form
      @submit.prevent="saveEmail"
      class="flex items-center justify-center gap-4 w-full max-w-2xl mx-auto relative py-4"
    >
      <div
        class="flex items-center bg-gray-100 border border-gray-300 rounded-full shadow-sm w-full"
      >
        <span class="px-4 text-orange-400">
          <Email :size="30" fill="#fb923c" />
        </span>
        <input
          v-model="email"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          class="flex-1 bg-transparent text-gray-800 placeholder-gray-400 py-3 text-base focus:outline-none"
        />
        <a
          href="#"
          @click.prevent="saveEmail"
          class="bg-orange-400 text-white text-base sm:text-lg sm:px-6 py-2 px-4 m-2 rounded-full hover:bg-orange-500 transition shadow-md"
        >
          ارسال
        </a>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Email from "vue-material-design-icons/Email.vue";

const email = ref("");

const validateEmail = (emailToValidate) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailToValidate); 
};

const saveEmail = () => {
  if (email.value && validateEmail(email.value)) {
    const storedEmails = JSON.parse(localStorage.getItem("userEmails")) || [];

    storedEmails.push(email.value);

    localStorage.setItem("userEmails", JSON.stringify(storedEmails));

    alert("ایمیل شما ذخیره شد: " + email.value);
    email.value = "";
  } else if (!email.value) {
    alert("لطفاً ایمیل خود را وارد کنید.");
  } else {
    alert("ایمیل وارد شده معتبر نیست. لطفاً ایمیل معتبر وارد کنید.");
  }
};
</script>
