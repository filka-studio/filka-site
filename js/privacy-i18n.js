/* =========================================
   Filka — Privacy page translations (PT / EN / ES)
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
  const tocNav = document.querySelector('.legal-toc');
  if (!articleEl || !tocOl) return;

  // Capture the authored PT version straight from the DOM.
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
    h1: 'Privacy <span class="grad-text">Policy</span>',
    meta:
      '<span>Last updated: <b>July 3, 2026</b></span>' +
      '<span>Effective: <b>immediately</b></span>' +
      '<span>Legal basis: <b>LGPD (Law No. 13.709/2018)</b></span>',
    tocLab: 'on this page',
    toc:
      '<li><a href="#quem-somos">Who we are</a></li>' +
      '<li><a href="#dados">Data we collect</a></li>' +
      '<li><a href="#finalidades">How we use data</a></li>' +
      '<li><a href="#base-legal">Legal bases</a></li>' +
      '<li><a href="#cookies">Cookies</a></li>' +
      '<li><a href="#compartilhamento">Sharing</a></li>' +
      '<li><a href="#armazenamento">Storage and security</a></li>' +
      '<li><a href="#direitos">Your rights</a></li>' +
      '<li><a href="#retencao">Data retention</a></li>' +
      '<li><a href="#alteracoes">Changes to this policy</a></li>' +
      '<li><a href="#contato">Contact and DPO</a></li>',
    article: `
    <p class="intro">
      This policy explains, clearly and openly, how <strong>Filka</strong> collects, uses, stores and
      protects the personal data of anyone who visits our site, gets in touch or hires our services.
      We take your privacy seriously and always handle your information in line with Brazil's General
      Data Protection Law (LGPD). We recommend reading it carefully, so you know exactly what we do with
      your data and what your rights are.
    </p>

    <section class="legal-sec" id="quem-somos">
      <h2><span class="num">01</span> Who we are</h2>
      <p>
        <strong>Filka</strong> (Company ID 56.302.887/0001-27) is a studio that brings together software
        engineering, analytics, digital design and AI agents. For the data handled here on the site, we
        are what the law calls the <strong>controller</strong>. In practice, that means we are the ones
        who decide why your data is used and how that happens. If you have any questions about it, you can
        reach out to us any time through the channels at the bottom of this page.
      </p>
    </section>

    <section class="legal-sec" id="dados">
      <h2><span class="num">02</span> Data we collect</h2>
      <p>
        We only collect the data we actually need to serve you well, nothing more. Depending on how you
        interact with us, this usually includes:
      </p>
      <ul>
        <li><strong>Data you give us:</strong> name, email, phone, company and the content of the messages you send through the contact form or straight by email.</li>
        <li><strong>Browsing data:</strong> IP address, device and browser type, the pages you visited and how long you spent on each. This comes from cookies and the analytics tools we use to understand how the site is used.</li>
        <li><strong>Project data:</strong> the information you share with us over the course of an engagement, to the extent we need it to carry out the agreed work.</li>
      </ul>
      <p>
        We do not intentionally collect sensitive personal data, nor information about children and
        teenagers. If that happens by mistake, we delete it as soon as we notice.
      </p>
    </section>

    <section class="legal-sec" id="finalidades">
      <h2><span class="num">03</span> How we use data</h2>
      <p>
        We use your data responsibly and always with a clear purpose. In practice, it lets us:
      </p>
      <ul>
        <li>Reply to your messages and put together proposals tailored to what you need;</li>
        <li>Deliver and keep track of the services you hired, from start to finish;</li>
        <li>Keep you informed about how the project and our working relationship are going;</li>
        <li>Continuously improve the site's performance, security and experience;</li>
        <li>Meet the legal, contractual and regulatory obligations that apply to our work.</li>
      </ul>
    </section>

    <section class="legal-sec" id="base-legal">
      <h2><span class="num">04</span> Legal bases</h2>
      <p>
        Everything we do with data rests on a legal basis set out in the LGPD, that is, a legitimate reason
        to handle that information. In most cases, that reason is the <strong>performance of a contract</strong>,
        including the conversations that happen before it. We also rely on our <strong>legitimate interest</strong>
        in keeping the site secure and running well, on <strong>compliance with legal obligations</strong> and
        on your <strong>consent</strong> whenever it is genuinely required. That is the case, for example, with
        non-essential cookies: they only kick in after you agree.
      </p>
    </section>

    <section class="legal-sec" id="cookies">
      <h2><span class="num">05</span> Cookies</h2>
      <p>
        We use cookies to keep the site working, to remember your preferences (like the language you chose)
        and to understand how people browse around here, so we can improve the experience. You are in control
        of this and can adjust your preferences whenever you like, either through the cookie notice or in your
        own browser settings. The only ones that can't be turned off are the essential cookies, because
        without them the site simply won't work the way it should.
      </p>
    </section>

    <section class="legal-sec" id="compartilhamento">
      <h2><span class="num">06</span> Sharing</h2>
      <p>
        We do not sell your data, full stop. It is only shared with <strong>partners who help us operate</strong>,
        such as hosting, email and analytics services, and even then always to the minimum extent needed and
        under a confidentiality commitment. Beyond those situations, we only share information when the law
        requires it or when a <strong>competent authority</strong> formally requests it.
      </p>
    </section>

    <section class="legal-sec" id="armazenamento">
      <h2><span class="num">07</span> Storage and security</h2>
      <p>
        We take security seriously and put in place technical and organizational measures to protect your
        data against unauthorized access, loss or misuse. Some of the information may be processed on servers
        located outside the country, but always with adequate protection safeguards. To be honest: no system
        on the internet is 100% foolproof. Even so, we work continuously to keep your information protected
        and to reduce any risk to a minimum.
      </p>
    </section>

    <section class="legal-sec" id="direitos">
      <h2><span class="num">08</span> Your rights</h2>
      <p>
        The data is yours, and the law makes sure you stay in control of it. At any time, you can:
      </p>
      <ul>
        <li>Confirm whether we handle your data and see which information we keep;</li>
        <li>Correct data that is wrong, incomplete or out of date;</li>
        <li>Ask us to anonymize, block or delete data that is no longer needed;</li>
        <li>Request portability, that is, take your data to another provider;</li>
        <li>Withdraw your consent and object to certain processing, within the limits of the law.</li>
      </ul>
      <p>
        To exercise any of these rights, just get in touch with us through the channels listed at the bottom
        of this page. It's simple and free of charge.
      </p>
    </section>

    <section class="legal-sec" id="retencao">
      <h2><span class="num">09</span> Data retention</h2>
      <p>
        We keep your data only for as long as we need it to fulfill the purposes described in this policy and
        to meet the legal obligations that apply to us. Once that period ends, the information is securely
        deleted or anonymized, so that it is no longer possible to identify you from it.
      </p>
    </section>

    <section class="legal-sec" id="alteracoes">
      <h2><span class="num">10</span> Changes to this policy</h2>
      <p>
        From time to time, this policy may be updated, whether because we change a process or because the law
        changes. Whenever that happens, we'll revise the "last updated" date at the top of the page. So it's
        worth coming back here every now and then to keep up with any news.
      </p>
    </section>

    <section class="legal-sec" id="contato">
      <h2><span class="num">11</span> Contact and DPO</h2>
      <p>
        Have a question about this policy or want to exercise any of your rights? Talk to our Data Protection
        Officer (DPO). We're here to help with whatever you need.
      </p>
      <div class="legal-cta">
        <p>Send us your request and we'll get back to you within 1 business day.</p>
        <a class="mail" href="mailto:filkastudio@outlook.com.br">filkastudio@outlook.com.br</a>
      </div>
    </section>`
  };

  const ES = {
    eyebrow: 'documento legal',
    h1: 'Política de <span class="grad-text">Privacidad</span>',
    meta:
      '<span>Última actualización: <b>3 de julio de 2026</b></span>' +
      '<span>Vigencia: <b>inmediata</b></span>' +
      '<span>Base legal: <b>LGPD (Ley n.º 13.709/2018)</b></span>',
    tocLab: 'en esta página',
    toc:
      '<li><a href="#quem-somos">Quiénes somos</a></li>' +
      '<li><a href="#dados">Datos que recopilamos</a></li>' +
      '<li><a href="#finalidades">Cómo usamos los datos</a></li>' +
      '<li><a href="#base-legal">Bases legales</a></li>' +
      '<li><a href="#cookies">Cookies</a></li>' +
      '<li><a href="#compartilhamento">Compartición</a></li>' +
      '<li><a href="#armazenamento">Almacenamiento y seguridad</a></li>' +
      '<li><a href="#direitos">Tus derechos</a></li>' +
      '<li><a href="#retencao">Conservación de datos</a></li>' +
      '<li><a href="#alteracoes">Cambios en esta política</a></li>' +
      '<li><a href="#contato">Contacto y encargado</a></li>',
    article: `
    <p class="intro">
      Esta política explica, de forma clara y transparente, cómo <strong>Filka</strong> recopila, utiliza,
      almacena y protege los datos personales de quien visita nuestro sitio, se pone en contacto o contrata
      nuestros servicios. Nos tomamos tu privacidad en serio y tratamos tu información siempre de acuerdo con
      la Ley General de Protección de Datos (LGPD). Te recomendamos leerla con atención, para que sepas
      exactamente qué hacemos con tus datos y cuáles son tus derechos.
    </p>

    <section class="legal-sec" id="quem-somos">
      <h2><span class="num">01</span> Quiénes somos</h2>
      <p>
        <strong>Filka</strong> (CNPJ 56.302.887/0001-27) es un estudio que reúne ingeniería de software,
        analytics, diseño digital y agentes de IA. Para los datos tratados aquí en el sitio, somos lo que la
        ley llama <strong>responsable</strong> (controlador). En la práctica, eso significa que somos nosotros
        quienes definimos por qué se usan tus datos y de qué forma ocurre. Si tienes cualquier duda al
        respecto, puedes hablar con nosotros en cualquier momento por los canales al final de esta página.
      </p>
    </section>

    <section class="legal-sec" id="dados">
      <h2><span class="num">02</span> Datos que recopilamos</h2>
      <p>
        Recopilamos solo los datos necesarios para atenderte bien, sin excesos. Según cómo interactúes con
        nosotros, esto suele incluir:
      </p>
      <ul>
        <li><strong>Datos que nos facilitas:</strong> nombre, correo, teléfono, empresa y el contenido de los mensajes que envías por el formulario de contacto o directamente por correo.</li>
        <li><strong>Datos de navegación:</strong> dirección IP, tipo de dispositivo y de navegador, las páginas que visitaste y cuánto tiempo pasaste en cada una. Esta información proviene de las cookies y de las herramientas de análisis que usamos para entender el uso del sitio.</li>
        <li><strong>Datos del proyecto:</strong> la información que compartes con nosotros a lo largo de una contratación, en la medida en que la necesitamos para ejecutar el trabajo acordado.</li>
      </ul>
      <p>
        No recopilamos a propósito datos personales sensibles, ni información de niños y adolescentes. Si eso
        ocurre por error, lo eliminamos en cuanto lo detectamos.
      </p>
    </section>

    <section class="legal-sec" id="finalidades">
      <h2><span class="num">03</span> Cómo usamos los datos</h2>
      <p>
        Usamos tus datos de forma responsable y siempre con un objetivo claro. En la práctica, nos permiten:
      </p>
      <ul>
        <li>Responder a tus mensajes y preparar propuestas a la medida de lo que necesitas;</li>
        <li>Ejecutar y dar seguimiento a los servicios que contrataste, de principio a fin;</li>
        <li>Mantenerte informado sobre el avance del proyecto y sobre nuestra relación de trabajo;</li>
        <li>Mejorar continuamente el rendimiento, la seguridad y la experiencia de quien usa el sitio;</li>
        <li>Cumplir las obligaciones legales, contractuales y regulatorias que se aplican a nuestra actividad.</li>
      </ul>
    </section>

    <section class="legal-sec" id="base-legal">
      <h2><span class="num">04</span> Bases legales</h2>
      <p>
        Todo uso de datos que hacemos se apoya en una base legal prevista en la LGPD, es decir, un motivo
        legítimo para tratar esa información. En la mayoría de los casos, ese motivo es la
        <strong>ejecución de un contrato</strong>, incluyendo las conversaciones previas. También nos apoyamos
        en el <strong>interés legítimo</strong> de mantener el sitio seguro y funcionando bien, en el
        <strong>cumplimiento de obligaciones legales</strong> y en tu <strong>consentimiento</strong> cuando
        realmente es necesario. Es lo que ocurre, por ejemplo, con las cookies que no son esenciales: solo
        entran en acción después de que aceptas.
      </p>
    </section>

    <section class="legal-sec" id="cookies">
      <h2><span class="num">05</span> Cookies</h2>
      <p>
        Usamos cookies para mantener el sitio funcionando, recordar tus preferencias (como el idioma que
        elegiste) y entender cómo navega la gente por aquí, para poder mejorar la experiencia. Tú tienes el
        control sobre esto y puedes ajustar tus preferencias cuando quieras, ya sea por el aviso de cookies o
        en la configuración de tu propio navegador. Las únicas que no se pueden desactivar son las cookies
        esenciales, porque sin ellas el sitio simplemente no funciona como debería.
      </p>
    </section>

    <section class="legal-sec" id="compartilhamento">
      <h2><span class="num">06</span> Compartición</h2>
      <p>
        No vendemos tus datos, punto. Solo se comparten con <strong>socios que nos ayudan a operar</strong>,
        como servicios de alojamiento, correo y análisis, y aun así siempre en el mínimo necesario y con
        compromiso de confidencialidad. Fuera de esas situaciones, solo compartimos información cuando la ley
        lo exige o cuando una <strong>autoridad competente</strong> lo solicita formalmente.
      </p>
    </section>

    <section class="legal-sec" id="armazenamento">
      <h2><span class="num">07</span> Almacenamiento y seguridad</h2>
      <p>
        Nos tomamos la seguridad en serio y adoptamos medidas técnicas y organizativas para proteger tus
        datos contra el acceso no autorizado, la pérdida o el uso indebido. Parte de la información puede
        procesarse en servidores ubicados fuera del país, pero siempre con garantías adecuadas de protección.
        Seamos honestos: ningún sistema en internet es 100% infalible. Aun así, trabajamos continuamente para
        mantener tu información protegida y reducir cualquier riesgo al mínimo.
      </p>
    </section>

    <section class="legal-sec" id="direitos">
      <h2><span class="num">08</span> Tus derechos</h2>
      <p>
        Los datos son tuyos, y la ley garantiza que mantengas el control sobre ellos. En cualquier momento,
        puedes:
      </p>
      <ul>
        <li>Confirmar si tratamos tus datos y acceder a qué información guardamos;</li>
        <li>Corregir datos que estén equivocados, incompletos o desactualizados;</li>
        <li>Pedir la anonimización, el bloqueo o la eliminación de datos que ya no sean necesarios;</li>
        <li>Solicitar la portabilidad, es decir, llevar tus datos a otro proveedor;</li>
        <li>Retirar el consentimiento y oponerte a determinados tratamientos, dentro de los límites de la ley.</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, basta con ponerte en contacto con nosotros por los canales
        indicados al final de esta página. Es sencillo y no tiene costo.
      </p>
    </section>

    <section class="legal-sec" id="retencao">
      <h2><span class="num">09</span> Conservación de datos</h2>
      <p>
        Guardamos tus datos solo durante el tiempo necesario para cumplir las finalidades descritas en esta
        política y para atender las obligaciones legales que se nos aplican. Cuando ese período termina, la
        información se elimina o se anonimiza de forma segura, de modo que ya no sea posible identificarte a
        partir de ella.
      </p>
    </section>

    <section class="legal-sec" id="alteracoes">
      <h2><span class="num">10</span> Cambios en esta política</h2>
      <p>
        De vez en cuando, esta política puede actualizarse, ya sea porque cambiamos algún proceso o porque
        cambia la legislación. Siempre que eso ocurra, revisaremos la fecha de "última actualización" en la
        parte superior de la página. Por eso, vale la pena volver aquí de tanto en tanto para estar al día.
      </p>
    </section>

    <section class="legal-sec" id="contato">
      <h2><span class="num">11</span> Contacto y encargado</h2>
      <p>
        ¿Te quedó alguna duda sobre esta política o quieres ejercer alguno de tus derechos? Habla con nuestro
        encargado de datos (DPO). Estamos a tu disposición para ayudarte en lo que necesites.
      </p>
      <div class="legal-cta">
        <p>Envía tu solicitud y te respondemos en hasta 1 día hábil.</p>
        <a class="mail" href="mailto:filkastudio@outlook.com.br">filkastudio@outlook.com.br</a>
      </div>
    </section>`
  };

  const DICT = { pt: PT, en: EN, es: ES };

  // ---- TOC scroll highlighter (re-initializable after content swap) ----
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
