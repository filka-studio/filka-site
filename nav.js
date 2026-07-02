/* Shared nav + footer injection
   Usage: include after <body> as <script src="nav.js" defer></script>
*/
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const isActive = (href) => href === path ? 'active' : '';

  const NAV_HTML = `
    <nav class="nav" id="nav">
      <a href="index.html" class="nav__brand" aria-label="Filka">
        <img src="assets/filka-wordmark-white.png" alt="Filka" />
      </a>
      <div class="nav__menu">
        <a href="index.html#servicos">Serviços</a>
        <a href="index.html#processo">Processo</a>
        <a href="index.html#precos">Preços</a>
        <a href="index.html#contato">Contato</a>
      </div>
      <div class="nav__right">
        <div class="nav__lang" id="navLang">
          <button data-lang="pt" class="active">PT</button>
          <button data-lang="en">EN</button>
          <button data-lang="es">ES</button>
        </div>
        <a class="nav__cta" href="https://calendar.app.google/s7fpLVRSq7ARySYF6" target="_blank" rel="noopener">
          Fale Conosco
          <span class="arrow"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M9 7h8v8"/></svg></span>
        </a>
        <button class="nav__burger" id="burger" aria-label="Abrir menu">
          Menu
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16M4 17h16"/></svg>
        </button>
      </div>
    </nav>

    <div class="mobile-sheet" id="mobileSheet" aria-hidden="true">
      <div class="mobile-sheet__top">
        <a href="index.html" class="nav__brand"><img src="assets/filka-wordmark-white.png" alt="Filka" /></a>
        <button class="nav__burger" id="closeSheet">
          Fechar
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <a href="index.html#servicos">Serviços</a>
      <a href="index.html#processo">Processo</a>
      <a href="index.html#precos">Preços</a>
      <a href="index.html#contato">Contato</a>
      <div class="mobile-sheet__lang">
        <button data-lang="pt" class="active">PT</button>
        <button data-lang="en">EN</button>
        <button data-lang="es">ES</button>
      </div>
      <a href="https://calendar.app.google/s7fpLVRSq7ARySYF6" target="_blank" rel="noopener" style="color: var(--filka-blue)">Fale Conosco →</a>
    </div>
  `;

  const FOOTER_HTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <img src="assets/filka-wordmark-white.png" alt="Filka" />
            <p>Integramos programação e design para transformar visão em produto. Alta qualidade, agilidade e cuidado em cada entrega.</p>
          </div>
          <div>
            <h4>Navegar</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="produtos.html">Produtos</a></li>
              <li><a href="projetos.html">Projetos</a></li>
              <li><a href="cases.html">Cases</a></li>
              <li><a href="sobre.html">Sobre</a></li>
            </ul>
          </div>
          <div>
            <h4>Serviços</h4>
            <ul>
              <li><a href="produtos.html#engenharia">Engenharia de Software</a></li>
              <li><a href="produtos.html#analytics">Analytics Engineering</a></li>
              <li><a href="produtos.html#design">Design Digital</a></li>
              <li><a href="produtos.html#ia">Agentes & IA</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:fmartins.nascimento@outlook.com">fmartins.nascimento<br/>@outlook.com</a></li>
              <li><a href="tel:+5511959409990">+55 11 95940-9990</a></li>
              <li><a href="https://www.linkedin.com/company/filka/" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="https://calendar.app.google/s7fpLVRSq7ARySYF6" target="_blank" rel="noopener">Agendar reunião</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <span>© ${new Date().getFullYear()} Filka — Inovando com a Tecnologia.</span>
          <span>São Paulo / BR · Atendimento remoto</span>
        </div>
      </div>
    </footer>
  `;

  // Inject
  const navMount = document.getElementById('nav-mount');
  if (navMount) navMount.outerHTML = NAV_HTML;
  const footerMount = document.getElementById('footer-mount');
  if (footerMount) footerMount.outerHTML = FOOTER_HTML;

  // Scrolled state
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('.faq-list').forEach(list => {
    list.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('is-open');
        // close siblings for a clean single-open accordion
        list.querySelectorAll('.faq-item.is-open').forEach(other => {
          if (other !== item) {
            other.classList.remove('is-open');
            other.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.toggle('is-open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  });

  // Custom eased smooth-scroll (consistent across browsers)
  const easeInOutCubic = t => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
  let scrollAnim = null;
  function smoothScrollTo(targetY, duration = 800) {
    if (scrollAnim) cancelAnimationFrame(scrollAnim);
    const startY = window.scrollY;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    const destY = Math.max(0, Math.min(targetY, maxY));
    const dist = destY - startY;
    if (Math.abs(dist) < 2) { window.scrollTo(0, destY); return; }
    // scale duration a bit with distance, clamped
    const dur = Math.min(1100, Math.max(450, Math.abs(dist) * 0.6));
    let start = null;
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      window.scrollTo(0, startY + dist * easeInOutCubic(p));
      if (p < 1) scrollAnim = requestAnimationFrame(step);
      else scrollAnim = null;
    };
    scrollAnim = requestAnimationFrame(step);
  }
  window.filkaSmoothScroll = smoothScrollTo;

  // Smooth scroll for any in-page anchor whose target exists (with fixed-header offset)
  const NAV_OFFSET = 80;
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="#"]');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;
    const id = href.slice(hashIndex + 1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return; // not on this page → let the browser navigate normally
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    smoothScrollTo(y);
    history.pushState(null, '', '#' + id);
    document.getElementById('mobileSheet')?.classList.remove('open');
  });

  // Language switch (visual selection; persists choice)
  const savedLang = localStorage.getItem('filka-lang') || 'pt';
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === savedLang);
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      localStorage.setItem('filka-lang', lang);
      document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      if (window.filkaApplyLang) window.filkaApplyLang(lang);
    });
  });

  // Mobile sheet
  const sheet = document.getElementById('mobileSheet');
  document.getElementById('burger')?.addEventListener('click', () => sheet.classList.add('open'));
  document.getElementById('closeSheet')?.addEventListener('click', () => sheet.classList.remove('open'));
  sheet?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => sheet.classList.remove('open')));

  // Reveal observer
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
