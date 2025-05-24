<script>
    // passing prompts between components
    export let y;

    let tabs = [
        { name: 'Projects', link: "#projects" },
        { name: 'About Me', link: "#about" }
    ];
</script>

<header class={"z-[10] duration-200 px-6 flex items-center justify-between border border-solid " + (
    y > 0 ? ' py-4 bg-slate-950 6890F0': ' py-6 bg-transparent border-transparent'
)}>
    <h1 class="font-medium">
        <b class="font-bold lato">Nicklaus</b> Marietta
    </h1>

<!-- the purpose of the following div is for respo -->
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:#6890F0">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
    <a href="https://www.linkedin.com/in/nicklaus-marietta/"
     target="_blank" 
     class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">

        <div class="absolute top-0 right-full w-full h-full bg-#6890F0 opacity-20 group-hover:translate-x-full z-0 duration-200">
        </div>
        <h4 class="relative z-9 hover:text-blue-500">Contact</h4>
    </a>
</header> 