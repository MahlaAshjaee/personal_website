<template>
  <section id="work-experience" class="w-full py-14 px-10 bg-white" dir="rtl">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center select-none">
        سوابق کاری
        <span class="text-orange-400">من</span>
      </h2>
      <div class="relative grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div
          class="hidden md:block absolute top-16 left-1/2 z-0 h-[calc(100%-4rem)]"
          style="transform: translateX(-50%)"
        >
          <div class="relative w-0.5 h-full border-l-4 border-dashed border-orange-200">
            <span
              class="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border-4 border-orange-300 bg-orange-400 top-0"
            ></span>
            <span
              class="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border-4 border-orange-300 bg-orange-400 top-1/2 -translate-y-1/2"
            ></span>
            <span
              class="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border-4 border-orange-300 bg-orange-400 bottom-0"
            ></span>
          </div>
        </div>

        <div class="md:col-start-1 flex flex-col items-end md:pl-20 pt-10 md:py-16 z-10">
          <span class="block font-bold text-lg md:text-xl text-zinc-800">Red Company</span>
          <span class="text-xs text-gray-500 mt-1">آبان ۱۴۰۳ – فروردین ۱۴۰۴</span>
        </div>
        <div class="md:col-start-2 flex flex-col items-start md:pr-20 pt-4 md:py-16 z-10">
          <span class="block font-bold text-lg md:text-xl text-zinc-800"
            >توسعه‌دهنده فرانت‌اند</span
          >
          <p class="text-gray-500 mt-1 text-sm leading-relaxed max-w-xs">
            پیاده‌سازی وب‌سایت‌های مدرن و ریسپانسیو با React.js و Tailwind بهبود عملکرد رابط کاربری
            و همکاری در توسعه پروژه‌های حرفه‌ای
          </p>
        </div>

        <div class="md:col-start-1 flex flex-col items-end md:pl-20 pt-10 md:py-8 z-10">
          <span class="block font-bold text-lg md:text-xl text-zinc-800">Tat Family</span>
          <span class="text-xs text-gray-500 mt-1">آذر ۱۴۰۲ – خرداد ۱۴۰۳</span>
        </div>
        <div class="md:col-start-2 flex flex-col items-start md:pr-20 pt-4 md:py-8 z-10">
          <span class="block font-bold text-lg md:text-xl text-zinc-800"
            >توسعه‌دهنده فرانت‌اند</span
          >
          <p class="text-gray-500 mt-1 text-sm leading-relaxed max-w-xs">
            مشارکت در طراحی و توسعه رابط کاربری پروژه‌ها، بهینه‌سازی تجربه کاربر و رفع باگ
          </p>
        </div>

        <div class="md:col-start-1 flex flex-col items-end md:pl-20 pt-10 md:py-16 z-10">
          <span class="block font-bold text-lg md:text-xl text-zinc-800"> سابقه فریلنسری </span>
          <span class="text-xs text-gray-500 mt-1">۱۴۰۲ تا اکنون</span>
        </div>
        <div class="md:col-start-2 flex flex-col items-start md:pr-20 py-4 md:py-16 z-10">
          <span class="block font-bold text-lg md:text-xl text-zinc-800"
            >فرانت‌اند دولوپر (فریلنسر)</span
          >
          <p class="text-gray-500 mt-1 text-sm leading-relaxed max-w-xs">
            همکاری با چندین استارتاپ و شرکت، طراحی UI و توسعه پروژه‌های اختصاصی SPA با Vue و React
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
