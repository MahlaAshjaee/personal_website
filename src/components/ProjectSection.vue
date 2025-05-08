<template>
  <section
    id="projects"
    class="relative w-full py-10 px-12 rounded-t-3xl overflow-hidden text-white"
    style="background: url(&quot;/Frame1.png&quot;) center/cover no-repeat"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 pt-10">
        <h2 class="max-md:text-2xl text-3xl md:text-4xl font-bold leading-normal">
          پروژه‌هایی که از <span class="text-orange-500">مهارت‌های من</span> صحبت می‌کنند
        </h2>
        <p class="max-md:hidden mt-8 text-xl text-gray-300">
          این بخش شامل پروژه‌هایی است که بنده انجام داده‌ام. همه پروژه‌ها با جزئیات کامل قابل بررسی
          هستند.
        </p>
      </div>

      <div class="block lg:hidden">
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
            <div>
              <ProjectCard
                title="پروژه افزودن مخاطب"
                img="/ContactManagement.png"
                desc="این یک پروژه ری‌اکت است که کاربر می‌تواند مخاطب‌ اضافه کند و آن‌ها را مشاهده، حذف و ویرایش کند و همچنین قابلیت جستجو نیز دارد."
                link="https://github.com/MahlaAshjaee/contact-manager-app"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <ProjectCard
                title="پروژه افزودن مقاله"
                img="/MakingAnArticle.png"
                desc="این یک پروژه جاوااسکریپتی است که کاربر می‌تواند مقاله‌ها را مشاهده، اضافه، حذف، ویرایش و لایک کند. همچنین قابلیت جستجو نیز دارد."
                link="https://github.com/MahlaAshjaee/javascriptPrj"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <ProjectCard
                title="پروژه سایت شخصی"
                img="/PersonalWebsite.png"
                desc="این پروژه ری‌اکتی سایت شخصی است که اطلاعات و پروژه‌های انجام شده به همراه لینک گیت‌هاب و آیدی شبکه‌های اجتماعی نمایش داده می‌شوند."
                link="https://github.com/MahlaAshjaee/Personalsite"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="justify-center mt-4 w-full hidden gap-10 lg:flex">
        <ProjectCard
          title="پروژه افزودن مخاطب"
          img="/ContactManagement.png"
          desc="این یک پروژه ری‌اکت است که کاربر می‌تواند مخاطب‌ اضافه کند و آن‌ها را مشاهده، حذف و ویرایش کند و همچنین قابلیت جستجو نیز دارد."
          link="https://github.com/MahlaAshjaee/contact-manager-app"
        />
        <ProjectCard
          title="پروژه افزودن مقاله"
          img="/MakingAnArticle.png"
          desc="این یک پروژه جاوااسکریپتی است که کاربر می‌تواند مقاله‌ها را مشاهده، اضافه، حذف، ویرایش و لایک کند. همچنین قابلیت جستجو نیز دارد."
          link="https://github.com/MahlaAshjaee/javascriptPrj"
        />
        <ProjectCard
          title="پروژه سایت شخصی"
          img="/PersonalWebsite.png"
          desc="این پروژه ری‌اکتی سایت شخصی است که اطلاعات و پروژه‌های انجام شده به همراه لینک گیت‌هاب و آیدی شبکه‌های اجتماعی نمایش داده می‌شوند."
          link="https://github.com/MahlaAshjaee/Personalsite"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
</script>
