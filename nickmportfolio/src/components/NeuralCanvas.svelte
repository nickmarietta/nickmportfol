<script>
  import { onMount } from 'svelte';

  let canvas;

  onMount(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    const ctx = canvas.getContext('2d');

    let W, H, dpr, nodes = [], pulses = [];
    const CONFIG = { density: 0.00010, linkDist: 170, speed: 0.18 };

    let COL_NODE, COL_LINE, COL_PULSE;
    function readColors() {
      const light = root.getAttribute('data-theme') === 'light';
      COL_NODE  = light ? 'rgba(10,92,176,'  : 'rgba(77,163,255,';
      COL_LINE  = light ? 'rgba(10,92,176,'  : 'rgba(77,163,255,';
      COL_PULSE = light ? 'rgba(10,138,168,' : 'rgba(103,232,249,';
    }

    function buildNet() {
      readColors();
      const count = Math.max(26, Math.min(90, Math.floor(W * H * CONFIG.density)));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * CONFIG.speed, vy: (Math.random() - 0.5) * CONFIG.speed,
          r: Math.random() * 1.6 + 1.1
        });
      }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNet();
    }

    function spawnPulse() {
      if (nodes.length < 2) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      let b = null, bd = 1e9;
      for (const n of nodes) {
        if (n === a) continue;
        const d = Math.hypot(n.x - a.x, n.y - a.y);
        if (d < CONFIG.linkDist && d < bd) { bd = d; b = n; }
      }
      if (b) pulses.push({ a, b, t: 0, sp: 0.012 + Math.random() * 0.01 });
    }

    let frame = 0, running = false;

    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < CONFIG.linkDist) {
            const al = (1 - d / CONFIG.linkDist) * 0.18;
            ctx.strokeStyle = COL_LINE + al + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = COL_NODE + '0.55)';
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]; p.t += p.sp;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        const fade = Math.sin(p.t * Math.PI);
        ctx.fillStyle = COL_PULSE + (0.9 * fade) + ')';
        ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = COL_PULSE + (0.18 * fade) + ')';
        ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
      }
      frame++;
      if (frame % 70 === 0 && pulses.length < 6) spawnPulse();
      requestAnimationFrame(draw);
    }

    function staticFrame() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < CONFIG.linkDist) {
            ctx.strokeStyle = COL_LINE + ((1 - d / CONFIG.linkDist) * 0.16) + ')';
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = COL_NODE + '0.5)';
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
    }

    function start() { if (running) return; running = true; requestAnimationFrame(draw); }
    function stop() { running = false; staticFrame(); }

    const onResize = () => { resize(); if (!running) staticFrame(); };
    window.addEventListener('resize', onResize);
    resize();

    if (reduce) {
      for (const n of nodes) { n.vx = 0; n.vy = 0; }
      staticFrame();
    } else {
      start();
    }

    window.buildNet = buildNet;
    window.NM = {
      setAccent(c1, c2) { if (c1) root.style.setProperty('--accent', c1); if (c2) root.style.setProperty('--accent-2', c2); readColors(); if (!running) staticFrame(); },
      setDensity(d) { CONFIG.density = d; buildNet(); if (!running) staticFrame(); },
      setMotion(on) { if (reduce) return; on ? start() : stop(); },
      setHeadingFont(f) { root.style.setProperty('--display', f); }
    };

    return () => {
      running = false;
      window.removeEventListener('resize', onResize);
      delete window.buildNet;
      delete window.NM;
    };
  });
</script>

<canvas bind:this={canvas} id="net-canvas"></canvas>
