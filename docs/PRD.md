# PRD: SolOne Premium Launch V1.0

**Data:** 14/04/2026 | **Alvo:** 15/04/2026 (amanhã) | **Status:** 🚀 LAUNCH READY

---

## 1. Objetivo

Lançar uma landing page institucional premium da S.O.L One que comunique claramente os 3 pilares (Systems, Operations, Leadership) e atraia empresas/investidores.

## 2. Escopo V1.0

### Incluído ✅
- Página inicial (home) com todas as seções
- Navbar funcional e responsivo
- Hero com vídeo background
- Seções de conteúdo (Manifesto, Presença, Hub, Capacidade, Grupo)
- Footer com links
- Design premium, desktop-first
- Português brasileiro
- Build otimizado para produção

### Não Incluído ❌
- Backend/APIs
- Sistema de contato/forms
- Blog
- Multiidioma
- CMS
- Analytics avançado
- Mobile-first (mobile is secondary)

## 3. Público-Alvo

**Primário:** Empresas e investidores em busca de soluções integradas
**Secundário:** Potenciais parceiros e consultores

## 4. Requisitos Funcionais

| ID | Requisito | Prioridade | Status |
|----|-----------|-----------|--------|
| RF1 | Exibir hero com vídeo background | P0 | ✅ Done |
| RF2 | Mostrar 3 pilares (Systems, Ops, Leadership) | P0 | ✅ Done |
| RF3 | Demonstrar presença global | P0 | ✅ Done |
| RF4 | Hub/seção central de proposição | P0 | ✅ Done |
| RF5 | Listar capacidades | P0 | ✅ Done |
| RF6 | Mostrar time/grupo | P0 | ✅ Done |
| RF7 | Nav bar com scroll suave | P1 | ✅ Done |
| RF8 | Footer com links | P1 | ✅ Done |

## 5. Requisitos Não-Funcionais

| ID | Requisito | Alvo |
|----|-----------|------|
| NFR1 | Performance (LCP <2.5s) | Desktop |
| NFR2 | Acessibilidade (WCAG 2.1 AA) | Parcial em V1.0 |
| NFR3 | SEO básico | Meta tags, OG |
| NFR4 | Responsividade | Desktop-first, mobile secundário |

## 6. Arquitetura de Conteúdo

```
HOME (/)
├── Navbar
├── Hero
│   └── Call-to-action
├── Manifesto
│   └── 3 Pilares
├── Presença
│   └── Mapa/lista de regiões
├── Hub
│   └── Proposição central
├── Capacidade
│   └── Cards com soluções
├── Grupo
│   └── Team/Social
└── Footer
    └── Links
```

## 7. Critérios de Sucesso

- ✅ Site carrega em <3s (desktop)
- ✅ Sem erros de console
- ✅ Todos os links funcionam
- ✅ Animações suaves (60fps)
- ✅ Responsive até 1024px (mobile tratado como bônus)

## 8. Timeline

| Data | Milestone |
|------|-----------|
| 14/04 (hoje) | ✅ PRD + estrutura AIOX |
| 15/04 (amanhã) | 🚀 **LAUNCH** |

## 9. Decisões Técnicas

✅ **Vite** para build rápido e HMR  
✅ **React 18** + TypeScript para type-safety  
✅ **TailwindCSS** + Shadcn para componentes consistentes  
✅ **Framer Motion** para animações suaves  
✅ **Desktop-first** approach (optimizar para 1920px+)  

## 10. Riscos & Mitigações

| Risco | Mitigação |
|-------|-----------|
| Vídeo não carrega | Fallback image pronto |
| Performance em mobile | Desktop-first é OK em V1.0 |
| Bugs de última hora | Testes pre-deploy |
| SEO incompleto | Meta tags básicas suficientes |

## 11. Métricas de Sucesso (Post-Launch)

- Tempo de carregamento
- Taxa de scroll (qual % vê cada seção)
- Tempo médio em página
- Taxa de rejeição
- Conversões (mailto links, whatsapp, etc)

---

**Aprovado por:** Morgan (PM) | **Data:** 14/04/2026 | **Status:** READY
