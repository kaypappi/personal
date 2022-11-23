<template>
<div class="grid grid-cols-12 items-center">
    <img class="col-span-2" :src="`/assets/svgs/${experience.logo}.svg`" alt="logo">
    <h4 class=" col-span-7 ml-4 mr-12 text-xl font-aeonik-bold">{{experience.role}}</h4>
    <div class=" col-span-3">
        <h5 class=" text-base font-aeonik-bold">{{experience.company}}</h5>
        <h6 class="text-xs text-gray-400">{{experience.startDate}} - {{experience.endDate}}</h6>
    </div>
</div>
</template>
<script setup>
defineProps({
    experience:Object
})
</script>