<script>
  import Step from "./Step.svelte";
  import { onMount } from 'svelte';

  let steps = [
    {name: "SilverWare", icon: "fa-solid fa-utensils", type: "water"},
    {name: "The Aprendizaje", icon: "fa-solid fa-earth-americas", type: "psychic"},
    {name: "LineupList", icon: "fa-solid fa-futbol", type: "fighting"},
  ]

  let benefits = [
    {name: "an aspiring software engineer", description: "I have always been interested with technology in the CS field and love the process of building ideas. With the vast world of technology, I believe that continuous learning journey makes it very fun."},
    {name: "a video game enthusiast", description: "Video games have always been my gateway into the world of technology. I see them as a powerful medium for creativity, storytelling, and innovation—bringing people's passions and ideas to life in an interactive way."},
    {name: "a passionate learner", description: "Learning new computer and spoken languages has been one of my favorite hobbies. I love the process because it shows how diverse and different the world can be in various aspects."},
  ]

  let scrollY = 0;
  
  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // Pokemon type colors
  const typeColors = {
    water: '#6890F0',
    psychic: '#F85888',
    fighting: '#C03028',
    normal: '#A8A878',
    fire: '#F08030',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  };
</script>

<div class="pokemon-map-background">
  <img 
    src="/images/pokemon-map.jpg" 
    alt="Pokemon Map Background" 
    style="transform: translateY(calc(-33.33% + {scrollY * 0.5}px))"
  />
</div>

<main class="flex flex-col flex-1 p-4 relative z-10">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl pokemon-text">
                <span
                    class="relative inline-block animate-bounce px-1 py-2 font-bold text-white"
                >
                    Hi!
                </span>
                I'm
                <span class="lato text-[#6890F0]">Nicklaus</span>,<br />
                an Aspiring
                <span class="lato text-[#6890F0]">Software Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                Junior at <span class="text-[#6890F0]">CSUF</span> studying
                Computer Science. My
                <span class="text-[#6890F0]">favorite tech</span> includes JS (ReactJS,
                SvelteKit), C++, and Python.
            </p>
            <a href="https://www.linkedin.com/in/nicklaus-marietta/" target="_blank" class="pokemon-button mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl lato relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer">
                <div class="absolute top-0 right-full w-full h-full bg-[#6890F0] opacity-20 group-hover:translate-x-full z-0 duration-200">
                </div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative grid place-items-center">
            <img 
                src="/images/greninja.png" 
                alt="Greninja" 
                class="max-h-[70vh] hover:scale-105 transition-transform duration-300"
            />
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my projects that I have worked on.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl pokemon-text">
                Curious to <span class="lato text-[#6890F0]">see</span> my work?
            </h3>
        </div>
        <a href="https://github.com/nickmarietta" target="_blank" class="pokemon-button mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-[#6890F0] duration-200">
            <i class="fa-brands fa-github"></i>
            <p>Here's my work!</p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            {#each steps as step}
                <Step href="https://github.com/owendevita/Silverware" step={step}>
                    <p>SilverWare is a web application that is designed for restaurant owners to customize the layout of their store. Created with <strong class="text-[#6890F0]">ReactJS, Django, AWS, SQLite</strong>.</p>
                </Step>
            {/each}
        </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-[#6890F0] after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-[#6890F0] py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl pokemon-text">A bit <span class="lato text-[#6890F0]">about</span> me.</h3>
        </div>
        <p class="mx-auto lato font-semibold text-lg sm:text-xl md:text-2xl"> I am . . .</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
            <div class="flex gap-6 sm:gap-8">
                <p class="lato text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                    0{index + 1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3cl md:text-5xl pokemon-text"> 
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>    
            </div>
            {/each}
        </div>
        <h5 class="text-2xl sm:text-3xl font-semibold text-center lato pokemon-text">My <span class="text-[#6890F0]">Skills</span></h5> 
    </section>
</main>

<style>
  .pokemon-map-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 300vh;
    z-index: 0;
    overflow: hidden;
  }

  .pokemon-map-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.15;
    will-change: transform;
  }

  .pokemon-text {
    font-family: 'Press Start 2P', cursive;
    letter-spacing: 0.05em;
  }

  .pokemon-button {
    background: linear-gradient(45deg, #6890F0, #98D8D8);
    border: 2px solid #6890F0;
    box-shadow: 0 4px 0 #4A6FA5;
    transition: all 0.2s ease;
  }

  .pokemon-button:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #4A6FA5;
  }

  .pokemon-button:active {
    transform: translateY(4px);
    box-shadow: none;
  }

  @font-face {
    font-family: 'Press Start 2P';
    src: url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  }
</style>
