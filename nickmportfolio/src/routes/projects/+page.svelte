<script>
  import { onMount, afterUpdate } from 'svelte';
  import { projects, allTags } from '$lib/projects.js';

  let activeTags = new Set();
  let revealer;

  function toggleTag(tag) {
    const next = new Set(activeTags);
    if (next.has(tag)) next.delete(tag); else next.add(tag);
    activeTags = next;
  }

  $: filtered = activeTags.size === 0
    ? projects
    : projects.filter(p => p.tags.some(t => activeTags.has(t)));

  onMount(() => {
    document.documentElement.classList.add('js-ready');
    revealer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));
    return () => revealer.disconnect();
  });

  afterUpdate(() => {
    if (!revealer) return;
    document.querySelectorAll('.reveal:not(.in)').forEach(el => revealer.observe(el));
  });
</script>

<div class="pg-wrap">
  <div class="wrap">

    <div class="pg-head reveal">
      <a href="/" class="back-link">← Home</a>
      <div class="sec-head">
        <div class="layer-tag"><span class="dot"></span> Layer 01 · Projects <span class="ln"></span></div>
        <h1>Projects</h1>
        <div class="sub">Selected work — where ideas become interfaces.</div>
      </div>
    </div>

    <div class="filter-row reveal d1">
      <div class="filter-label">Filter by skill</div>
      <div class="filter-chips">
        {#each allTags as tag}
          <button
            class="filter-chip"
            class:active={activeTags.has(tag)}
            on:click={() => toggleTag(tag)}
          >{tag}</button>
        {/each}
        {#if activeTags.size > 0}
          <button class="filter-chip clear" on:click={() => { activeTags = new Set(); }}>✕ Clear</button>
        {/if}
      </div>
      <div class="result-count">
        <span class="n">{filtered.length}</span> / {projects.length}
      </div>
    </div>

    {#if filtered.length > 0}
      <div class="proj-grid">
        {#each filtered as proj, i (proj.slug)}
          <article class="proj reveal" class:d1={i % 2 === 0} class:d2={i % 2 === 1}>
            <div class="proj-media">
              <img src={proj.img} alt={proj.title} />
            </div>
            <div class="pnum">{proj.num}</div>
            <h3>{proj.title}</h3>
            <p class="desc">{proj.desc}</p>
            <div class="tags">{#each proj.tags as tag}<span>{tag}</span>{/each}</div>
            <div class="plinks">
              {#each proj.links as link}
                <a href={link.href} target="_blank" rel="noopener">{link.label}</a>
              {/each}
            </div>
          </article>
        {/each}
      </div>
    {:else}
      <div class="no-results reveal">
        <p>No projects match those filters.</p>
        <button class="btn ghost" on:click={() => { activeTags = new Set(); }}>Clear filters</button>
      </div>
    {/if}

  </div>
</div>

<style>
  .pg-wrap { padding: 110px 0 120px; }

  .pg-head { margin-bottom: 54px; }
  .back-link {
    font-family: var(--mono); font-size: 12px; letter-spacing: .1em;
    color: var(--accent); display: inline-flex; align-items: center; gap: 8px;
    margin-bottom: 32px; transition: gap .2s;
  }
  .back-link:hover { gap: 14px; }

  .filter-row {
    display: flex; align-items: center; flex-wrap: wrap; gap: 14px;
    margin-bottom: 40px; padding: 18px 22px;
    border: 1px solid var(--line); border-radius: 14px; background: var(--card);
  }
  .filter-label {
    font-family: var(--mono); font-size: 11px; letter-spacing: .12em;
    color: var(--muted); text-transform: uppercase; white-space: nowrap;
  }
  .filter-chips { display: flex; flex-wrap: wrap; gap: 8px; flex: 1; }
  .filter-chip {
    font-family: var(--mono); font-size: 12px; padding: 6px 12px;
    border-radius: 7px; border: 1px solid var(--line);
    background: transparent; color: var(--ink-dim); cursor: pointer;
    transition: border-color .2s, color .2s, background .2s, transform .15s;
  }
  .filter-chip:hover { border-color: var(--line-strong); color: var(--ink); transform: translateY(-1px); }
  .filter-chip.active {
    border-color: var(--accent); color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
  }
  .filter-chip.clear { color: var(--muted); }
  .filter-chip.clear:hover { color: var(--ink); border-color: var(--line-strong); }

  .result-count {
    font-family: var(--mono); font-size: 12px; color: var(--muted);
    white-space: nowrap; margin-left: auto;
  }
  .result-count .n { color: var(--accent); font-weight: 700; }

  .no-results {
    text-align: center; padding: 80px 20px;
    display: flex; flex-direction: column; align-items: center; gap: 20px;
  }
  .no-results p {
    font-family: var(--serif); font-style: italic;
    font-size: 18px; color: var(--muted); margin: 0;
  }

  @media (max-width: 680px) {
    .filter-row { flex-direction: column; align-items: flex-start; }
    .result-count { margin-left: 0; }
  }
</style>
