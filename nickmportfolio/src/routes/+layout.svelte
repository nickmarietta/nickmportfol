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

<div class="relative flex flex-col min-h-screen bg-slate-900">
    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (
        y > 0 ? ' opacity-full pointer-events-auto': ' pointer-events-none opacity-0'
        )}>
        <button on:click={goTop} class="ml-auto rounded-full aspect-square bg-slate-800 text-blue-400 px-3 sm:px-4 hover:bg-slate-700 cursor-pointer transition-colors duration-200">
            <i class="fa-solid fa-arrow-up grid place-items-center" />
        </button>
    </div>
    
    <Header y={y}/>

    <main class="flex-1">
        <slot />
    </main>

    <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />

<svelte:head>
  <title>Nicklaus Marietta — Software Engineer</title>
  <meta name="description" content="Portfolio of Nicklaus Marietta, a software engineer focusing on frontend, UI/UX, and web performance." />
  <meta property="og:title" content="Nicklaus Marietta — Software Engineer" />
  <meta property="og:description" content="Portfolio of a software engineer building accessible, fast, and delightful web experiences." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/assets/nick2ndpfp.jpg" />
  <meta property="og:url" content="https://nickmarietta.vercel.app" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nicklaus Marietta",
    "url": "https://nickmarietta.vercel.app",
    "sameAs": [
      "https://www.linkedin.com/in/nicklaus-marietta/",
      "https://github.com/nickmarietta"
    ],
    "image": "/assets/nick2ndpfp.jpg",
    "jobTitle": "Software Engineer",
    "description": "Frontend-focused developer with a passion for design systems, accessibility, and performance."
  }
  </script>
</svelte:head>
