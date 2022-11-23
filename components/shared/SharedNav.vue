<template>
    <nav
        :class="['sticky top-0 py-4 sticky-nav flex text-white text-lg px-16 md:px-40', { 'bg-black': opacity > 0 }, { 'bg-white/10 backdrop-blur-md ': opacity <= 0 }]">
        <div class="nav-right">
            <h4>WESLEY <br /> UKADIKE</h4>

        </div>
        <transition name="slide-fade" mode="out-in">
            <div key="detRef" ref="detRef" v-if="props.opacity > 0 && !showMenu" class="nav-description ml-auto flex items-center">
                <h4>BASED IN LAGOS <br /> NIGERIA, NG</h4>
                <h4 class="mx-8 md:ml-12 md:mr-24">CURRENTLY SOFTWARE ENGINEER <br /> BLACKCOPPER</h4>
                <Icon v-element-hover="onHover" name="NuxtIcon" icon="menu" size="32" class=" cursor-pointer" />
            </div>
            <div v-element-hover="onHover" key="menuRef" ref="menuRef" v-else
                class="nav-main ml-auto flex items-center">
                <ul>
                    <NuxtLink to="/">ABOUT</NuxtLink>
                    <NuxtLink class="mx-8 md:mx-12" to="/">WORKS</NuxtLink>
                    <NuxtLink to="/">EXPERIENCE</NuxtLink>
                </ul>
                <button  class=" px-8 py-3 rounded-full bg-white ml-8 md:ml-12 text-gray-800">Get in touch</button>
            </div>
        </transition>

    </nav>
</template>

<script  setup>
import { vElementHover } from '@vueuse/components'
const props = defineProps({
    opacity: Number,
})
const detRef = ref(null)
const menuRef = ref(null)
const showMenu= ref(false)

const onHover=(state)=>{
    console.log(state)
    if(state){
       return showMenu.value=true
    }
    return showMenu.value=false
}

</script>
<style scoped>
.sticky-nav {
    border-top: 1px solid #344054;
    border-bottom: 1px solid #344054;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;

}

.slide-fade-leave-active {

    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20px);

    opacity: 0;
}
</style>