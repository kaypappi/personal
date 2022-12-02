<template>
    <div class="experience px-4 py-32 md:px-40 relative z-10  text-white grid grid-cols-1 md:grid-cols-2">
        <div >
            <h4 class=" text-sm">EXPERIENCE</h4>
            <h1 class="text-5xl my-4 font-aeonik-bold max-w-md">Companies I have worked with in the past</h1>
            <h6 class=" text-xs text-gray-400">Always passionate about building useful products</h6>
        </div>
        <div >
            <SharedExperience v-for="experience in experiences" :key="experience.company" :experience="experience" class=" mt-10" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const experiences = ref([
    { logo: 'Logo', role: 'Lead Frontend Engineer', company: 'Blackcopper', startDate: 'JUN 2021', endDate: 'Date' },
    { logo: 'parkway', role: 'Frontend Engineer', company: 'Parkway', startDate: 'APR 2020', endDate: 'JUN 2021' },
    { logo: 'kraks', role: 'Frontend Engineer', company: 'Kraksmedia', startDate: 'JAN 2019', endDate: 'APR 2020' },
    { logo: 'teksight', role: 'Web Developer Intern', company: 'Teksight Edge', startDate: 'MAY 2017', endDate: 'NOV 2017' },
])
</script>
<style>

</style>