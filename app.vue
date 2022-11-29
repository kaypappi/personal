<template>
  <div ref="band" class="font-aeonik noisebg  ">
    <!-- <NuxtLoadingIndicator color="#f04f43" /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>

</script>
<style>
.noisebg{
  background-image: url('./assets/imgs/noisebg.png');
  background-size: inherit;
}
</style>
