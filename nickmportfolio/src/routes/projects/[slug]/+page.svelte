<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { projects } from '$lib/projects.js';

  $: slug = $page.params.slug;
  $: proj = projects.find(p => p.slug === slug);

  let activeSection = 'overview';
  const pageSections = [
    { id: 'overview',     label: 'Overview' },
    { id: 'gallery',      label: 'Gallery' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'stack',        label: 'Stack' },
  ];

  onMount(() => {
    document.documentElement.classList.add('js-ready');

    const sectionEls = [...document.querySelectorAll('[data-section]')];
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) activeSection = e.target.dataset.section; });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sectionEls.forEach(s => spy.observe(s));

    const revealer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));

    return () => { spy.disconnect(); revealer.disconnect(); };
  });
</script>

{#if proj}

<!-- ====== PROJECT MINI-RAIL ====== -->
<nav class="proj-rail" aria-label="Project sections">
  {#each pageSections as sec, i}
    {#if i > 0}<div class="p-edge"></div>{/if}
    <a
      href="#{sec.id}"
      class="p-node"
      class:active={activeSection === sec.id}
      data-label={sec.label}
      aria-label={sec.label}
    ></a>
  {/each}
</nav>

<div class="page-proj">
  <div class="wrap">

    <!-- breadcrumb -->
    <div class="breadcrumb reveal">
      <a href="/projects">← Projects</a>
      <span class="bc-sep">/</span>
      <span>{proj.title}</span>
    </div>

    <!-- ====== HERO ====== -->
    <header class="proj-hero">
      <div class="layer-tag reveal"><span class="dot"></span> {proj.num} <span class="ln"></span></div>
      <h1 class="proj-title reveal d1">{proj.title}</h1>
      <p class="proj-lede reveal d2">{proj.desc}</p>
      <div class="proj-hero-row reveal d2">
        <div class="tags">{#each proj.tags as tag}<span>{tag}</span>{/each}</div>
        <div class="plinks">
          {#each proj.links as link}
            <a href={link.href} target="_blank" rel="noopener" class="btn ghost">{link.label}</a>
          {/each}
        </div>
      </div>
    </header>

    <!-- ====== OVERVIEW — Layer 00 ====== -->
    <section class="proj-section" id="overview" data-section="overview">
      <div class="sec-head reveal">
        <div class="layer-tag"><span class="dot"></span> Layer 00 · Overview <span class="ln"></span></div>
      </div>
      <div class="overview-grid">
        <div class="ov-card reveal d1">
          <div class="ov-label">Problem</div>
          <p>{proj.problem}</p>
        </div>
        <div class="ov-card reveal d2">
          <div class="ov-label">Solution</div>
          <p>{proj.solution}</p>
        </div>
        <div class="ov-card reveal d3">
          <div class="ov-label">My Role</div>
          <p>{proj.role}</p>
        </div>
      </div>
    </section>

    <!-- ====== GALLERY — Layer 01 ====== -->
    <section class="proj-section" id="gallery" data-section="gallery">
      <div class="sec-head reveal">
        <div class="layer-tag"><span class="dot"></span> Layer 01 · Gallery <span class="ln"></span></div>
      </div>
      <div class="gallery-grid">
        {#each Array(proj.gallery) as _, i}
          <div
            class="gallery-ph reveal"
            class:d1={i === 0} class:d2={i === 1} class:d3={i === 2}
            class:span-full={proj.gallery % 2 !== 0 && i === proj.gallery - 1}
          >
            <div class="gph-grid"></div>
            <div class="gph-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="gph-icon" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="m21 15-5-5L5 21"/>
              </svg>
              <span class="gph-label">Screenshot {String(i + 1).padStart(2, '0')}</span>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- ====== ARCHITECTURE — Layer 02 ====== -->
    <section class="proj-section" id="architecture" data-section="architecture">
      <div class="sec-head reveal">
        <div class="layer-tag"><span class="dot"></span> Layer 02 · Architecture <span class="ln"></span></div>
      </div>
      <div class="arch-diagram reveal d1">
        {#each proj.architectureNodes as node, i}
          <div class="arch-node">
            <div class="an-index">{String(i).padStart(2, '0')}</div>
            <div class="an-label">{node}</div>
          </div>
          {#if i < proj.architectureNodes.length - 1}
            <div class="arch-connector" aria-hidden="true">
              <div class="ac-line"></div>
              <div class="ac-arrow"></div>
            </div>
          {/if}
        {/each}
      </div>
    </section>

    <!-- ====== STACK — Layer 03 ====== -->
    <section class="proj-section" id="stack" data-section="stack">
      <div class="sec-head reveal">
        <div class="layer-tag"><span class="dot"></span> Layer 03 · Stack <span class="ln"></span></div>
      </div>
      <div class="chips reveal d1">
        {#each proj.tags as tag}<span>{tag}</span>{/each}
      </div>
    </section>

    <div class="proj-footer reveal">
      <a href="/projects" class="btn ghost">← All projects</a>
    </div>

  </div>
</div>

{:else}

<div class="not-found">
  <div class="nf-code">404</div>
  <h2>Project not found.</h2>
  <a href="/projects" class="btn ghost">← All projects</a>
</div>

{/if}

<style>
  /* ---- page layout ---- */
  .page-proj { padding: 110px 0 120px; }

  .breadcrumb {
    display: flex; align-items: center; gap: 10px;
    font-family: var(--mono); font-size: 12px; color: var(--muted); letter-spacing: .06em;
    margin-bottom: 42px;
  }
  .breadcrumb a { color: var(--accent); transition: opacity .2s; }
  .breadcrumb a:hover { opacity: .7; }
  .bc-sep { opacity: .35; }

  /* ---- hero ---- */
  .proj-hero {
    margin-bottom: 0; padding-bottom: 64px;
    border-bottom: 1px solid var(--line);
  }
  .proj-title {
    font-family: var(--display); font-weight: 900;
    font-size: clamp(44px, 7vw, 96px);
    letter-spacing: -.035em; line-height: .95;
    margin: 18px 0 0; color: var(--ink);
  }
  .proj-lede {
    font-family: var(--serif); font-style: italic;
    font-size: clamp(17px, 2vw, 22px); color: var(--ink-dim);
    margin: 22px 0 0; max-width: 640px; line-height: 1.55;
  }
  .proj-hero-row {
    display: flex; align-items: center; flex-wrap: wrap; gap: 18px; margin-top: 28px;
  }

  /* ---- sections ---- */
  .proj-section { padding: 80px 0; border-bottom: 1px solid var(--line); }

  /* ---- overview ---- */
  .overview-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .ov-card {
    border: 1px solid var(--line); border-radius: 16px; padding: 28px 24px;
    background: var(--card);
    transition: border-color .3s, transform .3s;
  }
  .ov-card:hover { border-color: var(--line-strong); transform: translateY(-4px); }
  .ov-label {
    font-family: var(--mono); font-size: 11px; letter-spacing: .14em;
    color: var(--accent); text-transform: uppercase; margin-bottom: 14px;
  }
  .ov-card p { color: var(--ink-dim); font-size: 15.5px; margin: 0; line-height: 1.65; }

  /* ---- gallery ---- */
  .gallery-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;
  }
  .gallery-ph {
    position: relative; border: 1px solid var(--line); border-radius: 14px;
    overflow: hidden; aspect-ratio: 16 / 9; background: var(--surface);
    transition: border-color .3s, transform .3s;
  }
  .gallery-ph.span-full { grid-column: span 2; max-width: 60%; margin-inline: auto; width: 100%; }
  .gallery-ph:hover { border-color: var(--line-strong); transform: translateY(-3px); }
  .gph-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(var(--line) 1px, transparent 1px),
      linear-gradient(90deg, var(--line) 1px, transparent 1px);
    background-size: 40px 40px; opacity: .55;
    mask-image: radial-gradient(ellipse at center, #000 10%, transparent 72%);
  }
  .gph-content {
    position: relative; z-index: 1;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    height: 100%; gap: 12px;
  }
  .gph-icon { width: 30px; height: 30px; color: var(--muted); opacity: .45; }
  .gph-label {
    font-family: var(--mono); font-size: 11px; letter-spacing: .12em;
    color: var(--muted); text-transform: uppercase;
  }

  /* ---- architecture diagram ---- */
  .arch-diagram {
    display: flex; align-items: center; flex-wrap: nowrap; gap: 0;
    padding: 36px 32px; border: 1px solid var(--line); border-radius: 16px;
    background: var(--card); overflow-x: auto;
  }
  .arch-node {
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    padding: 18px 22px; border: 1px solid var(--line-strong); border-radius: 12px;
    background: var(--surface); min-width: 120px; text-align: center; flex-shrink: 0;
    transition: border-color .25s, box-shadow .25s, transform .25s;
  }
  .arch-node:hover {
    border-color: var(--accent);
    box-shadow: 0 0 0 1px var(--accent), 0 8px 24px -10px rgba(77, 163, 255, .4);
    transform: translateY(-2px);
  }
  .an-index { font-family: var(--mono); font-size: 10px; color: var(--accent); letter-spacing: .1em; }
  .an-label { font-family: var(--mono); font-size: 13px; color: var(--ink-dim); }
  .arch-connector {
    display: flex; align-items: center;
    flex: 1; min-width: 28px; max-width: 72px; flex-shrink: 0;
  }
  .ac-line { flex: 1; height: 2px; background: linear-gradient(90deg, var(--line-strong), var(--accent)); opacity: .55; }
  .ac-arrow {
    width: 0; height: 0;
    border-top: 5px solid transparent; border-bottom: 5px solid transparent;
    border-left: 8px solid var(--accent); opacity: .55;
  }

  /* ---- mini rail ---- */
  .proj-rail {
    position: fixed; left: 26px; top: 50%; transform: translateY(-50%); z-index: 30;
    display: flex; flex-direction: column; align-items: center; gap: 0;
  }
  .p-edge { width: 2px; height: 42px; background: var(--line); }
  .p-node {
    position: relative; width: 12px; height: 12px; border-radius: 50%;
    border: 2px solid var(--line-strong); background: var(--bg-2); cursor: pointer;
    transition: transform .25s, border-color .25s, box-shadow .25s, background .25s;
    display: block;
  }
  .p-node::before {
    content: attr(data-label); position: absolute; left: 22px; top: 50%;
    transform: translateY(-50%);
    font-family: var(--mono); font-size: 11px; letter-spacing: .06em; color: var(--muted);
    white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity .2s;
  }
  .p-node:hover::before { opacity: 1; }
  .p-node.active {
    background: var(--accent); border-color: var(--accent);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 22%, transparent), 0 0 14px var(--accent);
    transform: scale(1.2);
  }
  .p-node.active::before { opacity: 1; color: var(--accent); }

  /* ---- footer ---- */
  .proj-footer { padding: 48px 0 0; }

  /* ---- 404 ---- */
  .not-found {
    padding: 160px 0; text-align: center;
    display: flex; flex-direction: column; align-items: center; gap: 16px;
  }
  .nf-code {
    font-family: var(--mono); font-size: 11px; letter-spacing: .18em;
    color: var(--accent); text-transform: uppercase; margin-bottom: 8px;
  }
  .not-found h2 {
    font-family: var(--display); font-weight: 800; font-size: 36px;
    margin: 0 0 16px; color: var(--ink);
  }

  /* ---- responsive ---- */
  @media (max-width: 1080px) {
    .proj-rail { display: none; }
    .overview-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 680px) {
    .gallery-grid { grid-template-columns: 1fr; }
    .gallery-ph.span-full { grid-column: span 1; max-width: 100%; }
    .arch-diagram { flex-direction: column; align-items: stretch; overflow-x: visible; }
    .arch-connector {
      flex-direction: column; min-width: 0; max-width: none;
      min-height: 28px; justify-content: center; align-items: center;
    }
    .ac-line { width: 2px; height: 28px; flex: none; background: linear-gradient(180deg, var(--line-strong), var(--accent)); }
    .ac-arrow {
      border-left: 5px solid transparent; border-right: 5px solid transparent;
      border-top: 8px solid var(--accent); border-bottom: none; border-left-color: transparent;
    }
    .proj-hero-row { flex-direction: column; align-items: flex-start; }
  }
</style>
