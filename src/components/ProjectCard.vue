<template>
  <div
    class="bg-gray-100 bg-opacity-10 backdrop-blur-sm border-none rounded-xl flex flex-col justify-between hover:shadow-xl transition-shadow min-h-[400px]"
  >
    <img :src="img" class="rounded-t-xl w-full h-40 object-cover border-b-2 border-orange-500" />

    <div class="p-6 flex flex-col justify-between flex-1">
      <div>
        <div class="font-bold text-[18px] mb-2 text-orange-500">{{ title }}</div>
        <div class="text-gray-300 text-[15px] mb-3 leading-6">{{ desc }}</div>
      </div>

      <button
        @click="goto"
        class="bg-orange-500 hover:bg-orange-600 transition-all text-white rounded-lg px-4 py-2 mt-2 font-semibold"
      >
        اطلاعات بیشتر
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "img", "desc", "link"]);
function goto() {
  window.open(props.link, "_blank");
}
</script>

<style scoped>
div {
  transition: transform 0.3s ease-in-out; 
}
</style>
