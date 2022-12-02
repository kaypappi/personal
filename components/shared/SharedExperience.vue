<template>
    <div ref="shw" class="grid grid-cols-12 items-center shw">
        <img class="col-span-1" :src="images[experience.logo]" alt="logo">
        <h4 class=" col-span-10 md:col-span-7 ml-2 mr-4 md:ml-4 md:mr-12 text-xl font-aeonik-bold">
            {{ experience.role }}
            <div class=" col-span-3  md:hidden">
                <h5 class=" text-base font-aeonik-bold">{{ experience.company }}</h5>
                <h6 class="text-xs text-gray-400">{{ experience.startDate }} - {{ experience.endDate }}</h6>
            </div>
        </h4>
        <div class=" col-span-3 hidden md:block">
            <h5 class=" text-base font-aeonik-bold">{{ experience.company }}</h5>
            <h6 class="text-xs text-gray-400">{{ experience.startDate }} - {{ experience.endDate }}</h6>
        </div>
    </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import { filename } from 'pathe/utils';
const props=defineProps({
    experience: Object
})


const glob = import.meta.glob('~/assets/svgs/*', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);


</script>