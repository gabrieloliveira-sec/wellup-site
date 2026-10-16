# Well Up Idiomas

Site institucional responsivo para uma escola de idiomas em São Bernardo do Campo. A página apresenta os cursos de inglês e espanhol, a escola, a metodologia, a galeria e os canais de contato.

## Funcionalidades

- Layout responsivo para desktop e dispositivos móveis.
- Navegação por seções: início, escola, cursos, metodologia, galeria e contato.
- Menu móvel com controle por teclado e atributo `aria-expanded`.
- Chamadas para contato pelo WhatsApp.
- Metadados para compartilhamento e busca, além de dados estruturados da organização.
- Imagens locais armazenadas em `assets/`.

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Como executar localmente

1. Clone ou baixe este repositório.
2. Abra um terminal dentro da pasta do projeto.
3. Inicie um servidor local:

```bash
python -m http.server 8000
```

4. Acesse `http://localhost:8000` no navegador.

Também é possível abrir `index.html` diretamente, embora um servidor local seja recomendado para testar o site.

## Arquivos principais

- `index.html` — estrutura e conteúdo da página.
- `style.css` — estilos e layout responsivo.
- `script.js` — menu móvel, animações de entrada e interações da página.
- `assets/` — imagens utilizadas no site.

## Observação

O projeto é uma página estática e não precisa de processo de build nem instalação de dependências. A fonte Inter é carregada do Google Fonts quando há conexão com a internet.