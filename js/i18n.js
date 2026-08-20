/* =========================================
   Filka — i18n (PT / EN / ES)
   Traduz por nós de texto, preservando spans decorados.
   ========================================= */
(function () {
  const T = {
    en: {
      // Nav
      "Serviços": "Services",
      "Projetos": "Projects",
      "Processo": "Process",
      "Preços": "Pricing",
      "Contato": "Contact",
      "Home": "Home",
      "Produtos": "Products",
      // Hero
      "Integramos dois universos, programação e design, para transformar sua visão em produto. Alta qualidade e agilidade, da arquitetura ao último pixel.":
        "We bring two worlds together, engineering and design, to turn your vision into a product. High quality and speed, from architecture to the last pixel.",
      "Agendar reunião": "Book a meeting",
      "Agendar reunião →": "Book a meeting →",
      "Ver cases": "See our work",
      "role para explorar": "scroll to explore",
      // Manifesto
      "Pensamos em": "We think in",
      "código": "code",
      "e em": "and in",
      "composição visual": "visual composition",
      "na mesma frase.": "in the same breath.",
      "No Filka, programação e design não são disciplinas separadas, são uma só prática. Automatize processos, reduza erros operacionais e tome a decisão certa para o seu negócio, sem abrir mão da estética.":
        "At Filka, engineering and design aren't separate disciplines, they're a single craft. Automate processes, cut operational errors and make the right call for your business, without giving up on aesthetics.",
      // Trust
      "empresas que confiam": "companies that trust us",
      // Big numbers
      "em números": "in numbers",
      "Resultado que": "Results you",
      "se mede": "can measure",
      "Projetos entregues": "Projects delivered",
      "NPS médio": "Average NPS",
      "Tecnologias dominadas": "Technologies mastered",
      // What we do
      "o que fazemos": "what we do",
      "Da arquitetura ao último pixel,": "From architecture to the last pixel,",
      "tudo no mesmo lugar.": "all in one place.",
      // Projects showcase
      "o que entregamos": "what we deliver",
      "Projetos que já estão": "Projects already",
      "no ar.": "live.",
      "site institucional": "company website",
      "site & marca": "site & brand",
      "produto digital": "digital product",
      "Ver mais projetos": "See more projects",
      // Projects page
      "projetos": "projects",
      "O que já": "Work that",
      "está no ar.": "speaks for itself.",
      "Trabalho que": "Projects that",
      "fala por nós.": "speak for themselves.",
      "Projetos que": "Projects that",
      "falam por nós.": "speak for themselves.",
      "Uma amostra do que construímos, de sites institucionais a produtos digitais. Clique em qualquer projeto para pré-visualizar aqui mesmo.":
        "A sample of what we've built, from company websites to digital products. Click any project to preview it right here.",
      "E muitos outros em andamento. Nossos trabalhos de design vivem no Behance.":
        "And many more in progress. Our design work lives on Behance.",
      "Ver design no Behance": "See design on Behance",
      "Ver mais no GitHub": "See more on GitHub",
      "Design no Behance": "Design on Behance",
      "Dados & IA": "Data & AI",
      "Diagnóstico, pipelines, AI/BI Genie e automações sob medida. Levamos o dado bruto até a decisão, com governança e um Salesforce que conversa com o resto.":
        "Assessments, pipelines, AI/BI Genie and custom automation. We take raw data all the way to the decision, with governance and a Salesforce that talks to everything else.",
      "Digital & Marca": "Digital & Brand",
      "Landing pages, sites e identidade visual com engenharia por trás. Carregam rápido, medem tudo e convertem, sem abrir mão da estética.":
        "Landing pages, websites and visual identity with engineering behind them. They load fast, measure everything and convert, without giving up on aesthetics.",
      // Process
      "como trabalhamos": "how we work",
      "Do primeiro olá ao": "From the first hello to",
      "pós-entrega": "post-delivery",
      "30 min · sem custo": "30 min · free",
      "Conversa": "Conversation",
      "Trinta minutos, sem custo. Saímos com o entendimento mútuo do problema.":
        "Thirty minutes, no cost. We leave with a shared understanding of the problem.",
      "até 1 semana": "up to 1 week",
      "Levantamento": "Discovery",
      "Acesso ao contexto técnico e mapeamento do cenário real, sem suposições.":
        "Access to the technical context and a map of the real scenario, no guesswork.",
      "validade 15 dias": "valid for 15 days",
      "Proposta em 3 caminhos": "Proposal in 3 paths",
      "MVP, Recomendado ou Completo. Cada um com escopo, prazo e preço fechados por escrito.":
        "MVP, Recommended or Complete. Each one with scope, timeline and price fixed in writing.",
      "ciclos semanais": "weekly cycles",
      "Execução em sprints": "Sprint execution",
      "Ciclos semanais com demo. Você vê o avanço do produto, não relatório de horas.":
        "Weekly cycles with a demo. You see the product move forward, not a timesheet.",
      "30 dias inclusos": "30 days included",
      "Handover + cuidado": "Handover + care",
      "Documentação, treinamento e suporte inclusos por 30 dias após a entrega. A gente não some no go-live.":
        "Documentation, training and support included for 30 days after delivery. We don't vanish at go-live.",
      "Conhecer soluções": "Explore solutions",
      // Pricing
      "investimento": "investment",
      "Escopo, prazo e preços fechados.": "Scope, timeline and pricing, all fixed.",
      "// dados & ia": "// data & ai",
      "Seu lakehouse e seu CRM, finalmente entregando.": "Your lakehouse and your CRM, finally delivering.",
      "A maioria das empresas já tem plataforma de dados e Salesforce. O que falta é alguém que faça as duas coisas funcionarem juntas e responderem ao negócio.":
        "Most companies already have a data platform and Salesforce. What's missing is someone to make the two work together and answer to the business.",
      "// digital & marca": "// digital & brand",
      "Presença digital com engenharia por trás.": "Digital presence with engineering behind it.",
      "Sites que carregam rápido, medem tudo e convertem. Desenhados por quem entende de marca e construídos por quem entende de código.":
        "Sites that load fast, measure everything and convert. Designed by people who get brand and built by people who get code.",
      // Tags / prices
      "2 semanas": "2 weeks",
      "a depender do projeto": "depends on the project",
      "2 a 3 semanas": "2 to 3 weeks",
      "3 a 5 semanas": "3 to 5 weeks",
      "3 a 4 semanas": "3 to 4 weeks",
      "mensal · contínuo": "monthly · ongoing",
      "investimento único": "one-time investment",
      "a partir de": "starting at",
      "por projeto": "per project",
      "por automação": "per automation",
      "por mês": "per month",
      "preço fechado": "fixed price",
      // Card titles
      "Diagnóstico de Dados": "Data Assessment",
      "Automação sob medida": "Custom automation",
      "Salesforce sob medida": "Custom Salesforce",
      "Retainer de Dados": "Data Retainer",
      "Landing Page de conversão": "Conversion Landing Page",
      "Site institucional": "Company website",
      "Identidade visual": "Visual identity",
      // Card descriptions
      "Auditoria técnica do seu ambiente com plano de ação priorizado.":
        "A technical audit of your environment with a prioritized action plan.",
      "Seu time pergunta em português e o dado responde, com governança, não no improviso.":
        "Your team asks in plain language and the data answers, with governance, not improvisation.",
      "Aquele processo manual que consome horas todo mês? A gente elimina.":
        "That manual process eating hours every month? We get rid of it.",
      "Sales Cloud do jeito que sua operação precisa, não do jeito que veio de fábrica.":
        "Sales Cloud the way your operation needs it, not the way it shipped.",
      "Um time de dados sob demanda, todo mês, sem custo de contratação.":
        "An on-demand data team, every month, with no hiring cost.",
      "Uma página, um objetivo, métricas desde o primeiro dia.":
        "One page, one goal, metrics from day one.",
      "Sua marca no ar com performance e mensuração de verdade.":
        "Your brand live, with real performance and real measurement.",
      "Uma marca com conceito e um manual que as pessoas realmente usam.":
        "A brand with a concept and a guide people actually use.",
      "Um time de produto sob demanda, todo mês, sem custo de contratação.":
        "An on-demand product team, every month, with no hiring cost.",
      // List items
      "Arquitetura das camadas e qualidade dos pipelines": "Layer architecture and pipeline quality",
      "Governança e permissões no Unity Catalog": "Governance and permissions in Unity Catalog",
      "Custo de processamento e oportunidades de economia": "Compute cost and savings opportunities",
      "Prontidão para AI/BI": "AI/BI readiness",
      "Relatório executivo + sessão de leitura com seu time": "Executive report + read-out session with your team",
      "Modelagem das views dedicadas ao AI/BI": "Modeling of views dedicated to AI/BI",
      "Segurança e permissões no Unity Catalog": "Security and permissions in Unity Catalog",
      "Instruções e contexto por domínio de negócio": "Instructions and context per business domain",
      "Exemplos curados e validados com usuários reais": "Examples curated and validated with real users",
      "Handover documentado para seu time operar sozinho": "Documented handover so your team runs it alone",
      "ETLs e integrações entre sistemas": "ETLs and integrations across systems",
      "Robôs de dados e conectores de API": "Data bots and API connectors",
      "Relatórios que se montam sozinhos": "Reports that build themselves",
      "Código documentado, sem caixa-preta": "Documented code, no black box",
      "Automações em Apex e Flows": "Automations in Apex and Flows",
      "Componentes LWC sob medida": "Custom LWC components",
      "Integrações via API com seus sistemas": "API integrations with your systems",
      "Qualidade e deduplicação de dados no CRM": "Data quality and deduplication in the CRM",
      "Horas dedicadas de eng. de dados por mês": "Dedicated data-engineering hours per month",
      "Evolução contínua de pipelines e modelos": "Continuous evolution of pipelines and models",
      "Monitoramento e otimização de custos": "Cost monitoring and optimization",
      "Prioridade no atendimento e nas entregas": "Priority in support and delivery",
      "Copy orientada a conversão": "Conversion-driven copy",
      "Design alinhado à sua marca": "Design aligned with your brand",
      "Tracking e analytics configurados": "Tracking and analytics set up",
      "Publicada e funcionando, não \"entregue em Figma\"": "Published and working, not \"handed off in Figma\"",
      "Webflow ou código sob medida": "Webflow or custom code",
      "SEO técnico e performance": "Technical SEO and performance",
      "Integração com CRM e ferramentas de marketing": "Integration with CRM and marketing tools",
      "Treinamento para seu time atualizar sozinho": "Training so your team updates it alone",
      "Marca, paleta e tipografia": "Logo, palette and typography",
      "Manual de uso objetivo": "A practical usage guide",
      "Templates de social media e e-mail": "Social media and email templates",
      "Horas dedicadas de eng. e design por mês": "Dedicated engineering & design hours per month",
      "Evolução contínua de produto e dados": "Continuous evolution of product and data",
      "Reunião de acompanhamento quinzenal": "Biweekly check-in meeting",
      // CTAs
      "Agendar diagnóstico": "Book assessment",
      "Pedir proposta": "Request proposal",
      "Contar qual processo": "Tell us the process",
      "Montar meu plano": "Build my plan",
      "Começar minha LP": "Start my LP",
      // FAQ
      "// faq": "// faq",
      "Alguma": "Any",
      "dúvida?": "questions?",
      "Falar com a gente": "Talk to us",
      "Como funciona contratar a Filka?": "How does hiring Filka work?",
      "Depois de uma conversa, a gente analisa o que seu projeto precisa (requisitos, prazo e escopo) e devolve uma proposta detalhada. Em todo o caminho você fica acompanhado: atualizamos o progresso, tiramos dúvidas e, mesmo depois da entrega, seguimos por perto nos 30 dias de cuidado.":
        "After a conversation, we look at what your project needs (requirements, timeline and scope) and send back a detailed proposal. You're supported the whole way: we share progress, answer questions and, even after delivery, stay close for the 30 days of care.",
      "Que serviços vocês oferecem?": "What services do you offer?",
      "Duas frentes. Dados & IA: diagnóstico, AI/BI Genie, automação sob medida e Salesforce. Digital & Marca: landing pages, sites e identidade visual. E o Retainer, capacidade sênior mês a mês na frente que você escolher.":
        "Two fronts. Data & AI: assessment, AI/BI Genie, custom automation and Salesforce. Digital & Brand: landing pages, websites and visual identity. And the Retainer, senior capacity month to month on whichever front you choose.",
      "Quanto tempo leva e quanto custa um projeto?": "How long does a project take and what does it cost?",
      "Os produtos de entrada têm preço fechado e prazo curto (a partir de 2 semanas). Os demais variam com o escopo. Uma conversa inicial ajuda a gente a mapear sua necessidade e dar uma estimativa precisa por escrito.":
        "Entry products have a fixed price and a short timeline (from 2 weeks). The rest vary with scope. A first conversation helps us map your need and give a precise estimate in writing.",
      "Que tecnologias e ferramentas vocês usam?": "What technologies and tools do you use?",
      "Em dados: Databricks, Unity Catalog, Genie/AI·BI, Delta Lake, PySpark e Python. Em sistemas: Salesforce com Apex e LWC. Em digital: Webflow ou código sob medida, sempre com tracking configurado. Construímos coisas que rodam em produção, não protótipos.":
        "In data: Databricks, Unity Catalog, Genie/AI·BI, Delta Lake, PySpark and Python. In systems: Salesforce with Apex and LWC. In digital: Webflow or custom code, always with tracking in place. We build things that run in production, not prototypes.",
      "E depois que o projeto termina?": "And after the project ends?",
      "Todo projeto inclui handover documentado e 30 dias de cuidado, com treinamento e suporte para seu time operar sozinho. Se quiser evolução contínua, o Retainer mantém um time de produto à disposição mês a mês.":
        "Every project includes a documented handover and 30 days of care, with training and support so your team runs it alone. If you want continuous evolution, the Retainer keeps a product team available month to month.",
      // Contact
      "vamos conversar": "let's talk",
      "Pronto para fazer seus dados": "Ready to make your data",
      "responderem?": "answer?",
      "diga oi!": "say hi!",
      "redes sociais": "social",
      "Vamos construir algo que roda.": "Let's build something that runs.",
      "Iniciar projeto": "Start a project",
      "© 2026 Filka. Todos os direitos reservados.": "© 2026 Filka. All rights reserved.",
      "Política de privacidade": "Privacy policy",
      "Termos de uso": "Terms of use",
      "Cookies": "Cookies",
      "Trabalhe conosco": "Work with us",
      // 404
      "erro 404": "error 404",
      "Esta página ainda está sendo construída.": "This page is still under construction.",
      "O conteúdo que você procura ainda não está no ar. Estamos trabalhando nele — enquanto isso, volte ao início ou fale com a gente.":
        "The content you're looking for isn't live yet. We're working on it — in the meantime, head back home or get in touch.",
      "Voltar para a home": "Back to home",
      // Form page (contato)
      "iniciar projeto": "start a project",
      "Vamos começar a conversa": "Let's start the conversation",
      "Conte o que o seu negócio precisa. A gente responde em até 1 dia útil, por e-mail.":
        "Tell us what your business needs. We reply within 1 business day, by email.",
      "E-mail": "Email",
      "WhatsApp": "WhatsApp",
      "Atendimento": "Availability",
      "Remoto, Brasil e exterior": "Remote, Brazil and abroad",
      "\"Todo projeto começa com uma boa conversa": "\"Every project starts with a good conversation",
      "Seu nome": "Your name",
      "Telefone": "Phone",
      "E-mail corporativo": "Work email",
      "Empresa": "Company",
      "Nome da empresa": "Company name",
      "Como podemos ajudar?": "How can we help?",
      "Como conheceu a Filka?": "How did you find Filka?",
      "Conte um pouco do que você tem em mente": "Tell us a bit about what you have in mind",
      "Selecione": "Select",
      "Dados & IA (diagnóstico, AI/BI, automação)": "Data & AI (assessment, AI/BI, automation)",
      "Salesforce sob medida": "Custom Salesforce",
      "Landing page / Site institucional": "Landing page / Company website",
      "Identidade visual": "Visual identity",
      "Retainer (capacidade contínua)": "Retainer (ongoing capacity)",
      "Ainda não sei, quero conversar": "Not sure yet, let's talk",
      "Indicação": "Referral",
      "Outro": "Other",
      "Ex.: temos Databricks há 1 ano, mas o negócio ainda depende de analista para tudo...":
        "E.g.: we've had Databricks for a year, but the business still relies on an analyst for everything...",
      "Enviar mensagem": "Send message",
      "Mensagem recebida!": "Message received!",
      "Obrigado pelo contato. Já recebemos as suas informações e vamos responder em até 1 dia útil, por e-mail.":
        "Thanks for reaching out. We've got your details and will reply within 1 business day by email.",
      "Enquanto isso, se quiser, dê uma olhada no que já construímos:":
        "In the meantime, feel free to take a look at what we've built:",
      "Ver nossos cases": "See our work",
      "Enviar outra mensagem": "Send another message",
      // Careers page (trabalhe)
      "trabalhe conosco": "work with us",
      "Faça parte da": "Be part of",
      "Somos um time enxuto e seletivo. Nem sempre temos vagas abertas, mas estamos sempre de olho em gente talentosa que compartilha da nossa forma de trabalhar. Se é o seu caso, adoraríamos te conhecer.":
        "We're a small, selective team. We don't always have open positions, but we're always on the lookout for talented people who share the way we work. If that's you, we'd love to meet you.",
      "vagas abertas": "open positions",
      "Oportunidades no LinkedIn": "Opportunities on LinkedIn",
      "Veja as posições que estão abertas agora e candidate-se direto pelo nosso LinkedIn.":
        "See the positions open right now and apply directly through our LinkedIn.",
      "Ver vagas no LinkedIn": "See jobs on LinkedIn",
      "Ver mais no LinkedIn": "See more on LinkedIn",
      "Software Engineer": "Software Engineer",
      "Sales Executive": "Sales Executive",
      "Marketing Assistant": "Marketing Assistant",
      "PJ · Remoto": "Contractor · Remote",
      "candidatura espontânea": "open application",
      "Deixe o seu currículo": "Leave your résumé",
      "Não encontrou uma vaga? Mande a sua carta de apresentação e anexe o currículo. Guardamos o seu contato para quando surgir a oportunidade certa.":
        "Didn't find a role? Send your cover letter and attach your résumé. We'll keep your details on file for when the right opportunity comes up.",
      "Nome": "Name",
      "Carta de apresentação": "Cover letter",
      "Conte um pouco sobre você e por que quer trabalhar com a gente...":
        "Tell us a bit about yourself and why you'd like to work with us...",
      "Currículo (PDF, DOC)": "Résumé (PDF, DOC)",
      "Escolher arquivo": "Choose file",
      "Nenhum arquivo selecionado": "No file selected",
      "Enviar candidatura": "Send application",
      "Prefere e-mail? Escreva para": "Prefer email? Write to",
      "Candidatura enviada!": "Application sent!",
      "Obrigado pelo interesse! Recebemos a sua candidatura e vamos guardar o seu contato com carinho.":
        "Thanks for your interest! We got your application and we'll keep your details on file."
    },
    es: {
      // Nav
      "Serviços": "Servicios",
      "Projetos": "Proyectos",
      "Processo": "Proceso",
      "Preços": "Precios",
      "Contato": "Contacto",
      "Home": "Inicio",
      "Produtos": "Productos",
      "Cases": "Casos",
      // Hero
      "Integramos dois universos, programação e design, para transformar sua visão em produto. Alta qualidade e agilidade, da arquitetura ao último pixel.":
        "Unimos dos universos, programación y diseño, para convertir tu visión en producto. Alta calidad y agilidad, de la arquitectura al último píxel.",
      "Agendar reunião": "Agendar una reunión",
      "Agendar reunião →": "Agendar una reunión →",
      "Ver cases": "Ver casos",
      "role para explorar": "desliza para explorar",
      // Manifesto
      "Pensamos em": "Pensamos en",
      "código": "código",
      "e em": "y en",
      "composição visual": "composición visual",
      "na mesma frase.": "en la misma frase.",
      "No Filka, programação e design não são disciplinas separadas, são uma só prática. Automatize processos, reduza erros operacionais e tome a decisão certa para o seu negócio, sem abrir mão da estética.":
        "En Filka, programación y diseño no son disciplinas separadas, son una sola práctica. Automatiza procesos, reduce errores operativos y toma la decisión correcta para tu negocio, sin renunciar a la estética.",
      // Trust
      "empresas que confiam": "empresas que confían",
      // Big numbers
      "em números": "en números",
      "Resultado que": "Resultados que",
      "se mede": "se miden",
      "Projetos entregues": "Proyectos entregados",
      "NPS médio": "NPS promedio",
      "Tecnologias dominadas": "Tecnologías dominadas",
      // What we do
      "o que fazemos": "lo que hacemos",
      "Da arquitetura ao último pixel,": "De la arquitectura al último píxel,",
      "tudo no mesmo lugar.": "todo en un solo lugar.",
      // Projects showcase
      "o que entregamos": "lo que entregamos",
      "Projetos que já estão": "Proyectos que ya están",
      "no ar.": "en línea.",
      "site institucional": "sitio institucional",
      "site & marca": "sitio y marca",
      "produto digital": "producto digital",
      "Ver mais projetos": "Ver más proyectos",
      // Projects page
      "projetos": "proyectos",
      "O que já": "Lo que ya",
      "está no ar.": "está en línea.",
      "Trabalho que": "Proyectos que",
      "fala por nós.": "hablan por nosotros.",
      "Projetos que": "Proyectos que",
      "falam por nós.": "hablan por nosotros.",
      "Uma amostra do que construímos, de sites institucionais a produtos digitais. Clique em qualquer projeto para pré-visualizar aqui mesmo.":
        "Una muestra de lo que hemos construido, de sitios institucionales a productos digitales. Haz clic en cualquier proyecto para previsualizarlo aquí mismo.",
      "E muitos outros em andamento. Nossos trabalhos de design vivem no Behance.":
        "Y muchos más en marcha. Nuestros trabajos de diseño viven en Behance.",
      "Ver design no Behance": "Ver diseño en Behance",
      "Ver mais no GitHub": "Ver más en GitHub",
      "Design no Behance": "Diseño en Behance",
      "Dados & IA": "Datos e IA",
      "Diagnóstico, pipelines, AI/BI Genie e automações sob medida. Levamos o dado bruto até a decisão, com governança e um Salesforce que conversa com o resto.":
        "Diagnóstico, pipelines, AI/BI Genie y automatizaciones a medida. Llevamos el dato bruto hasta la decisión, con gobernanza y un Salesforce que conversa con el resto.",
      "Digital & Marca": "Digital y Marca",
      "Landing pages, sites e identidade visual com engenharia por trás. Carregam rápido, medem tudo e convertem, sem abrir mão da estética.":
        "Landing pages, sitios e identidad visual con ingeniería detrás. Cargan rápido, miden todo y convierten, sin renunciar a la estética.",
      // Process
      "como trabalhamos": "cómo trabajamos",
      "Do primeiro olá ao": "Del primer hola al",
      "pós-entrega": "post-entrega",
      "30 min · sem custo": "30 min · sin costo",
      "Conversa": "Conversación",
      "Trinta minutos, sem custo. Saímos com o entendimento mútuo do problema.":
        "Treinta minutos, sin costo. Salimos con un entendimiento mutuo del problema.",
      "até 1 semana": "hasta 1 semana",
      "Levantamento": "Levantamiento",
      "Acesso ao contexto técnico e mapeamento do cenário real, sem suposições.":
        "Acceso al contexto técnico y mapeo del escenario real, sin suposiciones.",
      "validade 15 dias": "validez 15 días",
      "Proposta em 3 caminhos": "Propuesta en 3 caminos",
      "MVP, Recomendado ou Completo. Cada um com escopo, prazo e preço fechados por escrito.":
        "MVP, Recomendado o Completo. Cada uno con alcance, plazo y precio cerrados por escrito.",
      "ciclos semanais": "ciclos semanales",
      "Execução em sprints": "Ejecución en sprints",
      "Ciclos semanais com demo. Você vê o avanço do produto, não relatório de horas.":
        "Ciclos semanales con demo. Ves el avance del producto, no un reporte de horas.",
      "30 dias inclusos": "30 días incluidos",
      "Handover + cuidado": "Handover + cuidado",
      "Documentação, treinamento e suporte inclusos por 30 dias após a entrega. A gente não some no go-live.":
        "Documentación, capacitación y soporte incluidos por 30 días tras la entrega. No desaparecemos en el go-live.",
      "Conhecer soluções": "Conocer soluciones",
      // Pricing
      "investimento": "inversión",
      "Escopo, prazo e preços fechados.": "Alcance, plazo y precios cerrados.",
      "// dados & ia": "// datos e ia",
      "Seu lakehouse e seu CRM, finalmente entregando.": "Tu lakehouse y tu CRM, por fin entregando.",
      "A maioria das empresas já tem plataforma de dados e Salesforce. O que falta é alguém que faça as duas coisas funcionarem juntas e responderem ao negócio.":
        "La mayoría de las empresas ya tiene plataforma de datos y Salesforce. Lo que falta es alguien que haga que ambas cosas funcionen juntas y respondan al negocio.",
      "// digital & marca": "// digital y marca",
      "Presença digital com engenharia por trás.": "Presencia digital con ingeniería detrás.",
      "Sites que carregam rápido, medem tudo e convertem. Desenhados por quem entende de marca e construídos por quem entende de código.":
        "Sitios que cargan rápido, miden todo y convierten. Diseñados por quien entiende de marca y construidos por quien entiende de código.",
      // Tags / prices
      "2 semanas": "2 semanas",
      "a depender do projeto": "según el proyecto",
      "2 a 3 semanas": "2 a 3 semanas",
      "3 a 5 semanas": "3 a 5 semanas",
      "3 a 4 semanas": "3 a 4 semanas",
      "mensal · contínuo": "mensual · continuo",
      "investimento único": "inversión única",
      "a partir de": "desde",
      "por projeto": "por proyecto",
      "por automação": "por automatización",
      "por mês": "por mes",
      "preço fechado": "precio cerrado",
      // Card titles
      "Diagnóstico de Dados": "Diagnóstico de Datos",
      "Automação sob medida": "Automatización a medida",
      "Salesforce sob medida": "Salesforce a medida",
      "Retainer de Dados": "Retainer de Datos",
      "Landing Page de conversão": "Landing Page de conversión",
      "Site institucional": "Sitio institucional",
      "Identidade visual": "Identidad visual",
      // Card descriptions
      "Auditoria técnica do seu ambiente com plano de ação priorizado.":
        "Auditoría técnica de tu entorno con un plan de acción priorizado.",
      "Seu time pergunta em português e o dado responde, com governança, não no improviso.":
        "Tu equipo pregunta en lenguaje natural y el dato responde, con gobernanza, no a la improvisada.",
      "Aquele processo manual que consome horas todo mês? A gente elimina.":
        "¿Ese proceso manual que consume horas cada mes? Lo eliminamos.",
      "Sales Cloud do jeito que sua operação precisa, não do jeito que veio de fábrica.":
        "Sales Cloud como tu operación lo necesita, no como vino de fábrica.",
      "Um time de dados sob demanda, todo mês, sem custo de contratação.":
        "Un equipo de datos bajo demanda, cada mes, sin costo de contratación.",
      "Uma página, um objetivo, métricas desde o primeiro dia.":
        "Una página, un objetivo, métricas desde el primer día.",
      "Sua marca no ar com performance e mensuração de verdade.":
        "Tu marca en línea con rendimiento y medición de verdad.",
      "Uma marca com conceito e um manual que as pessoas realmente usam.":
        "Una marca con concepto y un manual que la gente realmente usa.",
      "Um time de produto sob demanda, todo mês, sem custo de contratação.":
        "Un equipo de producto bajo demanda, cada mes, sin costo de contratación.",
      // List items
      "Arquitetura das camadas e qualidade dos pipelines": "Arquitectura de capas y calidad de los pipelines",
      "Governança e permissões no Unity Catalog": "Gobernanza y permisos en Unity Catalog",
      "Custo de processamento e oportunidades de economia": "Costo de procesamiento y oportunidades de ahorro",
      "Prontidão para AI/BI": "Preparación para AI/BI",
      "Relatório executivo + sessão de leitura com seu time": "Informe ejecutivo + sesión de lectura con tu equipo",
      "Modelagem das views dedicadas ao AI/BI": "Modelado de las vistas dedicadas a AI/BI",
      "Segurança e permissões no Unity Catalog": "Seguridad y permisos en Unity Catalog",
      "Instruções e contexto por domínio de negócio": "Instrucciones y contexto por dominio de negocio",
      "Exemplos curados e validados com usuários reais": "Ejemplos curados y validados con usuarios reales",
      "Handover documentado para seu time operar sozinho": "Handover documentado para que tu equipo opere solo",
      "ETLs e integrações entre sistemas": "ETLs e integraciones entre sistemas",
      "Robôs de dados e conectores de API": "Bots de datos y conectores de API",
      "Relatórios que se montam sozinhos": "Informes que se arman solos",
      "Código documentado, sem caixa-preta": "Código documentado, sin caja negra",
      "Automações em Apex e Flows": "Automatizaciones en Apex y Flows",
      "Componentes LWC sob medida": "Componentes LWC a medida",
      "Integrações via API com seus sistemas": "Integraciones vía API con tus sistemas",
      "Qualidade e deduplicação de dados no CRM": "Calidad y deduplicación de datos en el CRM",
      "Horas dedicadas de eng. de dados por mês": "Horas dedicadas de ing. de datos por mes",
      "Evolução contínua de pipelines e modelos": "Evolución continua de pipelines y modelos",
      "Monitoramento e otimização de custos": "Monitoreo y optimización de costos",
      "Prioridade no atendimento e nas entregas": "Prioridad en la atención y en las entregas",
      "Copy orientada a conversão": "Copy orientado a conversión",
      "Design alinhado à sua marca": "Diseño alineado con tu marca",
      "Tracking e analytics configurados": "Tracking y analytics configurados",
      "Publicada e funcionando, não \"entregue em Figma\"": "Publicada y funcionando, no \"entregada en Figma\"",
      "Webflow ou código sob medida": "Webflow o código a medida",
      "SEO técnico e performance": "SEO técnico y rendimiento",
      "Integração com CRM e ferramentas de marketing": "Integración con CRM y herramientas de marketing",
      "Treinamento para seu time atualizar sozinho": "Capacitación para que tu equipo lo actualice solo",
      "Marca, paleta e tipografia": "Logo, paleta y tipografía",
      "Manual de uso objetivo": "Un manual de uso práctico",
      "Templates de social media e e-mail": "Plantillas de redes sociales y correo",
      "Horas dedicadas de eng. e design por mês": "Horas dedicadas de ing. y diseño por mes",
      "Evolução contínua de produto e dados": "Evolución continua de producto y datos",
      "Reunião de acompanhamento quinzenal": "Reunión de seguimiento quincenal",
      // CTAs
      "Agendar diagnóstico": "Agendar diagnóstico",
      "Pedir proposta": "Pedir propuesta",
      "Contar qual processo": "Contar qué proceso",
      "Montar meu plano": "Armar mi plan",
      "Começar minha LP": "Empezar mi LP",
      // FAQ
      "// faq": "// faq",
      "Alguma": "¿Alguna",
      "dúvida?": "duda?",
      "Falar com a gente": "Hablar con nosotros",
      "Como funciona contratar a Filka?": "¿Cómo funciona contratar a Filka?",
      "Depois de uma conversa, a gente analisa o que seu projeto precisa (requisitos, prazo e escopo) e devolve uma proposta detalhada. Em todo o caminho você fica acompanhado: atualizamos o progresso, tiramos dúvidas e, mesmo depois da entrega, seguimos por perto nos 30 dias de cuidado.":
        "Tras una conversación, analizamos lo que tu proyecto necesita (requisitos, plazo y alcance) y devolvemos una propuesta detallada. En todo el camino estás acompañado: actualizamos el progreso, resolvemos dudas y, incluso después de la entrega, seguimos cerca durante los 30 días de cuidado.",
      "Que serviços vocês oferecem?": "¿Qué servicios ofrecen?",
      "Duas frentes. Dados & IA: diagnóstico, AI/BI Genie, automação sob medida e Salesforce. Digital & Marca: landing pages, sites e identidade visual. E o Retainer, capacidade sênior mês a mês na frente que você escolher.":
        "Dos frentes. Datos e IA: diagnóstico, AI/BI Genie, automatización a medida y Salesforce. Digital y Marca: landing pages, sitios e identidad visual. Y el Retainer, capacidad sénior mes a mes en el frente que elijas.",
      "Quanto tempo leva e quanto custa um projeto?": "¿Cuánto tarda y cuánto cuesta un proyecto?",
      "Os produtos de entrada têm preço fechado e prazo curto (a partir de 2 semanas). Os demais variam com o escopo. Uma conversa inicial ajuda a gente a mapear sua necessidade e dar uma estimativa precisa por escrito.":
        "Los productos de entrada tienen precio cerrado y plazo corto (desde 2 semanas). Los demás varían según el alcance. Una conversación inicial nos ayuda a mapear tu necesidad y dar una estimación precisa por escrito.",
      "Que tecnologias e ferramentas vocês usam?": "¿Qué tecnologías y herramientas usan?",
      "Em dados: Databricks, Unity Catalog, Genie/AI·BI, Delta Lake, PySpark e Python. Em sistemas: Salesforce com Apex e LWC. Em digital: Webflow ou código sob medida, sempre com tracking configurado. Construímos coisas que rodam em produção, não protótipos.":
        "En datos: Databricks, Unity Catalog, Genie/AI·BI, Delta Lake, PySpark y Python. En sistemas: Salesforce con Apex y LWC. En digital: Webflow o código a medida, siempre con tracking configurado. Construimos cosas que corren en producción, no prototipos.",
      "E depois que o projeto termina?": "¿Y después de que el proyecto termina?",
      "Todo projeto inclui handover documentado e 30 dias de cuidado, com treinamento e suporte para seu time operar sozinho. Se quiser evolução contínua, o Retainer mantém um time de produto à disposição mês a mês.":
        "Todo proyecto incluye handover documentado y 30 días de cuidado, con capacitación y soporte para que tu equipo opere solo. Si quieres evolución continua, el Retainer mantiene un equipo de producto disponible mes a mes.",
      // Contact
      "vamos conversar": "hablemos",
      "Pronto para fazer seus dados": "¿Listo para que tus datos",
      "responderem?": "respondan?",
      "diga oi!": "¡di hola!",
      "redes sociais": "redes sociales",
      "Vamos construir algo que roda.": "Construyamos algo que funcione.",
      "Iniciar projeto": "Iniciar proyecto",
      "© 2026 Filka. Todos os direitos reservados.": "© 2026 Filka. Todos los derechos reservados.",
      "Política de privacidade": "Política de privacidad",
      "Termos de uso": "Términos de uso",
      "Cookies": "Cookies",
      "Trabalhe conosco": "Trabaja con nosotros",
      // 404
      "erro 404": "error 404",
      "Esta página ainda está sendo construída.": "Esta página aún está en construcción.",
      "O conteúdo que você procura ainda não está no ar. Estamos trabalhando nele — enquanto isso, volte ao início ou fale com a gente.":
        "El contenido que buscas aún no está disponible. Estamos trabajando en ello — mientras tanto, vuelve al inicio o habla con nosotros.",
      "Voltar para a home": "Volver al inicio",
      // Form page (contato)
      "iniciar projeto": "iniciar proyecto",
      "Vamos começar a conversa": "Empecemos la conversación",
      "Conte o que o seu negócio precisa. A gente responde em até 1 dia útil, por e-mail.":
        "Cuéntanos qué necesita tu negocio. Respondemos en hasta 1 día hábil, por correo.",
      "E-mail": "Correo",
      "WhatsApp": "WhatsApp",
      "Atendimento": "Atención",
      "Remoto, Brasil e exterior": "Remoto, Brasil y exterior",
      "\"Todo projeto começa com uma boa conversa": "\"Todo proyecto empieza con una buena conversación",
      "Seu nome": "Tu nombre",
      "Telefone": "Teléfono",
      "E-mail corporativo": "Correo corporativo",
      "Empresa": "Empresa",
      "Nome da empresa": "Nombre de la empresa",
      "Como podemos ajudar?": "¿Cómo podemos ayudar?",
      "Como conheceu a Filka?": "¿Cómo conociste a Filka?",
      "Conte um pouco do que você tem em mente": "Cuéntanos un poco de lo que tienes en mente",
      "Selecione": "Selecciona",
      "Dados & IA (diagnóstico, AI/BI, automação)": "Datos e IA (diagnóstico, AI/BI, automatización)",
      "Salesforce sob medida": "Salesforce a medida",
      "Landing page / Site institucional": "Landing page / Sitio institucional",
      "Identidade visual": "Identidad visual",
      "Retainer (capacidade contínua)": "Retainer (capacidad continua)",
      "Ainda não sei, quero conversar": "Aún no lo sé, quiero conversar",
      "Indicação": "Recomendación",
      "Outro": "Otro",
      "Ex.: temos Databricks há 1 ano, mas o negócio ainda depende de analista para tudo...":
        "Ej.: tenemos Databricks hace 1 año, pero el negocio todavía depende de un analista para todo...",
      "Enviar mensagem": "Enviar mensaje",
      "Mensagem recebida!": "¡Mensaje recibido!",
      "Obrigado pelo contato. Já recebemos as suas informações e vamos responder em até 1 dia útil, por e-mail.":
        "Gracias por escribirnos. Ya tenemos tus datos y responderemos en hasta 1 día hábil por correo.",
      "Enquanto isso, se quiser, dê uma olhada no que já construímos:":
        "Mientras tanto, si quieres, echa un vistazo a lo que hemos construido:",
      "Ver nossos cases": "Ver nuestros casos",
      "Enviar outra mensagem": "Enviar otro mensaje",
      // Careers page (trabalhe)
      "trabalhe conosco": "trabaja con nosotros",
      "Faça parte da": "Forma parte de",
      "Somos um time enxuto e seletivo. Nem sempre temos vagas abertas, mas estamos sempre de olho em gente talentosa que compartilha da nossa forma de trabalhar. Se é o seu caso, adoraríamos te conhecer.":
        "Somos un equipo reducido y selectivo. No siempre tenemos vacantes abiertas, pero siempre estamos atentos a gente talentosa que comparte nuestra forma de trabajar. Si es tu caso, nos encantaría conocerte.",
      "vagas abertas": "vacantes abiertas",
      "Oportunidades no LinkedIn": "Oportunidades en LinkedIn",
      "Veja as posições que estão abertas agora e candidate-se direto pelo nosso LinkedIn.":
        "Mira las posiciones abiertas ahora y postúlate directamente por nuestro LinkedIn.",
      "Ver vagas no LinkedIn": "Ver vacantes en LinkedIn",
      "Ver mais no LinkedIn": "Ver más en LinkedIn",
      "Software Engineer": "Software Engineer",
      "Sales Executive": "Sales Executive",
      "Marketing Assistant": "Marketing Assistant",
      "PJ · Remoto": "Autónomo · Remoto",
      "candidatura espontânea": "candidatura espontánea",
      "Deixe o seu currículo": "Deja tu currículum",
      "Não encontrou uma vaga? Mande a sua carta de apresentação e anexe o currículo. Guardamos o seu contato para quando surgir a oportunidade certa.":
        "¿No encontraste una vacante? Envía tu carta de presentación y adjunta tu currículum. Guardamos tu contacto para cuando surja la oportunidad adecuada.",
      "Nome": "Nombre",
      "Carta de apresentação": "Carta de presentación",
      "Conte um pouco sobre você e por que quer trabalhar com a gente...":
        "Cuéntanos un poco sobre ti y por qué te gustaría trabajar con nosotros...",
      "Currículo (PDF, DOC)": "Currículum (PDF, DOC)",
      "Escolher arquivo": "Elegir archivo",
      "Nenhum arquivo selecionado": "Ningún archivo seleccionado",
      "Enviar candidatura": "Enviar candidatura",
      "Prefere e-mail? Escreva para": "¿Prefieres correo? Escribe a",
      "Candidatura enviada!": "¡Candidatura enviada!",
      "Obrigado pelo interesse! Recebemos a sua candidatura e vamos guardar o seu contato com carinho.":
        "¡Gracias por tu interés! Recibimos tu candidatura y guardaremos tu contacto."
    }
  };

  const norm = s => s.replace(/\s+/g, ' ').trim();
  let snapshot = null;
  let placeholders = null;

  function collect() {
    snapshot = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        const tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE') return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('.toolstrip, #cycler')) return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || !norm(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) snapshot.push({ node, pt: node.nodeValue });
    // Placeholders (inputs / textareas)
    placeholders = [];
    document.querySelectorAll('[placeholder]').forEach(el => {
      placeholders.push({ el, pt: el.getAttribute('placeholder') });
    });
  }

  function apply(lang) {
    if (!snapshot) collect();
    const dict = T[lang];
    snapshot.forEach(rec => {
      if (lang === 'pt' || !dict) { rec.node.nodeValue = rec.pt; return; }
      const tr = dict[norm(rec.pt)];
      if (tr != null) {
        const lead = rec.pt.match(/^\s*/)[0];
        const trail = rec.pt.match(/\s*$/)[0];
        rec.node.nodeValue = lead + tr + trail;
      } else {
        rec.node.nodeValue = rec.pt;
      }
    });
    if (placeholders) placeholders.forEach(rec => {
      if (lang === 'pt' || !dict) { rec.el.setAttribute('placeholder', rec.pt); return; }
      const tr = dict[norm(rec.pt)];
      rec.el.setAttribute('placeholder', tr != null ? tr : rec.pt);
    });
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    // notify others (e.g. hero word cycler)
    document.dispatchEvent(new CustomEvent('filka:langchange', { detail: { lang } }));
  }

  window.filkaApplyLang = apply;

  // Apply persisted language on load (nav.js injected the bar already via defer order)
  const saved = localStorage.getItem('filka-lang') || 'pt';
  if (saved !== 'pt') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => apply(saved));
    } else {
      apply(saved);
    }
  }
})();
