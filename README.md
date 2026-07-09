# Filka — Website

Site institucional da Filka. HTML, CSS e JavaScript puro (sem build).

## Páginas
- `index.html` — home (hero, serviços, projetos, processo, preços, contato)
- `produtos.html`, `cases.html` — vitrine
- `projetos.html` — projetos com pré-visualização em modal
- `contato.html` — formulário de contato
- `trabalhe.html` — trabalhe conosco
- `privacidade.html` — política de privacidade
- `termos.html` — termos de uso
- `404.html` — página de erro

## Ícones
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` — gerados a partir de `brand-symmetric.png`

## Scripts / estilos
- `css/`
  - `styles.css` — estilos globais
  - `filkai.css` — botão flutuante (WhatsApp + voltar ao topo)
- `js/`
  - `nav.js` — navegação e rodapé compartilhados
  - `i18n.js` — traduções PT / EN / ES
  - `privacy-i18n.js` / `termos-i18n.js` — traduções das páginas legais
  - `plexus.js` — animação do banner
  - `projects-modal.js` — modal de pré-visualização dos projetos
  - `cookies.js` — pop-up de cookies
  - `filkai.js` — botão flutuante (WhatsApp + voltar ao topo)
- `assets/img/` — imagens e logos (otimizadas, WebP quando possível)

## Rodar localmente
Abra `index.html` no navegador, ou sirva a pasta:

```bash
python3 -m http.server
```

## Publicar no GitHub / GitHub Pages
1. Suba todos estes arquivos para um repositório.
2. Em Settings › Pages, aponte para a branch principal (raiz `/`).
3. O site fica disponível na URL do GitHub Pages.
