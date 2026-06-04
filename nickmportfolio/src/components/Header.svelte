<script>
  import { onMount } from 'svelte';

  let scrolled = false;

  onMount(() => {
    const saved = localStorage.getItem('nm-theme');
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');

    const onScroll = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });

  function toggleTheme() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('nm-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('nm-theme', 'light');
    }
    if (window.buildNet) window.buildNet();
  }
</script>

<nav class="topnav" class:scrolled>
  <a class="brand" href="#top" on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <span class="mark">NM</span>Nicklaus Marietta
  </a>

  <div class="navlinks">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#resume">Resume</a>
    <a href="#contact">Contact</a>
  </div>

  <div class="nav-actions">
    <button class="theme-btn" on:click={toggleTheme} aria-label="Toggle light/dark theme">
      <svg class="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
      </svg>
      <svg class="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
      </svg>
    </button>
    <a class="btn primary" href="/resume.pdf" download aria-label="Download resume PDF">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v12M7 11l5 4 5-4M5 21h14"></path>
      </svg>
      Resume
    </a>
  </div>
</nav>
