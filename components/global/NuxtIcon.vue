<template>
    <div v-html="iconName" class="svg-container"></div>

</template>
<script setup>
import { ref, watchEffect } from 'vue'

const props= defineProps({
    icon:String
})
const iconName = ref()
const getServiceIcon = async iconName => {
    const module = await import(/* @vite-ignore */ `../../assets/svgs/${iconName}.svg?raw`)
    return module.default.replace(/^\/@fs/, '')
}
watchEffect(async () => (iconName.value = await getServiceIcon(props.icon)))
</script>