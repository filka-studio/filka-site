/* =========================================
   Filka — Custom circular cursor
   ========================================= */
(function () {
  // Skip on touch / coarse pointers — keep the native cursor there.
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

  const ring = document.createElement('div');
  ring.className = 'filka-cursor';
  const dot = document.createElement('div');
  dot.className = 'filka-cursor-dot';
  document.documentElement.appendChild(ring);
  document.documentElement.appendChild(dot);
  document.documentElement.classList.add('has-filka-cursor');

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  let visible = false;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    if (!visible) { visible = true; ring.classList.add('on'); dot.classList.add('on'); }
    const t = e.target.closest('a, button, [role="button"], input, textarea, select, summary, .faq-q, label');
    ring.classList.toggle('hover', !!t);
  });

  window.addEventListener('mousedown', () => ring.classList.add('down'));
  window.addEventListener('mouseup', () => ring.classList.remove('down'));
  document.addEventListener('mouseleave', () => { visible = false; ring.classList.remove('on'); dot.classList.remove('on'); });

  function raf() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();
