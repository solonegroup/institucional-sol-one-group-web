# SolOne Premium Launch

Landing page institucional da S.O.L One | direcionada para empresas e investidores.

## 📋 Visão Geral

**S.O.L One** é uma plataforma que oferece soluções de Systems, Operations e Leadership. Esta landing page apresenta os pilares, manifesto, presença global e capacidades da empresa.

### Escopo V1.0
- ✅ Página inicial (home) com seções principais
- ✅ Navbar responsivo e funcional
- ✅ Hero com vídeo background
- ✅ Seções: Manifesto, Presença, Hub, Capacidade, Grupo
- ✅ Footer com links
- ✅ Design premium desktop-first
- ✅ Português brasileiro

### Futuras versões (V2.0+)
- Páginas de detalhamento (Serviços, Sobre, Case Studies, etc.)
- Sistema de blog/recursos
- Integração com CRM (leads)
- Multiidioma
- Dark mode

## 🚀 Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS + Shadcn UI + Radix UI
- **Animations**: Framer Motion
- **Data**: React Query
- **Testing**: Vitest + Playwright
- **Dev Tools**: ESLint, Prettier

## 📦 Setup Local

```bash
# Instalar dependências
npm install
# ou
bun install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Testes
npm test
npm run test:watch

# Linting
npm run lint
```

## 🗂️ Estrutura

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Hero.tsx     # Seção hero com vídeo
│   ├── Manifesto.tsx # Pilares (Systems, Operations, Leadership)
│   ├── Presenca.tsx  # Presença global
│   ├── Hub.tsx       # Hub/Centro
│   ├── Capacidade.tsx # Capacidades
│   ├── Grupo.tsx     # Time/Grupo
│   ├── Footer.tsx    # Footer
│   ├── Navbar.tsx    # Navegação
│   └── ui/           # Componentes base (Shadcn)
├── pages/            # Pages/Rotas
│   ├── Index.tsx     # Home
│   └── NotFound.tsx  # 404
├── hooks/            # Custom hooks
├── lib/              # Utilities
├── assets/           # Imagens, vídeos
└── test/             # Testes
```

## 🎯 Roadmap

| Versão | Status | Data |
|--------|--------|------|
| V1.0 | 🚀 **LAUNCH** | 15/04/2026 |
| V2.0 | 📋 Planejamento | Q2 2026 |
| V3.0 | 🔮 Visão | Q3 2026 |

## 👥 Target Audience

- Empresas em busca de soluções integradas
- Investidores e stakeholders
- C-level executives

## 📱 Responsividade

- **Desktop-first** (foco em 1920px+)
- Mobile considerado, mas não prioritário em V1.0

## 🔧 Deployment

- Build: `npm run build`
- Output: `dist/`

## 📝 Notas

- Sem integração de backend em V1.0
- Sem sistema de comentários ou contatos (por enquanto)
- Foco em apresentação visual premium

## 🤝 Contribuindo

Siga a estructura AIOX:
- Use `@dev`, `@architect`, `@qa` para desenvolvimento
- Crie stories em `docs/stories/`
- Execute `npm run lint` antes de commits
- Siga conventional commits

---

**Última atualização:** 14/04/2026  
**Versão:** 1.0 (Launch Ready)
