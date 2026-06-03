<script>
  import { onMount } from 'svelte';

  const Silverware = '/assets/Silverware.png';
  const Econauts   = '/assets/EcoNauts.png';
  const RedClarity = '/assets/RedClarity.png';

  const projects = [
    {
      num: '01 / featured',
      title: 'SilverWare',
      img: Silverware,
      desc: 'A web application for restaurant owners to customize their store layout and manage operations. Built with a full-stack React + Django architecture deployed on AWS.',
      tags: ['ReactJS', 'Django', 'AWS', 'SQLite'],
      links: [{ label: '↗ Code', href: 'https://github.com/owendevita/Silverware' }]
    },
    {
      num: '02 / featured',
      title: 'EcoNauts',
      img: Econauts,
      desc: 'An environmental placement platform connecting students with green internships and sustainability-focused organizations. Streamlines discovery and application.',
      tags: ['React', 'Python', 'REST API', 'PostgreSQL'],
      links: [{ label: '↗ Code', href: 'https://github.com/nickmarietta/GreenPlacement' }]
    },
    {
      num: '03',
      title: 'RedClarity',
      img: RedClarity,
      desc: 'A sports management application for organizing team lineups, tracking player statistics, and coordinating roster decisions across a full season.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      links: [{ label: '↗ Code', href: 'https://github.com/nickmarietta/lineuplist' }]
    }
  ];

  onMount(() => {
    document.documentElement.classList.add('js-ready');

    const sections  = [...document.querySelectorAll('section[id]')];
    const navlinks  = [...document.querySelectorAll('.navlinks a')];
    const railNodes = [...document.querySelectorAll('.rail .node')];
    const rail      = document.querySelector('.rail');

    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        navlinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
        railNodes.forEach(n => n.classList.toggle('active', n.dataset.target === id));
        if (rail) {
          rail.classList.add('flow');
          clearTimeout(rail._ft);
          rail._ft = setTimeout(() => rail.classList.remove('flow'), 1400);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));

    const revealer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));

    function revealAll() { document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')); }
    window.addEventListener('beforeprint', revealAll);
    const fb = setTimeout(() => { if (!document.querySelector('.reveal.in')) revealAll(); }, 1600);

    return () => {
      spy.disconnect();
      revealer.disconnect();
      window.removeEventListener('beforeprint', revealAll);
      clearTimeout(fb);
    };
  });
</script>

<!-- ====== LEFT NEURAL RAIL ====== -->
<div class="rail" aria-hidden="true">
  <div class="node active" data-target="top"     data-label="Input · Home"></div>
  <div class="edge"></div>
  <div class="node" data-target="about"    data-label="About"></div>
  <div class="edge"></div>
  <div class="node" data-target="projects" data-label="Projects"></div>
  <div class="edge"></div>
  <div class="node" data-target="skills"   data-label="Skills"></div>
  <div class="edge"></div>
  <div class="node" data-target="resume"   data-label="Resume"></div>
  <div class="edge"></div>
  <div class="node" data-target="contact"  data-label="Output · Contact"></div>
</div>

<!-- ====== HERO ====== -->
<section class="hero" id="top">
  <div class="hero-grid"></div>
  <div class="cross" style="left:46px;top:130px;"></div>
  <div class="cross" style="right:46px;top:160px;"></div>
  <div class="cross" style="left:46px;bottom:90px;"></div>
  <div class="wrap">
    <div class="hero-inner">
      <div>
        <div class="eyebrow reveal">Computer Science &middot; CSUF</div>
        <h1 class="reveal d1">Nicklaus<br /><span class="l2">Marietta</span></h1>
        <p class="lede reveal d2">An aspiring software engineer who loves building ideas — from full-stack web apps to tools that connect people with opportunities.</p>
        <div class="hero-cta reveal d3">
          <a class="btn primary" href="#projects">View projects</a>
          <a class="btn ghost"   href="#contact">Get in touch</a>
        </div>
        <div class="tag reveal d3"><span class="pulse-dot"></span> Open to opportunities</div>
      </div>
      <div class="hero-index reveal d2">
        <div class="h">Index</div>
        <a href="#about">   <span>About</span>    <span class="n">01</span></a>
        <a href="#projects"><span>Projects</span> <span class="n">02</span></a>
        <a href="#skills">  <span>Skills</span>   <span class="n">03</span></a>
        <a href="#resume">  <span>Resume</span>   <span class="n">04</span></a>
        <a href="#contact"> <span>Contact</span>  <span class="n">05</span></a>
      </div>
    </div>
  </div>
  <div class="scroll-cue"><span>scroll</span><span class="bar"></span></div>
