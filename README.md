# MiniProj1 – Currículo de Joshua Alves

Single Page Application com o meu currículo, feita para a unidade curricular de Programação Web Avançada (Universidade Aberta). Usa Vue 3, TypeScript e Vite.

Repositório: https://github.com/jsalves7/MiniProj1

## Requisitos

- [Node.js](https://nodejs.org) 20 ou superior (testado com 20.12)
- npm (já vem com o Node.js)

Para confirmar: `node -v` e `npm -v`.

## Como correr

```bash
git clone https://github.com/jsalves7/MiniProj1.git
cd MiniProj1
npm install
npm run dev
```

Abre o endereço que aparecer no terminal, normalmente <http://localhost:5173>. A página atualiza sozinha quando se altera o código. Para parar, carrega em `Ctrl + C`.

## Abrir sem servidor (ficheiro único)

```bash
npm run build
```

Isto cria `dist/index.html`, um único ficheiro com o JavaScript, o CSS e a fotografia lá dentro. Basta abri-lo no navegador (duplo clique ou `open dist/index.html` no macOS). Funciona sem internet.

Para ver a versão final num servidor local: `npm run preview` e abrir <http://localhost:4173>.

## Comandos

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Verifica os tipos e gera `dist/index.html` |
| `npm run preview` | Serve o resultado do build |
| `npm test` | Corre os testes (Vitest) |

## Estrutura

```
index.html            ponto de entrada
src/
  main.ts             arranque da aplicação
  App.vue             junta o cabeçalho, as secções e o rodapé
  data.ts             todo o conteúdo do currículo
  types.ts            tipos TypeScript do conteúdo
  icons.ts            ícones SVG (sem dependências externas)
  styles.css          estilos
  components/         cabeçalho, secções, acordeão, rodapé
  assets/             fotografia e wireframes.pdf
tests/data.test.ts    testes ao conteúdo
```

Para mudar o texto, a fotografia ou as ligações, basta editar `src/data.ts` (e substituir `src/assets/joshua_alves.jpeg`).

## Secções

- **Quem Sou Eu?**: resumo, pontos fortes, línguas e formação.
- **O que faço?**: cargo atual, experiência anterior (acordeão) e competências.
- **Hobbies**: desporto, fotografia, motociclismo e amigos.
- Rodapé com ícones para GitHub, Facebook, Instagram, LinkedIn, WhatsApp e e-mail.

## Problemas comuns

- **`npm: command not found`**: falta instalar o Node.js.
- **Porta 5173 ocupada**: o Vite escolhe outra e mostra-a no terminal.
- **`npm audit` mostra avisos**: são de ferramentas de desenvolvimento (Vitest) e não afetam a página. A correção pede Node 22.
