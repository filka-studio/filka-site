# Filka — Website

Site institucional da Filka. HTML, CSS e JavaScript puro (sem build).

## Estrutura
- `index.html` — home
- `produtos.html`, `projetos.html`, `cases.html`, `sobre.html`, `contato.html`, `404.html`
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` — ícones do site
- `css/`
  - `styles.css` — estilos globais
  - `filkai.css` — estilos do assistente
- `js/`
  - `nav.js` — navegação e rodapé compartilhados
  - `i18n.js` — traduções PT / EN / ES
  - `plexus.js` — animação do banner
  - `cursor.js` — cursor circular
  - `cookies.js` — pop-up de cookies
  - `filkai.js` — assistente
- `assets/img/` — imagens e logos (otimizadas, WebP quando possível)

## Rodar localmente
Abra `index.html` no navegador, ou sirva a pasta:

```bash
python3 -m http.server
```

## Publicar no GitHub Pages
Suba estes arquivos para um repositório e ative o GitHub Pages apontando para a branch principal (raiz).
