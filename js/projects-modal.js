/* =========================================
   Project preview modal
   Any <a data-project href="SITE_URL"> opens an in-page
   modal with the site in an iframe instead of navigating away.
   ========================================= */
(function () {
  const triggers = document.querySelectorAll('[data-project]');
  if (!triggers.length) return;

  const modal = document.createElement('div');
  modal.className = 'pmodal';
  modal.id = 'pmodal';
  modal.innerHTML = `
    <div class="pmodal__backdrop" data-close></div>
    <div class="pmodal__dialog" role="dialog" aria-modal="true" aria-label="Pré-visualização do projeto">
      <div class="pmodal__bar">
        <span class="pmodal__title"></span>
        <div class="pmodal__actions">
          <button class="pmodal__ext" type="button" disabled aria-disabled="true">
            <span class="pmodal__ext-label">Abrir site</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17L17 7M9 7h8v8"/></svg>
          </button>
          <button class="pmodal__close" type="button" aria-label="Fechar" data-close>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
      </div>
      <div class="pmodal__frame"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const titleEl = modal.querySelector('.pmodal__title');
  const extLabelEl = modal.querySelector('.pmodal__ext-label');
  const frameEl = modal.querySelector('.pmodal__frame');
  let lastFocus = null;

  const extLabel = () => {
    const l = localStorage.getItem('filka-lang');
    return l === 'en' ? 'Open site' : l === 'es' ? 'Abrir sitio' : 'Abrir site';
  };

  function open(url, name) {
    lastFocus = document.activeElement;
    titleEl.textContent = name || '';
    if (extLabelEl) extLabelEl.textContent = extLabel();
    // (Re)create iframe each open so it loads fresh and is torn down on close
    frameEl.innerHTML = `<iframe src="${url}" title="${name || 'Projeto'}" loading="lazy"></iframe>`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.pmodal__close').focus();
  }

  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    // Delay clearing the iframe until the fade-out finishes
    setTimeout(() => { frameEl.innerHTML = ''; }, 300);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  triggers.forEach((t) => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      const url = t.getAttribute('data-project-url') || t.getAttribute('href');
      const name = t.getAttribute('data-project-name') || t.querySelector('.showcase-card__name')?.textContent?.trim() || '';
      if (url) open(url, name);
    });
  });

  modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
})();
