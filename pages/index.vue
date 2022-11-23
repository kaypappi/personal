<template>
  <div ref="band">
    <shared-banner :opacity="calcOpacity" ref="bannerRef" />
    <SharedNav :opacity="calcOpacity" id="navRef" ref="navRef" class="z-20 " />
    <HomeExperience />
    <HomePhilosophy />
    <HomeSkillset/>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const bannerRef = ref(null)
const navRef = ref(null)
const band = ref(null)
const initialNavPosition = ref(null)
const currentNavPosition = ref(null)

const calcOpacity = computed(() => {
  if (!currentNavPosition.value || !initialNavPosition.value) return 1
  return (currentNavPosition.value.y - 1) / initialNavPosition.value.y
})



const getPosition = () => {
  var xPos = 0;
  var yPos = 0;

  let el = document.getElementById('navRef')

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  if (!initialNavPosition.value) {
    initialNavPosition.value = {
      x: xPos,
      y: yPos
    };
  }
  currentNavPosition.value = {
    x: xPos,
    y: yPos
  };
}

onMounted(() => {
  const navRef = ref(null)
  window.addEventListener("scroll", () => { getPosition(navRef) }, false);
  window.addEventListener("resize", () => { getPosition(navRef) }, false);
})


</script>

<style>

</style>