</section>

<!-- ====== ABOUT — Layer 00 ====== -->
<section class="section" id="about">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="layer-tag"><span class="dot"></span> Layer 00 · Input <span class="ln"></span></div>
      <h2>About</h2>
      <div class="sub">Where the signal starts.</div>
    </div>
    <div class="about-grid">
      <div class="about-body reveal d1">
        <p class="lead">I'm a Computer Science senior at Cal State Fullerton with a passion for the full process of building — ideation, design, and shipping products that work.</p>
        <p>My favorite technologies span the stack: React and SvelteKit on the front end, Python and Node.js on the back, and cloud infra on AWS, Firebase, and GCP. I care about writing clean, maintainable code as much as the end result.</p>
        <p>Outside of code, video games have always been my gateway into technology — I see them as a powerful medium for creativity and storytelling. That curiosity spills into learning new languages, frameworks, and anything else that keeps the craft interesting.</p>
      </div>
      <div class="about-aside reveal d2">
        <div class="stats">
          <div class="stat"><div class="num">Senior</div><div class="lbl">CS @ CSUF</div></div>
          <div class="stat"><div class="num">3+</div><div class="lbl">Projects shipped</div></div>
          <div class="stat"><div class="num">∞</div><div class="lbl">Curiosity</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ====== PROJECTS — Layer 01 ====== -->
