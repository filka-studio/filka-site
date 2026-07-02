// Plexus Network — decorative hero background (ported from Plexus Network.dc.html, standalone)
(function () {
  const canvas = document.getElementById('hero-plexus');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const W = 1920, H = 1080;
  const T = 16;          // seamless loop period (s)
  const mobile = window.matchMedia && window.matchMedia('(max-width: 760px)').matches;
  const N = mobile ? 64 : 120;   // network nodes (fewer on mobile for perf)
  const DUST = mobile ? 34 : 70; // free-floating twinkle particles
  const linkDist = 260;  // px connection threshold

  let s = 987654321;
  const rng = () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

  const cxB = W * 0.80, cyB = H * 0.50, maxR = 640;
  function mkNode() {
    const ang = rng() * 6.2832;
    const rad = Math.pow(rng(), 0.62) * maxR;
    const bx = cxB + Math.cos(ang) * rad * 1.05;
    const by = cyB + Math.sin(ang) * rad * 0.82;
    let z = (bx - 780) / (1760 - 780);
    z = Math.min(1, Math.max(0, z));
    z = Math.pow(z, 0.85) + (rng() - 0.5) * 0.18;
    z = Math.min(1, Math.max(0, z));
    const A = () => 26 + rng() * 74;
    return {
      bx, by, z,
      op: 0.3 + Math.pow(rng(), 1.4) * 0.7,
      a1x: A(), a2x: A() * 0.5, p1x: rng() * 6.2832, p2x: rng() * 6.2832,
      a1y: A(), a2y: A() * 0.5, p1y: rng() * 6.2832, p2y: rng() * 6.2832,
      tw: rng() * 6.2832, twk: 1 + Math.floor(rng() * 3)
    };
  }

  const nodes = Array.from({ length: N }, mkNode);
  const dust = Array.from({ length: DUST }, () => { const n = mkNode(); n.z = 0.15 + rng() * 0.5; n.a1x *= 1.6; n.a1y *= 1.6; return n; });
  const pos = Array.from({ length: N }, () => ({ x: 0, y: 0 }));

  const wave = { C: 10, R: 60 };
  const waveR = Array.from({ length: wave.C * wave.R }, () => ({ op: 0.45 + rng() * 0.55, ph: rng() * 6.2832 }));

  function evalN(n, w, t) {
    return {
      x: n.bx + n.a1x * Math.sin(w * t + n.p1x) + n.a2x * Math.sin(2 * w * t + n.p2x),
      y: n.by + n.a1y * Math.sin(w * t + n.p1y) + n.a2y * Math.sin(2 * w * t + n.p2y)
    };
  }

  function drawWaves(w, t) {
    const C = wave.C, R = wave.R, Xr = W * 0.995, colGap = 30;
    ctx.lineCap = 'round';
    for (let j = 0; j < C; j++) {
      const zN = 1 - j / (C - 1);
      const baseX = Xr - j * colGap;
      const amp = 52 * (0.35 + 0.65 * zN);
      let prev = null;
      for (let i = 0; i < R; i++) {
        const rr = waveR[j * R + i];
        const y0 = -30 + i * (H + 60) / (R - 1);
        const wv = Math.sin(i * 0.5 + j * 0.55 + w * t) + 0.55 * Math.sin(i * 0.92 - 2 * w * t + j * 0.4);
        const x = baseX + wv * amp + Math.sin(i * 0.3 + w * t + rr.ph) * 4;
        const y = y0 + wv * 7 * zN;
        const crest = 0.5 + 0.5 * wv / 1.55;
        const al = (0.12 + 0.7 * zN) * Math.max(0, crest) * rr.op;
        if (prev && al > 0.015) {
          ctx.strokeStyle = 'rgba(120,190,255,' + (al * 0.95).toFixed(3) + ')';
          ctx.lineWidth = 0.7 + zN * 2.2;
          ctx.beginPath(); ctx.moveTo(prev.x, prev.y); ctx.lineTo(x, y); ctx.stroke();
        }
        prev = { x, y };
        if (al <= 0.02 || i % 6 !== 0) continue;
        const rad = (0.7 + zN * 2.2) * (0.6 + 0.4 * crest);
        ctx.fillStyle = 'rgba(205,230,255,' + Math.min(0.85, al * 1.2).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(x, y, rad, 0, 6.2832); ctx.fill();
      }
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, W, H);
    const w = 2 * Math.PI / T;
    const t = ((time % T) + T) % T;

    for (let i = 0; i < N; i++) { const p = evalN(nodes[i], w, t); pos[i].x = p.x; pos[i].y = p.y; }

    drawWaves(w, t);

    ctx.lineCap = 'round';
    for (let i = 0; i < N; i++) {
      const a = pos[i], za = nodes[i].z;
      for (let j = i + 1; j < N; j++) {
        const b = pos[j];
        const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d >= linkDist) continue;
        const zAvg = (za + nodes[j].z) * 0.5;
        const opAvg = (nodes[i].op + nodes[j].op) * 0.5;
        const fall = 1 - d / linkDist;
        const al = Math.pow(fall, 1.5) * (0.10 + 0.55 * zAvg) * opAvg;
        if (al <= 0.012) continue;
        ctx.strokeStyle = 'rgba(120,190,255,' + al.toFixed(3) + ')';
        ctx.lineWidth = 0.6 + zAvg * zAvg * 4.6;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }

    for (let i = 0; i < N; i++) {
      const n = nodes[i], p = pos[i], z = n.z;
      const tw = 0.72 + 0.28 * Math.sin(w * n.twk * t + n.tw);
      const rad = (1.2 + z * z * 9) * tw;
      const al = (0.22 + 0.72 * z) * tw * n.op;
      const focus = Math.min(1, Math.max(0, (z - 0.28) / 0.5));
      const glowR = rad * (4.4 + (1 - z) * 4.5);
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
      g.addColorStop(0, 'rgba(150,205,255,' + (al * (0.35 + 0.35 * focus)).toFixed(3) + ')');
      g.addColorStop(1, 'rgba(74,168,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(p.x, p.y, glowR, 0, 6.2832); ctx.fill();
      if (focus > 0.02) {
        ctx.fillStyle = 'rgba(206,232,255,' + Math.min(0.95, al * focus).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(p.x, p.y, rad * (0.55 + 0.45 * focus), 0, 6.2832); ctx.fill();
      }
    }

    for (let i = 0; i < dust.length; i++) {
      const n = dust[i], p = evalN(n, w, t);
      const tw = 0.5 + 0.5 * Math.sin(w * n.twk * t + n.tw);
      const al = (0.10 + 0.28 * n.z) * tw;
      if (al <= 0.01) continue;
      ctx.fillStyle = 'rgba(170,215,255,' + al.toFixed(3) + ')';
      ctx.beginPath(); ctx.arc(p.x, p.y, 0.8 + n.z * 1.4, 0, 6.2832); ctx.fill();
    }
  }

  let time = 0, last = 0;
  function tick(ts) {
    if (!last) last = ts;
    let dt = (ts - last) / 1000; last = ts; if (dt > 0.1) dt = 0.1;
    time = (time + dt) % T;
    draw(time);
    requestAnimationFrame(tick);
  }
  draw(0);
  requestAnimationFrame(tick);
})();
