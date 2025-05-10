<template>
  <section
    id="services"
    class="relative w-full pt-8 pb-14 px-12 rounded-t-3xl overflow-hidden"
    style="background: url(&quot;/Frame.png&quot;) center/cover no-repeat"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between items-center mb-10">
        <h2
          class="max-md:bg-[#1e1d1d] max-md:p-3 max-md:rounded-xl max-md:mb-0 text-3xl md:text-4xl font-bold text-white drop-shadow"
        >
          خدمات
          <span class="text-orange-400">من</span>
        </h2>
        <div
          class="max-md:hidden text-white/90 leading-7 max-w-lg text-base mt-2 md:mt-0 text-center md:text-right bg-[#1e1d1d] p-3 rounded-xl"
        >
          تخصص من در توسعه رابط کاربری مدرن و ریسپانسیو با بهره‌گیری از جدیدترین تکنولوژی‌های وب
          است. پروژه‌های شما را با بهترین کیفیت و بر اساس نیاز واقعی کسب‌وکار پیاده‌سازی می‌کنم.
        </div>
      </div>

      <Swiper
        :modules="[Pagination, Navigation]"
        :slides-per-view="1"
        :space-between="32"
        :pagination="{ clickable: true }"
        navigation
        :loop="false"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="!overflow-visible"
      >
        <SwiperSlide>
          <div
            class="group rounded-2xl border border-white/50 bg-white/90 backdrop-blur-md shadow-2xl p-8 transition-transform duration-200 hover:shadow-3xl flex flex-col items-center min-h-[420px] relative justify-between"
          >
            <span
              class="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-500 shadow"
            >
              <PaletteIcon :size="40" fill="#fb923c" />
            </span>
            <h3 class="font-bold text-xl mb-2 text-zinc-800">طراحی UI/UX اختصاصی</h3>
            <p class="text-gray-500 text-sm mb-4 text-center leading-loose">
              طراحی رابط کاربری مدرن و کاربرپسند متناسب با هدف و هویت پروژه شما.<br />
              ارائه وایرفریم و نمونه اولیه (Prototype) با رعایت اصول تجربه کاربری، رنگ‌بندی و
              تایپوگرافی حرفه‌ای.
            </p>
            <div class="flex flex-wrap mt-auto justify-center gap-2">
              <span class="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-lg"
                >UI Design</span
              >
              <span class="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded-lg">UX Design</span>
              <span class="bg-violet-100 text-violet-700 text-xs px-2 py-1 rounded-lg">Figma</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="group rounded-2xl border border-white/50 bg-white/90 backdrop-blur-md shadow-2xl p-8 transition-transform duration-200 hover:shadow-3xl flex flex-col items-center min-h-[420px] relative justify-between"
          >
            <span
              class="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-500 shadow"
            >
              <MonitorIcon :size="40" fill="#fb923c" />
            </span>
            <h3 class="font-bold text-xl mb-2 text-zinc-800">توسعه فرانت‌اند مدرن</h3>
            <p class="text-gray-500 text-sm mb-4 text-center leading-loose">
              پیاده‌سازی رابط کاربری ریسپانسیو و کاملاً بهینه با استفاده از:<br />
              <b>HTML</b>، <b>CSS</b>، <b>JavaScript</b>، <b>React.js</b>، <b>Vue.js</b>،
              <b>Tailwind CSS</b> و <b>Bootstrap</b>.<br />
              سرعت اجرا، کیفیت کد و تجربه کاربری عالی برای هر پلتفرم.
            </p>
            <div class="flex flex-wrap mt-auto justify-center gap-2">
              <span class="bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded-lg">React</span>
              <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-lg">Vue</span>
              <span class="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-lg"
                >Tailwind</span
              >
              <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">Bootstrap</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-lg">MUI</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="group rounded-2xl border border-white/50 bg-white/90 backdrop-blur-md shadow-2xl p-8 transition-transform duration-200 hover:shadow-3xl flex flex-col items-center min-h-[420px] relative justify-between"
          >
            <span
              class="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-500 shadow"
            >
              <RocketLaunchIcon :size="40" fill="#fb923c" />
            </span>
            <h3 class="font-bold text-xl mb-2 text-zinc-800">لندینگ‌پیج حرفه‌ای</h3>
            <p class="text-gray-500 text-sm mb-4 text-center leading-loose">
              طراحی و پیاده‌سازی صفحه فرود جذاب و تبدیل‌محور برای<br />
              معرفی کسب‌وکار، محصولات یا کمپین تبلیغاتی شما.<br />
              تاکید بر طراحی مدرن، سرعت بارگذاری و ریسپانسیو بودن.
            </p>
            <div class="flex flex-wrap mt-auto justify-center gap-8">
              <span class="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-lg"
                >Landing Page</span
              >
              <span class="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-lg"
                >Responsive</span
              >
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import PaletteIcon from "vue-material-design-icons/Palette.vue";
import MonitorIcon from "vue-material-design-icons/Monitor.vue";
import RocketLaunchIcon from "vue-material-design-icons/RocketLaunch.vue";
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  background: #fb923c !important;
  color: #fff !important;
  width: 38px !important;
  height: 38px !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 10 !important;
  transition:
    background 0.15s,
    opacity 0.15s;
}

.swiper-button-next {
  left: -40px !important;
}
.swiper-button-prev {
  right: -40px !important;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1.3rem !important;
  font-weight: bold !important;
  color: #fff !important;
}

.swiper-button-next svg,
.swiper-button-prev svg {
  fill: #fff !important;
  width: 20px !important;
  height: 20px !important;
}

.swiper-button-disabled {
  opacity: 0.4 !important;
  pointer-events: none !important;
  background: #fb923c !important;
  color: #fff !important;
}
.swiper-pagination-bullet {
  background: #fb923c !important;
  opacity: 0.7;
  width: 10px !important;
  height: 10px !important;
  transition: all 0.3s;
}

.swiper-pagination-bullet-active {
  background: #fb923c !important;
  opacity: 1;
  scale: 1.1;
  box-shadow: 0 0 8px rgba(251, 146, 60, 0.6);
}
.swiper-pagination {
  position: absolute !important;
  bottom: -30px !important;
}

@media (min-width: 1024px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
}
</style>
