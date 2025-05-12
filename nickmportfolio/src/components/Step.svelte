<script>

    export let step;
    export let href = "#";

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

<div href={step.href} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border-2 border-solid pokemon-card" style="border-color: {typeColors[step.type] || typeColors.normal}">
    <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200" style="color: {typeColors[step.type] || typeColors.normal}">
        <i class={step.icon}></i>
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl pokemon-text">{step.name}</h3>
    <slot/>
    <div class="flex-1 flex justify-between gap-4 items-center">
        <div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
            <a href={href} target="_blank">
            <p class="relative z-4">Go to &rarr;</p>
            </a>
        </div>
    </div>
</div>

<style>
    .pokemon-card {
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95));
        transition: all 0.3s ease;
    }

    .pokemon-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .pokemon-text {
        font-family: 'Press Start 2P', cursive;
        letter-spacing: 0.05em;
    }
</style>