<section class="section" id="projects">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="layer-tag"><span class="dot"></span> Layer 01 · Hidden <span class="ln"></span></div>
      <h2>Projects</h2>
      <div class="sub">Selected work — where ideas become interfaces.</div>
    </div>
    <div class="proj-grid">
      {#each projects as proj, i}
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
  </div>
</section>

<!-- ====== SKILLS — Layer 02 ====== -->
<section class="section" id="skills">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="layer-tag"><span class="dot"></span> Layer 02 · Hidden <span class="ln"></span></div>
      <h2>Skills</h2>
      <div class="sub">The activation functions.</div>
    </div>
    <div class="skills-grid">

      <div class="skill-card reveal d1">
        <div class="sc-head">
          <div class="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h4>Languages</h4><span class="cnt">06</span>
        </div>
        <div class="chips">
          <span>JavaScript</span><span>TypeScript</span><span>Python</span>
          <span>C++</span><span>Java</span><span>SQL</span>
        </div>
      </div>

      <div class="skill-card reveal d2">
        <div class="sc-head">
          <div class="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <path d="M3 9h18M9 21V9"></path>
            </svg>
          </div>
          <h4>Frontend</h4><span class="cnt">05</span>
        </div>
        <div class="chips">
          <span>React</span><span>Svelte</span><span>SvelteKit</span>
          <span>HTML</span><span>CSS / Tailwind</span>
        </div>
      </div>

      <div class="skill-card reveal d1">
        <div class="sc-head">
          <div class="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"></circle>
              <circle cx="5" cy="6" r="2"></circle><circle cx="19" cy="6" r="2"></circle>
              <circle cx="5" cy="18" r="2"></circle><circle cx="19" cy="18" r="2"></circle>
              <path d="M7 6.8l3 3.4M17 6.8l-3 3.4M7 17.2l3-3.4M17 17.2l-3-3.4"></path>
            </svg>
          </div>
          <h4>Backend</h4><span class="cnt">05</span>
        </div>
        <div class="chips">
          <span>Node.js</span><span>Flask</span><span>Django</span>
          <span>MySQL</span><span>PostgreSQL</span>
        </div>
      </div>

      <div class="skill-card reveal d2">
        <div class="sc-head">
          <div class="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"></path>
              <path d="M12 11v9M12 11L4 6.5M12 11l8-4.5"></path>
            </svg>
          </div>
          <h4>Infra &amp; Tools</h4><span class="cnt">06</span>
        </div>
        <div class="chips">
          <span>Git</span><span>AWS</span><span>Firebase</span>
          <span>GCP</span><span>MongoDB</span><span>Docker</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ====== RESUME — Layer 03 ====== -->
<section class="section" id="resume">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="layer-tag"><span class="dot"></span> Layer 03 · Hidden <span class="ln"></span></div>
      <h2>Resume</h2>
      <div class="sub">The trained weights, summarized.</div>
    </div>
    <div class="resume-grid">
      <div class="resume-cta reveal d1">
        <h3>Full résumé</h3>
        <p>The complete picture — education, projects, and stack — formatted for a quick read.</p>
        <a class="btn primary" href="/resume.pdf" download style="padding:14px 22px;font-size:14px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3v12M7 11l5 4 5-4M5 21h14"></path>
          </svg>
          Download PDF
        </a>
        <div class="meta"><span>PDF · one page</span><span>Updated 2025</span></div>
      </div>
      <div class="timeline reveal d2">
        <div class="tl-item">
          <div class="yr">2022 — Present</div>
          <h4>B.S. Computer Science</h4>
          <div class="org">Cal State Fullerton · Fullerton, CA</div>
          <p>Studying algorithms, systems, and software engineering. Relevant coursework: Data Structures, Operating Systems, AI, Database Systems.</p>
        </div>
        <div class="tl-item">
          <div class="yr">2024</div>
          <h4>EcoNauts — Team Project</h4>
          <div class="org">CSUF Senior Project</div>
          <p>Led front-end development on an environmental placement platform connecting students with green internships.</p>
        </div>
        <div class="tl-item">
          <div class="yr">2023</div>
          <h4>SilverWare — Team Project</h4>
          <div class="org">Full-Stack Collaboration</div>
          <p>Co-built a restaurant management web app with ReactJS, Django, and AWS. Owned UI and deployment pipeline.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ====== CONTACT — Layer 04 ====== -->
<section class="section" id="contact">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="layer-tag"><span class="dot"></span> Layer 04 · Output <span class="ln"></span></div>
      <h2>Contact</h2>
      <div class="sub">Where the network resolves.</div>
    </div>
    <div class="contact-grid">
      <a class="contact-tile reveal d1" href="mailto:nickmarietta@live.com">
        <div class="ic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-10 6L2 7"></path>
          </svg>
        </div>
        <div><div class="ct-lbl">Email</div><div class="ct-val">nickmarietta@live.com</div></div>
        <span class="ct-go">Send a message →</span>
      </a>
      <a class="contact-tile reveal d2" href="https://github.com/nickmarietta" target="_blank" rel="noopener">
        <div class="ic">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"></path>
          </svg>
        </div>
        <div><div class="ct-lbl">GitHub</div><div class="ct-val">@nickmarietta</div></div>
        <span class="ct-go">View repositories →</span>
      </a>
      <a class="contact-tile reveal d3" href="https://www.linkedin.com/in/nicklaus-marietta/" target="_blank" rel="noopener">
        <div class="ic">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z"></path>
          </svg>
        </div>
        <div><div class="ct-lbl">LinkedIn</div><div class="ct-val">in/nicklaus-marietta</div></div>
        <span class="ct-go">Connect →</span>
      </a>
    </div>
    <div class="contact-cta reveal">
      <h3>Let's build something together.</h3>
      <p>Open to internships, collaborations, and interesting projects.</p>
      <a class="btn primary" href="mailto:nickmarietta@live.com" style="padding:15px 26px;">Start a conversation</a>
    </div>
  </div>
</section>
