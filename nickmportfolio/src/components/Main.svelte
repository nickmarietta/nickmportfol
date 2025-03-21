<script>
  import Step from "./Step.svelte";

  let steps = [
    {name: "SilverWare", icon: "fa-solid fa-utensils"},
    {name: "The Aprendizaje", icon: "fa-solid fa-earth-americas"},
    {name: "LineupList", icon: "fa-solid fa-futbol"},
  ]

  let benefits = [
    {name: "an aspiring software engineer", description: "I have always been interested with technology in the CS field and love the process of building ideas. With the vast world of technology, I believe that continuous learning journey makes it very fun."},
    {name: "a video game enthusiast", description: "Video games have always been my gateway into the world of technology. I see them as a powerful medium for creativity, storytelling, and innovation—bringing people's passions and ideas to life in an interactive way."},
    {name: "a passionate learner", description: "Learning new computer and spoken languages has been one of my favorite hobbies. I love the process because it shows how diverse and different the world can be in various aspects."},
  ]

</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class=" grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                <span
                    class="relative inline-block animate-bounce px-1 py-2 font-bold text-white"
                >
                    Hi!
                </span>
                I'm
                <span class="lato text-violet-400">Nicklaus</span>,<br />
                an Aspiring
                <span class="lato text-violet-400">Software Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                Junior at <span class="text-violet-400">CSUF</span> studying
                Computer Science. My
                <span class="text-violet-400">favorite tech</span> includes JS (ReactJS,
                SvelteKit), C++, and Python.
            </p>
            <a href="https://www.linkedin.com/in/nicklaus-marietta/" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl lato relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200">
                </div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/pikachu.png"} alt="Profile Image" class="object-cover z-[2] max-h-[70vh]">
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my projects that I have worked on.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="lato text-violet-400">see</span> my work?
            </h3>
        </div>
        <a href="https://github.com/nickmarietta" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
            <i class="fa-brands fa-github"></i>
            <p>Here's my work!</p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step href="https://github.com/owendevita/Silverware" step={steps[0]}>
                <p>SilverWare is a web application that is designed for restaurant rwners to customize the layout of their store. Created with <strong class="text-violet-400">ReactJS, Django, AWS, SQLite</strong>.</p>
            </Step>
            <Step href="https://github.com/nickmarietta/FullyHacks2024LLP" step={steps[1]}>
                <p>The Aprendizaje is a Hackathon submission that helps users learn Spanish through different game modes with matching and listening practice. Developed with <strong class="text-violet-400">Python, PyGame</strong>.</p>
            </Step>
            <Step href="https://github.com/nickmarietta/LineupList" step={steps[2]}>
                <p>LineUpList is a website that shows the lineups and formation of current and past soccer clubs from around the world. <strong class="text-violet-400">Work in Progress!</strong></p>
            </Step>
        </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="lato text-violet-400">about</span> me.</h3>
        </div>
        <p class="mx-auto lato font-semibold text-lg sm:text-xl md:text-2xl"> I am . . .</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
            <div class="flex gap-6 sm:gap-8">
                <p class="lato text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                    0{index + 1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3cl md:text-5xl"> 
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>    
            </div>
            {/each}
        </div>
        <h5 class="text-2xl sm:text-3xl font-semibold text-center lato">My <span class="text-violet-400">Skills</span></h5>
        <div class="flex flex-col gap-10 max-w-[800px] mx-auto w-full">
            <!-- svelte-ignore this is the part where we want to include our skills -->
            <div class="flex justify-between mb-1">
                <span class="text-base h-1 font-medium text-blue-700 dark:text-white">C++</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 90%"></div>
            </div>
            <div class="flex justify-between mb-1">
                <span class="text-base h-1 font-medium text-blue-700 dark:text-white">Python</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 80%"></div>
            </div>
            <div class="flex justify-between mb-1">
                <span class="text-base h-1 font-medium text-blue-700 dark:text-white">JavaScript</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 85%"></div>
            </div>
            <div class="flex justify-between mb-1">
                <span class="text-base h-1 font-medium text-blue-700 dark:text-white">HTML/CSS</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 100%"></div>
            </div>
        </div>
    </section>
</main>
