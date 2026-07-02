/* =========================================
   Filka — Cookie consent (first visit only)
   ========================================= */
(function () {
  const KEY = 'filka-cookie-consent';
  const hasConsent = !!localStorage.getItem(KEY);

  const L = {
    pt: {
      text: 'Usamos cookies e tecnologias semelhantes para melhorar a sua experiência no nosso site.',
      more: 'Saiba mais',
      accept: 'Aceitar', reject: 'Recusar', manage: 'Gerenciar',
      title: 'Configurações de Privacidade',
      desc: 'Este site utiliza cookies e tecnologias semelhantes, agrupados nas categorias abaixo. Você pode revisar e gerenciar as suas preferências a qualquer momento.',
      func: 'Funcionais', funcDesc: 'Necessárias para o funcionamento básico do site. Sem elas, partes essenciais não funcionam.', always: 'Sempre ativo',
      pref: 'Preferências', prefDesc: 'Permitem que o site lembre as suas escolhas e ofereça uma experiência mais personalizada.',
      maps: 'Google Maps (mapa de localização)',
      mkt: 'Marketing', mktDesc: 'Usadas por parceiros para mostrar comunicações e anúncios relevantes para você.',
      acceptAll: 'Aceitar tudo', rejectAll: 'Recusar tudo', save: 'Salvar'
    },
    en: {
      text: 'We use cookies and similar technologies to improve your experience on our site.',
      more: 'Learn more',
      accept: 'Accept', reject: 'Decline', manage: 'Manage',
      title: 'Privacy Settings',
      desc: 'This site uses cookies and similar technologies, grouped in the categories below. You can review and manage your preferences at any time.',
      func: 'Functional', funcDesc: 'Required for the basic operation of the site. Without them, essential parts won\u2019t work.', always: 'Always on',
      pref: 'Preferences', prefDesc: 'Let the site remember your choices and offer a more personalized experience.',
      maps: 'Google Maps (location map)',
      mkt: 'Marketing', mktDesc: 'Used by partners to show communications and ads relevant to you.',
      acceptAll: 'Accept all', rejectAll: 'Reject all', save: 'Save'
    },
    es: {
      text: 'Usamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio.',
      more: 'Saber más',
      accept: 'Aceptar', reject: 'Rechazar', manage: 'Gestionar',
      title: 'Configuración de Privacidad',
      desc: 'Este sitio utiliza cookies y tecnologías similares, agrupadas en las categorías de abajo. Puedes revisar y gestionar tus preferencias en cualquier momento.',
      func: 'Funcionales', funcDesc: 'Necesarias para el funcionamiento básico del sitio. Sin ellas, partes esenciales no funcionan.', always: 'Siempre activo',
      pref: 'Preferencias', prefDesc: 'Permiten que el sitio recuerde tus elecciones y ofrezca una experiencia más personalizada.',
      maps: 'Google Maps (mapa de ubicación)',
      mkt: 'Marketing', mktDesc: 'Usadas por socios para mostrar comunicaciones y anuncios relevantes para ti.',
      acceptAll: 'Aceptar todo', rejectAll: 'Rechazar todo', save: 'Guardar'
    }
  };
  const lang = localStorage.getItem('filka-lang') || 'pt';
  const t = L[lang] || L.pt;

  const css = `
    .ck-banner {
      position: fixed; left: 22px; bottom: 22px; z-index: 400;
      width: 380px; max-width: calc(100vw - 32px);
      background: rgba(22,19,31,.92);
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 20px;
      padding: 20px 20px 18px;
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      box-shadow: 0 24px 60px -18px rgba(0,0,0,.6);
      color: #EFEBE3;
      font-family: 'Cabin', system-ui, sans-serif;
      opacity: 0; transform: translateY(14px);
      transition: opacity .45s cubic-bezier(.22,.61,.36,1), transform .45s cubic-bezier(.22,.61,.36,1);
    }
    .ck-banner.show { opacity: 1; transform: none; }
    .ck-top { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 16px; }
    .ck-icon {
      width: 38px; height: 38px; flex: none; border-radius: 11px;
      display: grid; place-items: center;
      background: linear-gradient(135deg, rgba(236,174,120,.22), rgba(236,174,120,.08));
      border: 1px solid rgba(236,174,120,.35); color: #ECAE78;
    }
    .ck-text { font-size: 13.5px; line-height: 1.5; color: rgba(239,235,227,.85); margin: 2px 0 0; }
    .ck-text a { color: #ECAE78; text-decoration: none; border-bottom: 1px solid rgba(236,174,120,.4); }
    .ck-text a:hover { border-bottom-color: #ECAE78; }
    .ck-actions { display: flex; gap: 8px; }
    .ck-btn {
      flex: 1; cursor: pointer; font-family: 'JetBrains Mono', monospace;
      font-size: 12px; letter-spacing: .02em; padding: 11px 8px; border-radius: 999px;
      border: 1px solid rgba(255,255,255,.18); background: transparent; color: rgba(239,235,227,.85);
      transition: background .2s, border-color .2s, color .2s, transform .2s;
    }
    .ck-btn:hover { border-color: rgba(255,255,255,.4); transform: translateY(-1px); }
    .ck-btn--primary {
      background: linear-gradient(120deg, #5E84C4, #6A5FA6);
      border-color: transparent; color: #fff; font-weight: 500;
    }
    .ck-btn--primary:hover { filter: brightness(1.08); }
    @media (max-width: 540px) {
      .ck-banner { left: 12px; right: 12px; bottom: 12px; width: auto; }
    }

    /* Manage modal */
    .ck-overlay {
      position: fixed; inset: 0; z-index: 500;
      background: rgba(8,6,14,.66);
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      display: grid; place-items: center; padding: 24px;
      opacity: 0; transition: opacity .35s ease;
    }
    .ck-overlay.show { opacity: 1; }
    .ck-modal {
      width: 640px; max-width: 100%; max-height: calc(100vh - 48px); overflow-y: auto;
      background: #16131F; color: #EFEBE3;
      border: 1px solid rgba(255,255,255,.12); border-radius: 22px;
      padding: 34px 34px 28px;
      font-family: 'Cabin', system-ui, sans-serif;
      box-shadow: 0 40px 90px -30px rgba(0,0,0,.7);
      transform: translateY(16px) scale(.98); transition: transform .35s cubic-bezier(.22,.61,.36,1);
    }
    .ck-overlay.show .ck-modal { transform: none; }
    .ck-modal::-webkit-scrollbar { width: 7px; }
    .ck-modal::-webkit-scrollbar-thumb { background: rgba(255,255,255,.16); border-radius: 9px; }
    .ck-modal__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 8px; }
    .ck-modal__title { font-family: 'Baumans', system-ui, sans-serif; font-weight: 400; font-size: 27px; letter-spacing: .01em; margin: 0; }
    .ck-close {
      width: 36px; height: 36px; flex: none; border-radius: 50%;
      background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.16); color: rgba(239,235,227,.8);
      display: grid; place-items: center; cursor: pointer; transition: background .2s;
    }
    .ck-close:hover { background: rgba(255,255,255,.14); }
    .ck-modal__desc { font-size: 14px; line-height: 1.55; color: rgba(239,235,227,.7); margin: 0 0 22px; max-width: 56ch; }
    .ck-cat { padding: 20px 0; border-top: 1px solid rgba(255,255,255,.1); display: flex; gap: 14px; align-items: flex-start; }
    .ck-cat:first-of-type { border-top: none; }
    .ck-check {
      width: 26px; height: 26px; flex: none; border-radius: 8px; cursor: pointer;
      border: 1px solid rgba(255,255,255,.22); background: rgba(255,255,255,.04);
      display: grid; place-items: center; color: transparent; transition: background .2s, border-color .2s, color .2s;
    }
    .ck-check.on { background: linear-gradient(135deg, #5E84C4, #6A5FA6); border-color: transparent; color: #fff; }
    .ck-check.locked { background: linear-gradient(135deg, #5E84C4, #6A5FA6); border-color: transparent; color: #fff; cursor: not-allowed; opacity: .9; }
    .ck-cat__body { flex: 1; }
    .ck-cat__top { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .ck-cat__name { font-family: 'Baumans', system-ui, sans-serif; font-size: 18px; }
    .ck-pill {
      font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: .06em;
      color: #B9E2B5; background: rgba(159,216,155,.12); border: 1px solid rgba(159,216,155,.3);
      padding: 4px 9px; border-radius: 999px;
    }
    .ck-cat__desc { font-size: 13.5px; line-height: 1.5; color: rgba(239,235,227,.65); margin: 7px 0 0; }
    .ck-sub {
      margin-top: 14px; padding: 12px 14px; border-radius: 12px;
      background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1);
      display: flex; align-items: center; gap: 12px;
    }
    .ck-sub .ck-check { width: 22px; height: 22px; }
    .ck-sub__label { font-size: 13.5px; color: rgba(239,235,227,.85); }
    .ck-modal__foot { display: flex; align-items: center; gap: 10px; margin-top: 26px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,.1); }
    .ck-modal__foot .ck-btn { flex: 0 0 auto; padding: 12px 22px; }
    .ck-modal__foot .ck-btn--save { margin-left: auto; padding: 12px 30px; }
    @media (max-width: 540px) {
      .ck-modal { padding: 24px 20px; }
      .ck-modal__foot { flex-wrap: wrap; }
      .ck-modal__foot .ck-btn--save { margin-left: 0; flex: 1; }
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  let el = null;
  function buildBanner() {
  el = document.createElement('div');
  el.className = 'ck-banner';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-label', 'Cookies');
  el.innerHTML = `
    <div class="ck-top">
      <span class="ck-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"/>
          <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/>
          <circle cx="14.5" cy="14.5" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </span>
      <p class="ck-text">${t.text} <a href="#">${t.more}</a>.</p>
    </div>
    <div class="ck-actions">
      <button class="ck-btn ck-btn--primary" data-ck="accept">${t.accept}</button>
      <button class="ck-btn" data-ck="reject">${t.reject}</button>
      <button class="ck-btn" data-ck="manage">${t.manage}</button>
    </div>
  `;
  document.body.appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));

  el.querySelectorAll('[data-ck]').forEach(btn => {
    btn.addEventListener('click', () => {
      const c = btn.dataset.ck;
      if (c === 'manage') { openManage(); return; }
      close(c);
    });
  });
  }

  function close(choice) {
    localStorage.setItem(KEY, choice);
    if (el) { el.classList.remove('show'); setTimeout(() => el.remove(), 450); el = null; }
  }

  // ---- Manage modal ----
  let overlay = null;
  function openManage() {
    if (overlay) { overlay.classList.add('show'); return; }
    overlay = document.createElement('div');
    overlay.className = 'ck-overlay';
    overlay.innerHTML = `
      <div class="ck-modal" role="dialog" aria-modal="true" aria-label="${t.title}">
        <div class="ck-modal__head">
          <h2 class="ck-modal__title">${t.title}</h2>
          <button class="ck-close" data-close aria-label="Fechar">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <p class="ck-modal__desc">${t.desc}</p>

        <div class="ck-cat">
          <span class="ck-check locked" aria-disabled="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </span>
          <div class="ck-cat__body">
            <div class="ck-cat__top"><span class="ck-cat__name">${t.func}</span><span class="ck-pill">${t.always}</span></div>
            <p class="ck-cat__desc">${t.funcDesc}</p>
          </div>
        </div>

        <div class="ck-cat">
          <span class="ck-check" data-toggle="pref" role="checkbox" aria-checked="false" tabindex="0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </span>
          <div class="ck-cat__body">
            <div class="ck-cat__top"><span class="ck-cat__name">${t.pref}</span></div>
            <p class="ck-cat__desc">${t.prefDesc}</p>
            <div class="ck-sub">
              <span class="ck-check" data-toggle="maps" role="checkbox" aria-checked="false" tabindex="0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </span>
              <span class="ck-sub__label">${t.maps}</span>
            </div>
          </div>
        </div>

        <div class="ck-cat">
          <span class="ck-check" data-toggle="mkt" role="checkbox" aria-checked="false" tabindex="0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </span>
          <div class="ck-cat__body">
            <div class="ck-cat__top"><span class="ck-cat__name">${t.mkt}</span></div>
            <p class="ck-cat__desc">${t.mktDesc}</p>
          </div>
        </div>

        <div class="ck-modal__foot">
          <button class="ck-btn" data-all="accept">${t.acceptAll}</button>
          <button class="ck-btn" data-all="reject">${t.rejectAll}</button>
          <button class="ck-btn ck-btn--primary ck-btn--save" data-save>${t.save}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('show')));

    const toggles = {};
    overlay.querySelectorAll('[data-toggle]').forEach(chk => {
      const k = chk.dataset.toggle; toggles[k] = false;
      const flip = () => { toggles[k] = !toggles[k]; chk.classList.toggle('on', toggles[k]); chk.setAttribute('aria-checked', String(toggles[k])); };
      chk.addEventListener('click', flip);
      chk.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
    });

    const closeModal = () => { overlay.classList.remove('show'); setTimeout(() => { overlay.remove(); overlay = null; }, 350); };
    overlay.querySelector('[data-close]').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function esc(e){ if (e.key === 'Escape' && overlay) { closeModal(); document.removeEventListener('keydown', esc); } });

    overlay.querySelector('[data-all="accept"]').addEventListener('click', () => { close('accept'); closeModal(); });
    overlay.querySelector('[data-all="reject"]').addEventListener('click', () => { close('reject'); closeModal(); });
    overlay.querySelector('[data-save]').addEventListener('click', () => {
      localStorage.setItem(KEY, 'custom:' + JSON.stringify(toggles));
      if (el) { el.classList.remove('show'); setTimeout(() => el.remove(), 450); el = null; }
      closeModal();
    });
  }

  // Show the first-visit banner only if no choice has been made yet.
  if (!hasConsent) buildBanner();

  // Expose so the footer "Cookies" link can reopen the settings anytime.
  window.openCookieSettings = openManage;
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-cookie-settings]');
    if (link) { e.preventDefault(); openManage(); }
  });
})();
