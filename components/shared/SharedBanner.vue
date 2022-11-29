<template>
  <div :style="{opacity}" class=" sticky  top-0 z-0 text-white py-20 md:py-32 px-8 text-center relative">
    <h1 class=" mx-auto font-aeonik-bold text-3xl md:text-7xl max-w-5xl leading-normal font-extrabold">Software engineer, based in Lagos - Strategically building things that actually work.</h1>
    <div class=" hidden md:flex absolute -bottom-14 right-20 bg-white rounded-full w-56 h-56 items-center justify-center">
      <img class=" w-54 mr-6 mb-28" src="../../assets/imgs/hibit.png" alt="">
    </div>
  </div>
</template>

<script setup>
defineProps({
  opacity: Number,
})
</script>

<style>

</style>