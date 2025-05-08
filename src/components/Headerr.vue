<template>
  <header class="w-full px-8 md:px-20 py-2 mt-4 fixed top-0 left-0 z-50">
    <nav
      class="flex justify-between items-center bg-zinc-900 rounded-full mx-auto shadow-lg w-full px-2 sm:px-5 h-16 md:h-24"
      dir="rtl"
    >
      <div class="hidden md:flex items-center space-x-0 space-x-reverse">
        <a
          href="#home"
          @click.prevent="handleClick('home', '#home')"
          :class="[
            'text-white rounded-full px-5 py-2 mx-1 text-sm lg:text-lg hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'home' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          خانه
        </a>
        <a
          href="#services"
          @click.prevent="handleClick('services', '#services')"
          :class="[
            'text-white rounded-full px-5 py-2 mx-1 text-sm lg:text-lg hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'services' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          خدمات
        </a>
        <a
          href="#work-experience"
          @click.prevent="handleClick('work-experience', '#work-experience')"
          :class="[
            'text-white rounded-full px-5 py-2 mx-1 text-sm lg:text-lg hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'work-experience' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          سوابق کاری
        </a>
      </div>

      <div class="flex items-center px-2">
        <img
          src="/logoMe.png"
          alt="لوگوی مهلا حصاری"
          class="rounded-full w-9 h-9 sm:w-11 sm:h-11 mx-1 shadow"
        />
        <span class="font-extrabold text-white text-base md:text-2xl"> مهلا حصاری </span>
      </div>

      <div class="hidden md:flex items-center space-x-0 space-x-reverse">
        <a
          href="#why-hire-me"
          @click.prevent="handleClick('why-hire-me', '#why-hire-me')"
          :class="[
            'text-white rounded-full px-5 py-2 mx-1 text-sm lg:text-lg hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'why-hire-me' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          درباره من
        </a>
        <a
          href="#projects"
          @click.prevent="handleClick('projects', '#projects')"
          :class="[
            'text-white rounded-full px-5 py-2 mx-1 text-sm lg:text-lg hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'projects' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          پروژه‌ها
        </a>
        <a
          href="#footer"
          @click.prevent="handleClick('footer', '#footer')"
          :class="[
            'text-white rounded-full px-5 py-2 mx-1 text-sm lg:text-lg hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'footer' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          تماس با من
        </a>
      </div>

      <button
        @click="toggleMenu"
        class="md:hidden flex items-center justify-center p-2 text-white hover:text-orange-400 focus:outline-none"
        aria-label="باز کردن منو"
      >
        <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden mt-3 rounded-2xl bg-zinc-900/95 px-3 py-4 shadow-lg flex flex-col items-center space-y-3 ring-1 ring-orange-400"
      >
        <a
          @click="handleMobileClick('home', '#home')"
          href="#home"
          :class="[
            'text-white rounded-full w-full py-2 text-center hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'home' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          خانه
        </a>
        <a
          @click="handleMobileClick('services', '#services')"
          href="#services"
          :class="[
            'text-white rounded-full w-full py-2 text-center hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'services' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          خدمات
        </a>
        <a
          @click="handleMobileClick('work-experience', '#work-experience')"
          href="#work-experience"
          :class="[
            'text-white rounded-full w-full py-2 text-center hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'work-experience' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          سوابق کاری
        </a>
        <a
          @click="handleMobileClick('why-hire-me', '#why-hire-me')"
          href="#why-hire-me"
          :class="[
            'text-white rounded-full w-full py-2 text-center hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'why-hire-me' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          درباره من
        </a>
        <a
          @click="handleMobileClick('projects', '#projects')"
          href="#projects"
          :class="[
            'text-white rounded-full w-full py-2 text-center hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'projects' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          پروژه‌ها
        </a>
        <a
          @click="handleMobileClick('footer', '#footer')"
          href="#footer"
          :class="[
            'text-white rounded-full w-full py-2 text-center hover:bg-orange-400 hover:text-white transition',
            activeMenu === 'footer' ? 'bg-orange-400 text-white font-bold' : ''
          ]"
        >
          تماس با من
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const activeMenu = ref("home");

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

function handleClick(menu, href) {
  activeMenu.value = menu;
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function handleMobileClick(menu, href) {
  activeMenu.value = menu;
  closeMenu();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
