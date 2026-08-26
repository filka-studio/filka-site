/* =========================================
   Filka — Service methodology modal
   Turns each "Saiba mais" row into an in-page modal
   with the category's methodology + solutions.
   Falls back to the standalone page if JS is off.
   ========================================= */
(function () {
  const DATA = {
    td: {
      eyebrow: 'transformação digital',
      title: 'Tecnologia que devolve tempo.',
      lede: 'Mapeamos o processo, redesenhamos o fluxo e colocamos tecnologia onde ela realmente destrava a operação. Da estratégia ao squad que executa junto com o seu time.',
      methodIntro: 'Começa com entendimento, não com ferramenta. Três fases, ao lado do seu time.',
      flow: [
        {
          title: 'Análise de Negócio',
          desc: 'Estudamos o mercado do cliente e definimos junto com você a proposta de valor e as métricas de sucesso do negócio.',
          tags: ['Engenharia de Valor'],
          nodes: ['Benchmark e tendências de mercado', 'Proposta de valor', 'Definição de entregas']
        },
        {
          title: 'Modelagem de Solução',
          desc: 'Imersão com stakeholders e usuários-chave para absorver o conhecimento de negócio e conduzir a ideação da solução.',
          tags: ['Design Thinking', 'Lean UX'],
          nodes: ['Definição de funcionalidades', 'Análise e levantamento de requisitos', 'Brainstorm e ideação', 'Validação de ideias'],
          loopFrom: 1
        },
        {
          title: 'Entrega de Valor Constante',
          desc: 'Metodologias ágeis para entregar os objetivos de negócio reduzindo o risco do projeto e otimizando o tempo de entrega.',
          tags: ['Scrum', 'XP', 'Agile'],
          cycle: ['Observar', 'Orientar', 'Decidir', 'Agir']
        }
      ],
      products: [
        ['Integração de sistemas', 'Fazemos as ferramentas que você já paga conversarem entre si, por API, conectores e camadas de integração.'],
        ['Salesforce sob medida', 'Sales Cloud ajustado à sua operação: automações em Apex e Flows, componentes LWC e integrações com o resto do parque.'],
        ['Desenvolvimento de software', 'Sistemas e produtos internos construídos sob medida, do back ao front, feitos para rodar em produção e não para virar protótipo.'],
        ['Manutenção de Legado', 'Sustentação e evolução de sistemas antigos que ainda sustentam o negócio: correções, atualização de dependências e modernização por partes, sem parar a operação.']
      ]
    },
    dia: {
      eyebrow: 'dados e ia',
      title: 'Do dado bruto à decisão.',
      lede: 'Diagnóstico do seu ambiente, camada de IA e BI com governança de verdade e automações que tiram o trabalho repetitivo do caminho do seu time.',
      methodIntro: 'Começamos no ambiente que você já tem. Três fases, até o dado responder ao negócio.',
      flow: [
        {
          title: 'Análise do Ambiente',
          desc: 'Lemos a arquitetura, a qualidade dos pipelines e a governança que já existem, e definimos com você as perguntas que o dado precisa responder.',
          tags: ['Data Discovery'],
          nodes: ['Leitura da arquitetura', 'Perguntas do negócio', 'Definição de indicadores']
        },
        {
          title: 'Modelagem e Governança',
          desc: 'Organizamos camadas, permissões e contexto por domínio até os números fecharem entre relatórios, validando com quem usa.',
          tags: ['Data Governance', 'Lean Analytics'],
          nodes: ['Modelagem das camadas', 'Qualidade e permissões', 'Contexto por domínio', 'Validação com usuários'],
          loopFrom: 1
        },
        {
          title: 'Entrega e Evolução',
          desc: 'Camada de IA/BI e automações no ar, com monitoramento de uso e custo para seguir ajustando o que dá retorno.',
          tags: ['Scrum', 'MLOps'],
          cycle: ['Medir', 'Aprender', 'Ajustar', 'Escalar']
        }
      ],
      products: [
        ['Diagnóstico de dados', 'Auditoria técnica do ambiente: camadas, qualidade dos pipelines, governança, custo de processamento e prontidão para IA. Entrega relatório executivo e plano priorizado.'],
        ['IA e BI', 'Modelagem das views, permissões, contexto por domínio de negócio e exemplos validados com usuários reais. Seu time pergunta em português e o dado responde.'],
        ['Automação', 'Aquele processo manual que consome horas todo mês vira rotina automática: ETLs, integrações, conectores de API e relatórios que se montam sozinhos.']
      ]
    },
    dm: {
      eyebrow: 'digital e marca',
      title: 'Sua marca no ar, com engenharia.',
      lede: 'A cara da sua empresa no digital, desenhada por quem entende de marca e construída por quem entende de código. Carrega rápido, mede tudo e converte.',
      methodIntro: 'Marca e site na mesma linha. Três fases, do posicionamento ao site no ar.',
      flow: [
        {
          title: 'Imersão de Marca',
          desc: 'Entendemos o negócio, o público e o que te diferencia da concorrência. É daqui que sai cada decisão visual depois.',
          tags: ['Brand Strategy'],
          nodes: ['Diagnóstico de marca', 'Público e posicionamento', 'Definição da mensagem']
        },
        {
          title: 'Arquitetura e Design',
          desc: 'Estruturamos as páginas e a mensagem antes de desenhar, e detalhamos a direção visual junto com você até o layout fechar.',
          tags: ['Design Thinking', 'Lean UX'],
          nodes: ['Arquitetura de conteúdo', 'Wireframe e fluxo', 'Direção visual', 'Validação do layout'],
          loopFrom: 1
        },
        {
          title: 'Publicação e Otimização',
          desc: 'Vai ao ar com SEO técnico e analytics configurados, e segue evoluindo com base no que os dados mostram.',
          tags: ['SEO', 'CRO', 'Agile'],
          cycle: ['Publicar', 'Medir', 'Aprender', 'Ajustar']
        }
      ],
      products: [
        ['One page', 'Uma página, um objetivo. Copy orientada a conversão, design alinhado à marca e métricas configuradas desde o primeiro dia.'],
        ['Site institucional com blog', 'Sua marca no ar com várias páginas e área de conteúdo, SEO técnico, performance e integração com CRM e ferramentas de marketing.'],
        ['Identidade visual', 'Marca com conceito: paleta, tipografia, aplicações e um manual objetivo que as pessoas realmente usam no dia a dia.'],
        ['Criação de logo', 'Desenho do símbolo e da assinatura da marca, com variações para cada uso e arquivos entregues em todos os formatos.'],
        ['Cartão de visita', 'Papelaria alinhada à identidade, pronta para impressão, com arquivo fechado e especificação para a gráfica.'],
        ['Social media', 'Conteúdo e posts para redes sociais: linha visual consistente, calendário editorial e peças prontas para publicar.']
      ]
    }
  };

  const LABELS = {
    pt: { method: 'Metodologia', how: 'como trabalhamos', sol: 'soluções', what: 'O que entregamos', step: 'ETAPA', start: 'Iniciar projeto', book: 'Agendar reunião', close: 'Fechar' },
    en: { method: 'Methodology', how: 'how we work', sol: 'solutions', what: 'What we deliver', step: 'STEP', start: 'Start a project', book: 'Book a meeting', close: 'Close' },
    es: { method: 'Metodología', how: 'cómo trabajamos', sol: 'soluciones', what: 'Qué entregamos', step: 'ETAPA', start: 'Iniciar proyecto', book: 'Agendar reunión', close: 'Cerrar' }
  };
  const L = () => LABELS[localStorage.getItem('filka-lang')] || LABELS.pt;


  // The whole spine is ONE svg path: first dot -> down -> elbow -> across -> arrow.
  // Drawn in a single stroke so there are no seams between separately painted pieces.
  function drawSpine(root) {
    root.querySelectorAll('.flow').forEach((flow) => {
      const phases = [...flow.querySelectorAll('.flow__phase')];
      const first = phases[0] && phases[0].querySelector('.flow__dot');
      const cycT = flow.querySelector('.flow__cyc--t');
      if (!first || !cycT) return;

      let svg = flow.querySelector(':scope > .flow__spine');
      if (!svg) {
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'flow__spine');
        svg.setAttribute('aria-hidden', 'true');
        flow.prepend(svg);
      }

      const F = flow.getBoundingClientRect();
      const W = Math.round(F.width), H = Math.round(F.height);
      const d0 = first.getBoundingClientRect();
      const t0 = cycT.getBoundingClientRect();

      const x = +(d0.left - F.left + d0.width / 2).toFixed(1);
      const y0 = +(d0.top - F.top + d0.height / 2).toFixed(1);
      const xT = +(t0.left - F.left + t0.width / 2).toFixed(1);
      const yT = +(t0.top - F.top).toFixed(1);

      const R = 13, yElbow = +(yT - 34).toFixed(1), yEnd = +(yT - 7).toFixed(1);
      const across = xT - x;
      const r = Math.max(0, Math.min(R, Math.abs(across) / 2, (yEnd - yElbow)));
      const sx = across >= 0 ? 1 : -1;

      const d = [
        'M' + x + ' ' + y0,
        'V' + (yElbow - r),
        'M' + (x - 4) + ' ' + (y0 + 11).toFixed(1),
        'L' + x + ' ' + (y0 + 16).toFixed(1),
        'L' + (x + 4) + ' ' + (y0 + 11).toFixed(1),
        'M' + x + ' ' + (yElbow - r),
        'Q' + x + ' ' + yElbow + ' ' + (x + sx * r) + ' ' + yElbow,
        'H' + (xT - sx * r),
        'Q' + xT + ' ' + yElbow + ' ' + xT + ' ' + (yElbow + r),
        'V' + yEnd,
        'M' + (xT - 4) + ' ' + (yEnd - 5),
        'L' + xT + ' ' + yEnd,
        'L' + (xT + 4) + ' ' + (yEnd - 5)
      ].join(' ');

      svg.setAttribute('width', W);
      svg.setAttribute('height', H);
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.innerHTML = '<path d="' + d + '" fill="none" stroke="rgba(236,174,120,.5)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>';
    });
  }

  function placeBrackets(root) {
    root.querySelectorAll('.flow__nodes.has-loop').forEach((ol) => {
      const br = ol.querySelector('.flow__bracket');
      const dots = [...ol.querySelectorAll('li.in-loop .flow__dot')];
      if (!br || dots.length < 2) return;
      const base = ol.getBoundingClientRect();
      const a = dots[0].getBoundingClientRect();
      const b = dots[dots.length - 1].getBoundingClientRect();
      br.style.top = (a.top + a.height / 2 - base.top) + 'px';
      br.style.height = ((b.top + b.height / 2) - (a.top + a.height / 2)) + 'px';
    });
  }

  const ICONS = {
    'Integração de sistemas': '<path d="M7 8h3a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4h3"/><circle cx="4" cy="8" r="2.4"/><circle cx="20" cy="16" r="2.4"/>',
    'Salesforce sob medida': '<path d="M4 15a3.2 3.2 0 0 1 1.6-2.8A4.4 4.4 0 0 1 13 8.8 3.6 3.6 0 0 1 19.4 11 3 3 0 0 1 19 17H7a3 3 0 0 1-3-2z"/>',
    'Desenvolvimento de software': '<path d="M8 9l-4 3 4 3"/><path d="M16 9l4 3-4 3"/><path d="M13 6l-2 12"/>',
    'Manutenção de Legado': '<path d="M9.92 4.79L10.09 2.80L13.91 2.80L14.08 4.79L15.63 5.44L17.16 4.14L19.86 6.84L18.56 8.37L19.21 9.92L21.20 10.09L21.20 13.91L19.21 14.08L18.56 15.63L19.86 17.16L17.16 19.86L15.63 18.56L14.08 19.21L13.91 21.20L10.09 21.20L9.92 19.21L8.37 18.56L6.84 19.86L4.14 17.16L5.44 15.63L4.79 14.08L2.80 13.91L2.80 10.09L4.79 9.92L5.44 8.37L4.14 6.84L6.84 4.14L8.37 5.44Z" stroke-linejoin="round"/><circle cx="12" cy="12" r="3.1"/>',
    'Diagnóstico de dados': '<circle cx="11" cy="11" r="6.4"/><path d="M20.5 20.5L15.6 15.6"/>',
    'IA e BI': '<path d="M5 18V9M10 18V5M15 18v-6M20 18v-9"/>',
    'Automação': '<path d="M4.6 10.2a7.6 7.6 0 0 1 12.6-3.1l2 1.9"/><path d="M15.4 8.9h4v-4"/><path d="M19.4 13.8a7.6 7.6 0 0 1-12.6 3.1l-2-1.9"/><path d="M8.6 15.1h-4v4"/>',
    'One page': '<rect x="5" y="3.5" width="14" height="17" rx="2.2"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/>',
    'Site institucional com blog': '<rect x="3" y="5" width="18" height="14" rx="2.2"/><path d="M3 9.5h18M7 13h6M7 16h9"/>',
    'Identidade visual': '<path d="M18.1 3.6a1.7 1.7 0 0 1 2.4 2.4l-7.6 6.6-1.4-1.4z"/><path d="M11.5 11.2l1.4 1.4"/><path d="M9.8 12.6a2.6 2.6 0 0 1 2 4.4c-1.1 1.2-3 1.3-5.6 1 1.3-1.2 1.4-2.6 1.2-3.8a2.6 2.6 0 0 1 2.4-1.6z"/>', 'Identidade visual (old)': '<circle cx="12" cy="12" r="8.4"/><circle cx="9.4" cy="10" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.6" cy="10" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="15.2" r="1.1" fill="currentColor" stroke="none"/>',
    'Criação de logo': '<path d="M12 3.5l2.6 5.6 6.1.8-4.5 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.3 9.9l6.1-.8z"/>',
    'Cartão de visita': '<rect x="3" y="6" width="18" height="12" rx="2.2"/><path d="M7 11h4M7 14h6M15.5 11.5h2.5"/>',
    'Social media': '<path d="M20 4.5v10.2a2 2 0 0 1-2 2H9l-4 3.3v-3.3H6a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z"/><path d="M8.5 7.5h7M8.5 11h4.5"/>'
  };
  const icon = (name) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '<circle cx="12" cy="12" r="8"/>') + '</svg>';


  function renderFlow(flow) {
    return '<div class="flow">' + flow.map((ph, pi) => {
      const tags = (ph.tags || []).map(t => '<span class="flow__tag">' + t + '</span>').join('');
      let right = '';
      if (ph.cycle) {
        right = '<div class="flow__cycle"><span class="flow__entry" aria-hidden="true"></span>' +
          '<span class="flow__cyc flow__cyc--t">' + ph.cycle[0] + '</span>' +
          '<span class="flow__cyc flow__cyc--r">' + ph.cycle[1] + '</span>' +
          '<span class="flow__cyc flow__cyc--b">' + ph.cycle[2] + '</span>' +
          '<span class="flow__cyc flow__cyc--l">' + ph.cycle[3] + '</span>' +
          '<svg class="flow__ring" viewBox="0 0 160 160" aria-hidden="true">' +
            '<circle cx="80" cy="80" r="56" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5" opacity=".55"/>' +
            '<path d="M80 24 A56 56 0 0 1 136 80" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".9"/>' +
          '</svg>' +
        '</div>';
      } else {
        right = '<ol class="flow__nodes' + (ph.loopFrom != null ? ' has-loop' : '') + '">' +
          (ph.loopFrom != null ? '<span class="flow__bracket" aria-hidden="true"></span>' : '') +
          ph.nodes.map((n, i) => '<li' + (ph.loopFrom != null && i >= ph.loopFrom ? ' class="in-loop"' : '') + '><span class="flow__dot"></span>' + n + '</li>').join('') +
        '</ol>';
      }
      return '<div class="flow__phase">' +
        '<div class="flow__side">' +
          '<span class="flow__n">0' + (pi + 1) + '</span>' +
          '<h4 class="flow__title">' + ph.title + '</h4>' +
          '<p class="flow__desc">' + ph.desc + '</p>' +
          '<div class="flow__tags">' + tags + '</div>' +
        '</div>' +
        right +
      '</div>';
    }).join('') + '</div>';
  }

  const triggers = document.querySelectorAll('[data-svc]');
  if (!triggers.length) return;

  const modal = document.createElement('div');
  modal.className = 'smodal';
  modal.innerHTML = `
    <div class="smodal__backdrop" data-close></div>
    <div class="smodal__dialog" role="dialog" aria-modal="true" aria-labelledby="smodalTitle">
      <button class="smodal__close" type="button" data-close aria-label="Fechar">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <div class="smodal__scroll"></div>
    </div>
  `;
  document.body.appendChild(modal);
  const scroll = modal.querySelector('.smodal__scroll');
  let lastFocus = null;

  function render(key) {
    const d = DATA[key];
    if (!d) return;
    const t = L();
    const steps = (d.steps || []).map((s, i) => `
      <div class="svcp-step">
        <span class="svcp-step__dot">${i + 1}</span>
        <div class="svcp-step__body">
          <h3>${s[0]}</h3>
          <p>${s[1]}</p>
        </div>
      </div>`).join('');
    const prods = d.products.map((p) => `
      <article class="scard">
        <span class="scard__icon">${icon(p[0])}</span>
        <h4 class="scard__title">${p[0]}</h4>
        <p class="scard__desc">${p[1]}</p>
      </article>`).join('');

    scroll.innerHTML = `
      <header class="smodal__head">
        <div class="eyebrow">${d.eyebrow}</div>
        <h2 id="smodalTitle">${d.title}</h2>
        <p class="lede">${d.lede}</p>
      </header>

      <section class="smodal__sec">
        <div class="eyebrow">${t.how}</div>
        <h3 class="smodal__h">${t.method}</h3>
        <p class="smodal__intro">${d.methodIntro}</p>
        ${d.flow ? renderFlow(d.flow) : '<div class="svcp-steps">' + steps + '</div>'}
      </section>

      <section class="smodal__sec">
        <div class="eyebrow">${t.sol}</div>
        <h3 class="smodal__h">${t.what}</h3>
        <div class="scards${d.products.length === 4 ? ' scards--4' : ''}${d.products.length === 5 ? ' scards--5' : ''}${d.products.length === 6 ? ' scards--6' : ''}">${prods}</div>
      </section>

      <div class="smodal__cta">
        <a class="btn btn--light" href="contato.html">${t.start}
          <span class="arrow"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
        <a class="btn btn--ghost" href="https://calendar.app.google/s7fpLVRSq7ARySYF6" target="_blank" rel="noopener">${t.book}</a>
      </div>
    `;
    // content is rendered after page load, so the i18n load-time snapshot can't see it
    if (window.filkaTranslateSubtree) window.filkaTranslateSubtree(scroll);
    modal.querySelector('.smodal__close').setAttribute('aria-label', t.close);
  }

  function open(key) {
    lastFocus = document.activeElement;
    render(key);
    scroll.scrollTop = 0;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.smodal__close').focus();
    requestAnimationFrame(() => { placeBrackets(scroll); drawSpine(scroll); });
    setTimeout(() => { placeBrackets(scroll); drawSpine(scroll); }, 380);
  }

  window.addEventListener('resize', () => { if (modal.classList.contains('open')) { placeBrackets(scroll); drawSpine(scroll); } });

  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  triggers.forEach((tr) => {
    tr.addEventListener('click', (e) => {
      e.preventDefault();
      open(tr.getAttribute('data-svc'));
    });
  });

  modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
})();
