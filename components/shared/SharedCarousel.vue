<template>
    <div class="carousel-container relative md:min-h-[58rem]">
        <div v-for="(item, index) in items"
            :class="`absolute py-32 px-4 md:px-16 xl:px-40 top-0 left-0 right-0 bottom-0 grid gap-16  grid-cols-12  ${index === activeItem ? 'z-20' : 'z-10'}`">
            <transition name="slide-down" mode="out-in">
                <div v-if="index === activeItem" :class="`left-carousel col-span-5  `">
                    <div class="w-full h-[40rem] bg-slate-500">

                    </div>
                </div>
            </transition>
            <transition name="slide-up" mode="out-in">
                <div v-if="index === activeItem" :class="`right-carousel flex flex-col justify-center col-span-5`">
                    <div>
                        <h4 class=" text-sm">EXPERIENCE</h4>
                        <h1 class="text-5xl my-4 font-aeonik-bold max-w-md">Companies I have worked with in the past
                        </h1>
                        <h6 class=" text-xs text-gray-400">Always passionate about building useful products</h6>
                    </div>
                    <div class="flex gap-4 my-8 flex-wrap">
                        <div class=" rounded-full border border-white py-2 px-8 w-max">ReactJs</div>
                        <div class=" rounded-full border border-white py-2 px-8 w-max">ReactJs</div>
                        <div class=" rounded-full border border-white py-2 px-8 w-max">ReactJs</div>
                        <div class=" rounded-full border border-white py-2 px-8 w-max">ReactJs</div>
                    </div>
                    <p class=" max-w-md text-xs leading-relaxed">Lorem ipsum dolor sit amet consectetur. Sed consectetur
                        malesuada lectus eu tristique dolor
                        metus. Quisque sed ultrices quam nullam id. Dictumst proin fusce quis egestas. At pulvinar quis
                        erat tincidunt vitae et. Lorem ipsum dolor sit amet consectetur. </p>
                </div>
            </transition>
            <div v-if="index === activeItem" class="controls col-span-2 flex flex-col gap-4 justify-end items-center">
                <div class=" flex flex-col gap-2 items-center">
                    <div v-for="(item, index) in items"
                        :class="`h-4 w-1 rounded-lg transition-all ${index === activeItem ? 'bg-white h-8' : 'bg-slate-400'}`">
                    </div>
                </div>
                <button
                    class="w-12 flex items-center justify-center h-12 border border-slate-400 text-slate-400 hover:text-white hover:border-white rounded-full "
                    @click="next">
                    <Icon class=" " name="ic:sharp-arrow-downward" />
                </button>
                <button
                    class="w-12 flex items-center rotate-180 justify-center h-12 border border-slate-400 text-slate-400 hover:text-white hover:border-white rounded-full "
                    @click="prev">
                    <Icon name="ic:sharp-arrow-downward" />
                </button>

            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    items: Array
})
const activeItem = ref(0)
const next = () => {
    console.log(activeItem.value)
    activeItem.value = activeItem.value >= props.items.length - 1 ? 0 : activeItem.value + 1
}
const prev = () => {
    console.log(activeItem.value)
    activeItem.value = activeItem.value <= 0 ? props.items.length - 1 : activeItem.value - 1
}

</script>
<style scoped>
.slide-down-enter-active,
.slide-up-enter-active {
    transition: all 0.5s ease-out;
    transform: translateY(0px);
}

.slide-down-leave-active,
.slide-up-leave-active {

    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-down-enter-from {
    transform: translateY(-500px);
}

.slide-down-leave-to {
    transform: translateY(500px);
    opacity: 0;
}

.slide-up-enter-from {
    transform: translateY(500px);
}

.slide-up-leave-to {
    transform: translateY(-500px);
    opacity: 0;
}
</style>
