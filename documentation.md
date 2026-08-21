# Documentação Técnica — Portfólio Amanda Jacobino

## Visão Geral

Site de portfólio pessoal single-page desenvolvido com React 18 + TypeScript + Vite 5. Design minimalista em preto e branco com animações via Framer Motion. Publicado via Vercel.

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18.3.1 | Biblioteca de UI |
| TypeScript | 5.5.3 | Tipagem estática |
| Vite | 5.4.0 | Bundler e dev server |
| Tailwind CSS | 3.4.7 | Estilização utilitária |
| Framer Motion | 11.0.0 | Animações |
| Lucide React | 0.400.0 | Ícones |
| PostCSS + Autoprefixer | — | Processamento CSS |

---

## Estrutura de Arquivos

```
portifolio/
├── public/
│   └── images/
│       ├── photo-about.webp       # Foto da seção About
│       ├── ht-estetica.png        # Screenshot do projeto HT Estética
│       └── nathalia-studio.png    # Screenshot do projeto Natalia Studio
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── LoadingScreen.tsx
│   ├── data/
│   │   ├── projects.ts            # Dados dos projetos
│   │   └── services.ts            # Dados dos serviços
│   ├── hooks/
│   │   └── useScrollReveal.ts     # Hook de animação por scroll
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html                     # Carrega fonte Inter via Google Fonts
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Tema e Design Tokens

Definidos em `tailwind.config.ts`:

| Token | Valor | Uso |
|---|---|---|
| `background` | `#0a0a0a` | Fundo preto principal |
| `foreground` | `#f5f5f5` | Texto e elementos primários |
| `muted` | `#737373` | Texto secundário, labels |
| `accent` | `#d4d4d4` | Destaques sutis |
| `border` | `#262626` | Bordas e divisores |
| Fonte | Inter | Carregada via Google Fonts no `index.html` |

### Alternância de fundos por seção

```
Hero        → background (#0a0a0a)   preto
Projects    → bg-white               branco
Services    → bg-black               preto
About       → background (#0a0a0a)   preto
Contact     → bg-white               branco
Footer      → background (#0a0a0a)   preto
```

---

## Componentes

### Navbar (`src/components/Navbar.tsx`)

- Fixa no topo com `position: fixed` e `z-40`
- Ao rolar 20px aplica `backdrop-blur-md` + borda inferior via estado `scrolled`
- Links de navegação: Projetos · Serviços · Sobre · Contato
- Botão CTA "Orçamento" com ícone SVG do WhatsApp e cor `#25D366`
- Mobile: menu hamburger com `AnimatePresence` para animação de entrada/saída
- Animação de entrada: slide de cima com `delay: 1.8s` (sincronizado com Hero)

### Hero (`src/components/Hero.tsx`)

- Grid 2 colunas (`grid-cols-1 lg:grid-cols-2`)
- **Coluna esquerda:** subtítulo + nome em `text-9xl font-light` + dois botões com bordas arredondadas
- **Coluna direita:** lista numerada de tecnologias (`TypeScript, JavaScript, CSS, Tailwind, Python, SQL`) com linha horizontal animada, hover `whileHover={{ x: 6 }}` e texto "Role para explorar ↓"
- Animações com `staggerChildren` e `delayChildren: 1.8` — todas as entradas da página sincronizadas

### Projects (`src/components/Projects.tsx`)

- Seção branca (`bg-white`) com grid 2 colunas
- Cards com imagem `aspect-video` e efeito float no hover (`-translate-y-3`)
- Placeholder cinza quando não há imagem
- Stack exibida como badges com borda
- Links GitHub e "Ver site" sempre visíveis
- Dados em `src/data/projects.ts`

**Projetos cadastrados:**

| Projeto | Stack | Links |
|---|---|---|
| HT Estética Automotiva | React 18, TypeScript, Vite, Tailwind CSS | GitHub + live |
| Natalia Credidio Studio | TypeScript, JavaScript, CSS | GitHub |

### Services (`src/components/Services.tsx`)

- Seção preta (`bg-black`) com grid 3 colunas (`sm:grid-cols-2 lg:grid-cols-3`)
- Cards com ícone Lucide, hover na borda com `accent/30`
- Dados em `src/data/services.ts`

**Serviços cadastrados:**

| Serviço | Ícone |
|---|---|
| Automação com IA | Bot |
| Integrações de API | Plug |
| Sitemap & SEO | Map |
| Desenvolvimento Front-end | Monitor |
| Desenvolvimento Back-end | Server |
| Google Apps Script | Code2 |

### About (`src/components/About.tsx`)

- Grid 2 colunas com foto circular `w-80 h-80 rounded-full` e bio em 3 parágrafos
- Texto `text-base text-justify`
- Foto: `public/images/photo-about.webp`

### Contact (`src/components/Contact.tsx`)

- Seção branca com grid 2 colunas
- **Coluna esquerda:** heading + parágrafo justificado
- **Coluna direita:** links de contato em coluna com ícones em caixas `bg-gray-100 border border-gray-300`

**Links cadastrados:**

| Canal | Destino |
|---|---|
| LinkedIn | linkedin.com/in/amanda-jacobino |
| GitHub | github.com/AmandaJacobino |
| WhatsApp | wa.me/5515991280093 |
| E-mail | AmandaJacobino@outlook.com |

### Footer (`src/components/Footer.tsx`)

- Rodapé simples com copyright dinâmico (`new Date().getFullYear()`) e localização

---

## Hook: `useScrollReveal`

`src/hooks/useScrollReveal.ts`

Abstração sobre Framer Motion para revelar elementos ao rolar a página.

```ts
function useScrollReveal(): [React.RefObject<HTMLDivElement>, AnimationControls]
```

- Usa `useInView` com `once: true` e `margin: '-80px'` (dispara 80px antes do elemento entrar na tela)
- Quando entra na viewport, chama `controls.start('visible')`
- Cada seção define seus próprios `containerVariants` e `itemVariants`

---

## Padrão de Animação

Todas as seções (exceto Hero) seguem o mesmo padrão:

```ts
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}
```

O `ease: [0.22, 1, 0.36, 1]` é uma cubic-bezier que produz aceleração suave com desaceleração rápida (similar ao `easeOutExpo`).

---

## Comandos

```bash
npm install       # instalar dependências
npm run dev       # servidor de desenvolvimento (localhost:5173)
npm run build     # build de produção (dist/)
npm run preview   # preview do build local
npm run lint      # ESLint
```

---

## Git Workflow

- Branch `main` é protegida — nunca commitar diretamente features
- Cada feature desenvolvida em branch separada: `feat/<nome>`
- Commits em inglês, sem co-autor
- PRs abertas via GitHub web após aprovação visual
- Pull de `main` após merge de cada PR

**Branches criadas:**

| Branch | Conteúdo |
|---|---|
| `feat/navbar` | Navbar com nome completo, links e botão Orçamento |
| `feat/hero` | Seção Hero com grid, tech tags animadas e botões |
| `feat/projects` | Seção Projects com projetos reais |
| `feat/services` | Seção Services com Google Apps Script |
| `feat/about` | Seção About com bio real e foto |
| `feat/contact-updates` | Seção Contact com links reais e layout 2 colunas |
