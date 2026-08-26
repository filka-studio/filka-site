/* Shared nav + footer injection
   Usage: include after <body> as <script src="nav.js" defer></script>
*/
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const isActive = (href) => href === path ? 'active' : '';

  const NAV_HTML = `
    <nav class="nav" id="nav">
      <a href="index.html" class="nav__brand" aria-label="Filka">
        <img src="assets/img/filka-wordmark-white.png" alt="Filka" />
      </a>
      <div class="nav__menu">
        <a href="index.html">Início</a>
        <a href="index.html#servicos">Serviços</a>
        <a href="index.html#projetos">Projetos</a>
        <a href="index.html#contato">Contato</a>
      </div>
      <div class="nav__right">
        <div class="nav__lang" id="navLang">
          <button data-lang="pt" class="active">PT</button>
          <button data-lang="en">EN</button>
          <button data-lang="es">ES</button>
        </div>
        <a class="nav__cta" href="contato.html">
          Iniciar projeto
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
        <a href="index.html" class="nav__brand"><img src="assets/img/filka-wordmark-white.png" alt="Filka" /></a>
        <button class="nav__burger" id="closeSheet">
          Fechar
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <a href="index.html">Início</a>
      <a href="index.html#servicos">Serviços</a>
      <a href="index.html#projetos">Projetos</a>
      <a href="index.html#contato">Contato</a>
      <div class="mobile-sheet__lang">
        <button data-lang="pt" class="active">PT</button>
        <button data-lang="en">EN</button>
        <button data-lang="es">ES</button>
      </div>
      <a href="contato.html" style="color: var(--filka-blue)">Iniciar projeto →</a>
    </div>
  `;

  const MOBILE_CTA_HTML = `
    <div class="mobile-cta" id="mobileCta">
      <a class="btn btn--accent" href="contato.html">
        Iniciar projeto
        <span class="arrow"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M9 7h8v8"/></svg></span>
      </a>
    </div>
  `;

  const FOOTER_HTML = `
    <section class="contact-section" id="contato">
      <div class="container">
        <div class="cta-box reveal">
          <div class="contact-top">
            <div class="contact-lead">
              <div class="eyebrow eyebrow--light">vamos conversar</div>
              <h2>Pronto para fazer seus dados <span class="contact-q">responderem?</span></h2>
            </div>
            <div class="contact-info">
              <div class="contact-info__item">
                <span class="contact-info__lab">diga oi!</span>
                <a class="contact-info__val" href="mailto:contato@filkastudio.com.br">contato@filkastudio.com.br</a>
              </div>
              <div class="contact-info__social">
                <span class="contact-info__lab">redes sociais</span>
                <div class="contact-social">
                  <a href="https://www.instagram.com/filka.studio/" target="_blank" rel="noopener" aria-label="Instagram"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2"/><circle cx="12" cy="12" r="4.1"/><circle cx="16.9" cy="7.1" r="1.05" fill="currentColor" stroke="none"/></svg></a>
                  <a href="https://www.linkedin.com/company/filka/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4"/><path d="M7.6 10.4v6.2"/><circle cx="7.6" cy="7.6" r="1.05" fill="currentColor" stroke="none"/><path d="M11.4 16.6v-6.2M11.4 12.9a2.55 2.55 0 0 1 5.1 0v3.7"/></svg></a>
                </div>
              </div>
              <p class="contact-info__note">Vamos construir algo que roda.</p>
              <div class="contact-actions">
                <a class="btn btn--light" href="contato.html">
                  Iniciar projeto
                  <span class="arrow"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                </a>
                <a class="btn btn--outline-light" href="https://calendar.app.google/s7fpLVRSq7ARySYF6" target="_blank" rel="noopener">Agendar reunião</a>
              </div>
            </div>
          </div>

          <div class="contact-wordmark">
            <img src="assets/img/filka-wordmark-hq.png" alt="filka," />
          </div>

          <div class="contact-bottom">
            <span class="contact-bottom__legal">© ${new Date().getFullYear()} Filka. Todos os direitos reservados. </span>
            <span class="contact-bottom__cnpj">CNPJ 56.302.887/0001-27</span>
            <div class="contact-links__group">
              <a href="privacidade.html">Política de privacidade</a>
              <a href="termos.html">Termos de uso</a>
              <a href="#" data-cookie-settings>Cookies</a>
              <a href="trabalhe.html">Trabalhe conosco</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Inject
  const navMount = document.getElementById('nav-mount');
  if (navMount) navMount.outerHTML = NAV_HTML;
  if (navMount) document.body.insertAdjacentHTML('beforeend', MOBILE_CTA_HTML);
  const footerMount = document.getElementById('footer-mount');
  if (footerMount) footerMount.outerHTML = FOOTER_HTML;

  // Scrolled state + hide the mobile CTA bar once the footer (which has its own CTA) is in view
  const nav = document.getElementById('nav');
  const mobileCta = document.getElementById('mobileCta');
  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
    if (mobileCta) {
      const footer = document.querySelector('.contact-section');
      const overFooter = footer && footer.getBoundingClientRect().top < window.innerHeight - 40;
      mobileCta.classList.toggle('is-hidden', !!overFooter);
    }
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
  document.getElementById('burger')?.addEventListener('click', () => {
    sheet.classList.add('open');
    mobileCta?.classList.add('is-hidden');
  });
  document.getElementById('closeSheet')?.addEventListener('click', () => {
    sheet.classList.remove('open');
    onScroll();
  });
  sheet?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    sheet.classList.remove('open');
    onScroll();
  }));

  // Reveal observer
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
