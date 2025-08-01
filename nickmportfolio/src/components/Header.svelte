<script>
    export let y;

    let tabs = [
        { name: 'Projects', link: "#projects" },
        { name: 'About', link: "#about" },
        { name: 'Skills', link: "#skills" }
    ];
</script>

<header class={"z-[10] duration-200 px-6 flex items-center justify-between border border-solid " + (
    y > 0 ? ' py-4 bg-slate-950 border-slate-700': ' py-6 bg-transparent border-transparent'
)}>
    <h1 class="font-medium text-white">
        <b class="font-bold">Nicklaus</b> Marietta
    </h1>

    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="text-gray-300 hover:text-blue-400 duration-200">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
    
    <a href="https://www.linkedin.com/in/nicklaus-marietta/"
     target="_blank" 
     class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors duration-200">
        Contact
    </a>
</header> 