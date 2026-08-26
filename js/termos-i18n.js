/* =========================================
   Filka — Terms of Use translations (PT / EN / ES)
   Swaps the whole article, TOC, hero meta and headings
   based on the language chosen on the site.
   ========================================= */
(function () {
  const eyebrowEl = document.querySelector('.legal-hero .eyebrow');
  const h1El = document.querySelector('.legal-hero h1');
  const metaEl = document.querySelector('.legal-hero__meta');
  const tocLab = document.querySelector('.legal-toc__lab');
  const tocOl = document.querySelector('.legal-toc ol');
  const articleEl = document.querySelector('.legal-body');
  if (!articleEl || !tocOl) return;

  const PT = {
    eyebrow: eyebrowEl.innerHTML,
    h1: h1El.innerHTML,
    meta: metaEl.innerHTML,
    tocLab: tocLab.textContent,
    toc: tocOl.innerHTML,
    article: articleEl.innerHTML
  };

  const EN = {
    eyebrow: 'legal document',
    h1: 'Terms of <span class="grad-text">Use</span>',
    meta:
      '<span>Last updated: <b>July 3, 2026</b></span>' +
      '<span>Effective: <b>immediately</b></span>' +
      '<span>Applies to: <b>Filka site and services</b></span>',
    tocLab: 'on this page',
    toc:
      '<li><a href="#aceitacao">Acceptance of terms</a></li>' +
      '<li><a href="#servicos">Our services</a></li>' +
      '<li><a href="#responsabilidades">Client responsibilities</a></li>' +
      '<li><a href="#propriedade">Intellectual property</a></li>' +
      '<li><a href="#portfolio">Brand use in portfolio</a></li>' +
      '<li><a href="#pagamentos">Payments and deadlines</a></li>' +
      '<li><a href="#limitacao">Limitation of liability</a></li>' +
      '<li><a href="#confidencialidade">Confidentiality</a></li>' +
      '<li><a href="#rescisao">Termination</a></li>' +
      '<li><a href="#alteracoes">Changes to these terms</a></li>' +
      '<li><a href="#foro">Governing law and venue</a></li>' +
      '<li><a href="#contato">Contact</a></li>',
    article: `
    <p class="intro">
      These Terms of Use gather the rules for browsing the <strong>Filka</strong> site and for hiring our
      services. We've written everything as plainly as possible, without unnecessary legalese, so it's clear
      what you can expect from us and what we expect from you. By using the site or closing a project with us,
      you agree to what's set out here.
    </p>

    <section class="legal-sec" id="aceitacao">
      <h2><span class="num">01</span> Acceptance of terms</h2>
      <p>
        By accessing this site or hiring any Filka service, you confirm that you have read, understood and
        agree to these terms. If you don't agree with some point, it's best not to continue using the site or
        with the engagement. When a service involves a specific proposal or contract, the conditions of that
        document apply together with these terms and prevail in case of conflict.
      </p>
    </section>

    <section class="legal-sec" id="servicos">
      <h2><span class="num">02</span> Our services</h2>
      <p>
        <strong>Filka</strong> offers software engineering, analytics, digital design and AI agents. The
        scope, deadlines and price of each job are defined case by case, in the proposal we send before
        starting. The content of this site is informational and may be updated at any time, without prior
        notice, as our offering evolves.
      </p>
    </section>

    <section class="legal-sec" id="responsabilidades">
      <h2><span class="num">03</span> Client responsibilities</h2>
      <p>For the work to flow smoothly, we count on your collaboration. That includes:</p>
      <ul>
        <li>Providing accurate, complete information within the agreed timeframe;</li>
        <li>Making available the accesses, materials and approvals needed to move the project forward;</li>
        <li>Using our services and deliverables lawfully and in line with these terms;</li>
        <li>Making sure you hold the rights to the content and brands you send us.</li>
      </ul>
      <p>
        Delays or lack of feedback on your side may affect deadlines and costs, always transparently and
        communicated in advance.
      </p>
    </section>

    <section class="legal-sec" id="propriedade">
      <h2><span class="num">04</span> Intellectual property</h2>
      <p>
        The final deliverables of each project become yours once the agreed payment is settled, unless the
        proposal says otherwise. Our methods, internal tools, reusable components and accumulated know-how,
        however, remain Filka's, and we may reuse them in other work. Filka's own brand, site and materials
        are protected and may not be copied without our authorization.
      </p>
    </section>

    <section class="legal-sec" id="portfolio">
      <h2><span class="num">05</span> Brand use in portfolio</h2>
      <p>
        We're proud of what we build, and showing it off is part of our work. That's why, by hiring Filka, you
        agree that <strong>we may use your company's name, logo and images</strong> to show that we provided a
        service to you. This may appear in our portfolio, on the site, in case studies, in sales presentations
        and on social media, always respectfully and in keeping with your brand.
      </p>
      <p>
        We will never disclose confidential information or sensitive data about your business in this context:
        the use is limited to identifying you as a client and presenting, in broad terms, what we did together.
        If for any reason you'd rather not be featured, just let us know in writing and we'll respect your
        decision and remove the reference.
      </p>
    </section>

    <section class="legal-sec" id="pagamentos">
      <h2><span class="num">06</span> Payments and deadlines</h2>
      <p>
        Payment conditions, including amounts, installments and dates, are set out in each project's proposal.
        The start and continuity of the work may depend on payment being confirmed at the agreed stages.
        Delays may pause deliverables until the situation is resolved, without affecting the deadlines already
        agreed.
      </p>
    </section>

    <section class="legal-sec" id="limitacao">
      <h2><span class="num">07</span> Limitation of liability</h2>
      <p>
        We put in our best effort to deliver quality work, but some factors are beyond our control. Filka is
        not liable for indirect damages, lost profits or issues caused by third-party services, misuse of
        deliverables or incorrect information provided by the client. The site is offered as is, and we don't
        guarantee it will always be available or free of faults.
      </p>
    </section>

    <section class="legal-sec" id="confidencialidade">
      <h2><span class="num">08</span> Confidentiality</h2>
      <p>
        Everything you share with us during a project is treated confidentially. We only use that information
        to carry out the agreed work and don't pass it on to third parties, except when it's essential for
        delivery or when the law requires it. The same discretion applies both ways: we expect the material and
        know-how we share with you to be kept confidential too.
      </p>
    </section>

    <section class="legal-sec" id="rescisao">
      <h2><span class="num">09</span> Termination</h2>
      <p>
        Either party may end the contract under the conditions set out in the proposal, with written notice. In
        case of termination, amounts for work already carried out remain due. We may also suspend or end access
        to the site and services if we identify misuse or a breach of these terms.
      </p>
    </section>

    <section class="legal-sec" id="alteracoes">
      <h2><span class="num">10</span> Changes to these terms</h2>
      <p>
        From time to time, these terms may be updated, whether because we change a process or because the law
        changes. Whenever that happens, we'll revise the "last updated" date at the top of the page. So it's
        worth coming back here every now and then to keep up with any news.
      </p>
    </section>

    <section class="legal-sec" id="foro">
      <h2><span class="num">11</span> Governing law and venue</h2>
      <p>
        These terms are governed by Brazilian law. Any matter that can't be resolved amicably will be handled
        in the courts of the district of São Paulo (SP), unless the law provides otherwise. Before that,
        though, we always prefer to talk it through and reach an agreement.
      </p>
    </section>

    <section class="legal-sec" id="contato">
      <h2><span class="num">12</span> Contact</h2>
      <p>
        Have a question about these terms? Get in touch. We're here to clear up whatever you need before you
        move ahead.
      </p>
      <div class="legal-cta">
        <p>Send us your message and we'll get back to you within 1 business day.</p>
        <a class="mail" href="mailto:contato@filkastudio.com.br">contato@filkastudio.com.br</a>
      </div>
    </section>`
  };

  const ES = {
    eyebrow: 'documento legal',
    h1: 'Términos de <span class="grad-text">Uso</span>',
    meta:
      '<span>Última actualización: <b>3 de julio de 2026</b></span>' +
      '<span>Vigencia: <b>inmediata</b></span>' +
      '<span>Aplica a: <b>sitio y servicios Filka</b></span>',
    tocLab: 'en esta página',
    toc:
      '<li><a href="#aceitacao">Aceptación de los términos</a></li>' +
      '<li><a href="#servicos">Nuestros servicios</a></li>' +
      '<li><a href="#responsabilidades">Responsabilidades del cliente</a></li>' +
      '<li><a href="#propriedade">Propiedad intelectual</a></li>' +
      '<li><a href="#portfolio">Uso de la marca en portafolio</a></li>' +
      '<li><a href="#pagamentos">Pagos y plazos</a></li>' +
      '<li><a href="#limitacao">Limitación de responsabilidad</a></li>' +
      '<li><a href="#confidencialidade">Confidencialidad</a></li>' +
      '<li><a href="#rescisao">Rescisión</a></li>' +
      '<li><a href="#alteracoes">Cambios en estos términos</a></li>' +
      '<li><a href="#foro">Ley aplicable y foro</a></li>' +
      '<li><a href="#contato">Contacto</a></li>',
    article: `
    <p class="intro">
      Estos Términos de Uso reúnen las reglas para navegar en el sitio de <strong>Filka</strong> y para
      contratar nuestros servicios. Lo escribimos de la forma más directa posible, sin tecnicismos jurídicos
      innecesarios, para que quede claro qué puedes esperar de nosotros y qué esperamos de ti. Al usar el sitio
      o cerrar un proyecto con nosotros, aceptas lo que está aquí.
    </p>

    <section class="legal-sec" id="aceitacao">
      <h2><span class="num">01</span> Aceptación de los términos</h2>
      <p>
        Al acceder a este sitio o contratar cualquier servicio de Filka, declaras que leíste, entendiste y
        aceptas estos términos. Si no estás de acuerdo con algún punto, es mejor no seguir con el uso del sitio
        ni con la contratación. Cuando el servicio implique una propuesta o contrato específico, las condiciones
        de ese documento valen junto con estos términos y prevalecen en caso de conflicto.
      </p>
    </section>

    <section class="legal-sec" id="servicos">
      <h2><span class="num">02</span> Nuestros servicios</h2>
      <p>
        <strong>Filka</strong> ofrece servicios de ingeniería de software, analytics, diseño digital y agentes
        de IA. El alcance, los plazos y los valores de cada trabajo se definen caso a caso, en la propuesta que
        enviamos antes de empezar. El contenido de este sitio es informativo y puede actualizarse en cualquier
        momento, sin aviso previo, conforme evoluciona nuestra oferta.
      </p>
    </section>

    <section class="legal-sec" id="responsabilidades">
      <h2><span class="num">03</span> Responsabilidades del cliente</h2>
      <p>Para que el trabajo fluya bien, contamos con tu colaboración. Esto incluye:</p>
      <ul>
        <li>Facilitar información correcta, completa y en el tiempo acordado;</li>
        <li>Poner a disposición los accesos, materiales y aprobaciones necesarios para el avance del proyecto;</li>
        <li>Usar nuestros servicios y entregas de forma lícita y de acuerdo con estos términos;</li>
        <li>Garantizar que posees los derechos sobre los contenidos y las marcas que nos envías.</li>
      </ul>
      <p>
        Retrasos o falta de respuesta de tu parte pueden afectar plazos y costos, siempre de forma transparente
        y comunicada con antelación.
      </p>
    </section>

    <section class="legal-sec" id="propriedade">
      <h2><span class="num">04</span> Propiedad intelectual</h2>
      <p>
        Las entregas finales de cada proyecto pasan a ser tuyas una vez saldado el pago acordado, salvo que la
        propuesta indique algo distinto. Nuestros métodos, herramientas internas, componentes reutilizables y
        conocimiento acumulado, en cambio, siguen siendo de Filka, y podemos reutilizarlos en otros trabajos. La
        marca, el sitio y los materiales de la propia Filka están protegidos y no pueden copiarse sin nuestra
        autorización.
      </p>
    </section>

    <section class="legal-sec" id="portfolio">
      <h2><span class="num">05</span> Uso de la marca en portafolio</h2>
      <p>
        Estamos orgullosos de lo que construimos, y mostrarlo es parte de nuestro trabajo. Por eso, al contratar
        a Filka, aceptas que <strong>podemos usar el nombre, el logotipo y las imágenes de tu empresa</strong>
        para divulgar que te prestamos un servicio. Esto puede aparecer en nuestro portafolio, en el sitio, en
        casos de éxito, en presentaciones comerciales y en las redes sociales, siempre de forma respetuosa y
        alineada con tu marca.
      </p>
      <p>
        Nunca divulgaremos información confidencial ni datos sensibles de tu negocio en ese contexto: el uso se
        limita a identificarte como cliente y a presentar, a grandes rasgos, lo que hicimos juntos. Si por algún
        motivo prefieres no aparecer, solo avísanos por escrito, que respetamos tu decisión y retiramos la
        referencia.
      </p>
    </section>

    <section class="legal-sec" id="pagamentos">
      <h2><span class="num">06</span> Pagos y plazos</h2>
      <p>
        Las condiciones de pago, incluyendo valores, cuotas y fechas, se definen en la propuesta de cada
        proyecto. El inicio y la continuidad del trabajo pueden depender de la confirmación del pago en las
        etapas acordadas. Eventuales retrasos pueden suspender las entregas hasta la regularización, sin
        perjuicio de los plazos ya pactados.
      </p>
    </section>

    <section class="legal-sec" id="limitacao">
      <h2><span class="num">07</span> Limitación de responsabilidad</h2>
      <p>
        Nos dedicamos al máximo para entregar un trabajo de calidad, pero algunos factores escapan a nuestro
        control. Filka no se responsabiliza por perjuicios indirectos, lucro cesante o problemas causados por
        servicios de terceros, uso indebido de las entregas o información incorrecta facilitada por el cliente.
        El sitio se ofrece en el estado en que se encuentra, y no garantizamos que esté siempre disponible ni
        libre de fallas.
      </p>
    </section>

    <section class="legal-sec" id="confidencialidade">
      <h2><span class="num">08</span> Confidencialidad</h2>
      <p>
        Todo lo que compartes con nosotros durante un proyecto se trata con sigilo. Solo usamos esa información
        para ejecutar el trabajo acordado y no la transferimos a terceros, salvo cuando sea indispensable para
        la entrega o cuando la ley lo exija. La misma discreción vale para ambas partes: esperamos que el
        material y el conocimiento que compartimos contigo también se mantengan en confianza.
      </p>
    </section>

    <section class="legal-sec" id="rescisao">
      <h2><span class="num">09</span> Rescisión</h2>
      <p>
        Cualquiera de las partes puede terminar el contrato en las condiciones previstas en la propuesta,
        mediante aviso por escrito. En caso de terminación, los valores correspondientes al trabajo ya realizado
        siguen siendo debidos. También podemos suspender o terminar el acceso al sitio y a los servicios si
        identificamos uso indebido o violación de estos términos.
      </p>
    </section>

    <section class="legal-sec" id="alteracoes">
      <h2><span class="num">10</span> Cambios en estos términos</h2>
      <p>
        De vez en cuando, estos términos pueden actualizarse, ya sea porque cambiamos algún proceso o porque
        cambia la legislación. Siempre que eso ocurra, revisaremos la fecha de "última actualización" en la
        parte superior de la página. Por eso, vale la pena volver aquí de tanto en tanto para estar al día.
      </p>
    </section>

    <section class="legal-sec" id="foro">
      <h2><span class="num">11</span> Ley aplicable y foro</h2>
      <p>
        Estos términos se rigen por las leyes brasileñas. Cualquier cuestión que no pueda resolverse de forma
        amistosa se tratará en el foro de la comarca de São Paulo (SP), salvo disposición legal en contrario.
        Antes de eso, sin embargo, siempre preferimos conversar y llegar a un acuerdo.
      </p>
    </section>

    <section class="legal-sec" id="contato">
      <h2><span class="num">12</span> Contacto</h2>
      <p>
        ¿Te quedó alguna duda sobre estos términos? Habla con nosotros. Estamos a tu disposición para aclarar lo
        que necesites antes de que sigas adelante.
      </p>
      <div class="legal-cta">
        <p>Envía tu mensaje y te respondemos en hasta 1 día hábil.</p>
        <a class="mail" href="mailto:contato@filkastudio.com.br">contato@filkastudio.com.br</a>
      </div>
    </section>`
  };

  const DICT = { pt: PT, en: EN, es: ES };

  function initTOC() {
    const links = [...document.querySelectorAll('.legal-toc a')];
    const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const secs = [...document.querySelectorAll('.legal-sec')];
    function update() {
      const line = 140;
      let current = secs[0];
      for (const s of secs) {
        if (s.getBoundingClientRect().top <= line) current = s;
        else break;
      }
      links.forEach(l => l.classList.remove('active'));
      const a = current && map.get(current.id);
      if (a) a.classList.add('active');
    }
    return update;
  }
  let updateTOC = initTOC();
  let ticking = false;
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; updateTOC(); }); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  function render(lang) {
    const d = DICT[lang] || PT;
    eyebrowEl.innerHTML = d.eyebrow;
    h1El.innerHTML = d.h1;
    metaEl.innerHTML = d.meta;
    tocLab.textContent = d.tocLab;
    tocOl.innerHTML = d.toc;
    articleEl.innerHTML = d.article;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    updateTOC = initTOC();
    updateTOC();
  }

  const saved = localStorage.getItem('filka-lang') || 'pt';
  if (saved !== 'pt') render(saved);
  else updateTOC();

  document.addEventListener('filka:langchange', (e) => {
    render((e.detail && e.detail.lang) || 'pt');
  });
})();
