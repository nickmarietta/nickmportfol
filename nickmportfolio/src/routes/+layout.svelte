<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    let y = 0;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div>
        <button>
            <i class="fa-solid fa-arrow-up" />
        </button>
    </div>
    
    <Header />

    <slot /> <!-- Old SvelteKit uses <slot> instead of {@render} -->

    <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />