/* =========================================
   WhatsApp floating button (substitui o FilkAI)
   ========================================= */
(function(){
  const PHONE = '5511959409990';
  const MSG = encodeURIComponent('Olá! Vim pelo site da Filka e gostaria de conversar sobre um projeto.');
  const HREF = `https://wa.me/${PHONE}?text=${MSG}`;

  const WIDGET_HTML = `
    <a class="filkai-fab filkai-fab--wa" id="filkaiFab" href="${HREF}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
      <span class="filkai-fab__icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.42 9.42 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.47 9.47zm8.06-17.54A11.36 11.36 0 0 0 12.04.6C5.76.6.65 5.71.65 11.99c0 2.04.53 4.03 1.54 5.79L.56 23.4l5.76-1.51a11.34 11.34 0 0 0 5.72 1.46h.01c6.27 0 11.38-5.11 11.39-11.39 0-3.04-1.19-5.9-3.34-8.05z"/>
        </svg>
      </span>
    </a>
  `;

  const mount = document.createElement('div');
  mount.id = 'filkai-mount';
  mount.innerHTML = WIDGET_HTML + `
    <button class="filkai-totop" id="filkaiToTop" aria-label="Voltar ao topo">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
  `;
  document.body.appendChild(mount);

  const toTop = document.getElementById('filkaiToTop');
  const fab = document.getElementById('filkaiFab');
  toTop.addEventListener('click', () => {
    if (window.filkaSmoothScroll) window.filkaSmoothScroll(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  const footer = document.getElementById('contato');
  const onScroll = () => {
    toTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.8);
    // Hide floating buttons when the footer/contact section is in view
    let overFooter = false;
    if (footer) {
      const r = footer.getBoundingClientRect();
      overFooter = r.top < window.innerHeight - 60;
    }
    document.getElementById('filkai-mount').classList.toggle('over-footer', overFooter);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
