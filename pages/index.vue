<template>
  <div ref="band">
    <shared-banner :opacity="calcOpacity" ref="bannerRef" />
    <SharedNav :opacity="calcOpacity" id="navRef" ref="navRef" class="z-20 " />
    <div class="z-10">
      <HomeExperience />
      <HomePhilosophy />
      <HomeSkillset />
    </div>
  </div>
</template>

<script setup>
import { useElementBounding } from '@vueuse/core'
const navRef = ref(null)
const initialNavPosition = ref(null)

const { top } = useElementBounding(navRef)
const calcOpacity = computed(() => {
  if(top.value===0) return 0
  if (!top.value || top.value < 0) return 1
  return (top.value) / initialNavPosition.value
})
onMounted(() => {
  if (!initialNavPosition.value) {
    initialNavPosition.value = top.value
  }
})
</script>

<style>

</style>