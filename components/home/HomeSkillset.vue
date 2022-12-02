<template>
    <div class="text-white relative z-10 px-4 py-14 md:py-32 md:px-40 grid grid-cols-1 md:grid-cols-2">
        <div>
            <h4 class=" text-5xl mb-4 font-aeonik-bold">Skillset</h4>
            <p class=" text-sm font-light max-w-xs leading-relaxed">With over 4+ years of professional experience in
                software engineering, I am the perfect person to hire
                when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any
                challenge.</p>
        </div>
        <div class=" mt-8 md:mt-0">
            <div class=" grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-motion-slide-visible-top>
                    <Icon name="NuxtIcon" icon="cubes" />
                    <h4 class="text-lg font-aeonik-bold my-2">Problem Solving</h4>
                    <p class=" text-sm leading-relaxed font-extralight">I like to think of problem solving outside the
                        bounds of coding;
                        Learning the techniques for
                        solving problems is more valuable than learning tools, languages and frameworks.</p>
                </div>
                <div v-motion-slide-visible-right visible :delay="500">
                    <Icon name="NuxtIcon" icon="cubes" />
                    <h4 class="text-lg font-aeonik-bold my-2">Problem Solving</h4>
                    <p class=" text-sm leading-relaxed font-extralight">I like to think of problem solving outside the
                        bounds of coding;
                        Learning the techniques for
                        solving problems is more valuable than learning tools, languages and frameworks.</p>
                </div>
            </div>
            <hr class=" bg-white w-full hidden md:block   my-12" />
            <div class=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-0">
                <div v-motion-slide-visible-left visible :delay="1000">
                    <Icon name="NuxtIcon" icon="paint" />
                    <h4 class="text-lg font-aeonik-bold my-2">Problem Solving</h4>
                    <p class=" text-sm leading-relaxed font-extralight">I like to think of problem solving outside the
                        bounds of coding;
                        Learning the techniques for
                        solving problems is more valuable than learning tools, languages and frameworks.</p>
                </div>
                <div v-motion-slide-visible-bottom :delay="1500" >
                    <Icon name="NuxtIcon" icon="gauge" />
                    <h4 class="text-lg font-aeonik-bold my-2">Problem Solving</h4>
                    <p class=" text-sm leading-relaxed font-extralight">I like to think of problem solving outside the
                        bounds of coding;
                        Learning the techniques for
                        solving problems is more valuable than learning tools, languages and frameworks.</p>
                </div>
            </div>
        </div>
    </div>
</template>