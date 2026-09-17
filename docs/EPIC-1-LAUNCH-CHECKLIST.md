# EPIC-1: SolOne Premium Launch V1.0

> **Status:** 🚀 LAUNCH READY (15/04/2026)
> **Epic ID:** SOLONE-EPIC-001
> **PM:** Morgan
> **Target:** Companies & Investors

---

## Visão

Estabelecer presença online institucional premium da S.O.L One, comunicando os 3 pilares (Systems, Operations, Leadership) e atraindo potenciais parceiros/investidores.

## Escopo

### Stories Críticas (P0)

#### Story 1.1: Configurar estrutura base
- [ ] Verificar build Vite
- [ ] Confirmar dependências instaladas
- [ ] Testar hot reload em desenvolvimento
- [ ] Validar TypeScript types
- **AC:** `npm run dev` funciona sem erros

#### Story 1.2: Otimizar Hero Section
- [ ] Verificar vídeo background carrega
- [ ] Validar fallback image
- [ ] Testar animações (60fps)
- [ ] Confirm CTA visível e clicável
- **AC:** Hero render em <1s no desktop

#### Story 1.3: Validar todas as seções (Manifesto, Presença, Hub, Capacidade, Grupo)
- [ ] Testar texto responsivo
- [ ] Verificar imagens/ícones exibem
- [ ] Confirmar animações suaves
- [ ] Check acessibilidade básica
- **AC:** Todas seções renderizam sem erro

#### Story 1.4: Verificar Navbar & Footer
- [ ] Navbar sticky funciona
- [ ] Links não-quebrados
- [ ] Footer com conteúdo correto
- [ ] Dark mode opcional
- **AC:** Nav e footer funcionam em todos os pages

#### Story 1.5: Performance & SEO Pre-Launch
- [ ] LightHouse Score >75
- [ ] Meta tags (title, description, OG)
- [ ] Favicon correto
- [ ] Redirects 404 funcionam
- **AC:** `npm run build` gera `dist/` pronto para produção

#### Story 1.6: Test & QA Gate
- [ ] Lint sem erros: `npm run lint` ✅
- [ ] Testes: `npm test` ✅ ou aceitável para V1.0
- [ ] Build prod: `npm run build` ✅
- [ ] Manual testing em Chrome, Firefox, Safari
- **AC:** Site ready para deploy

---

### Stories Secundárias (P1 - Post-Launch)

#### Story 2.1: Analytics Basic (V1.1)
- Google Analytics setup
- Event tracking (CTAs, scroll depth)

#### Story 2.2: Blog/News Section (V2.0)
- CMS integração
- Article templates

#### Story 2.3: Multilanguage (V2.0+)
- i18n setup
- English + Spanish

---

## Checklist de Qualidade (AIOX Quality Gate)

- [ ] **Linting:** `npm run lint` passa
- [ ] **Type-checking:** `npm run typecheck` passa
- [ ] **Build:** `npm run build` sem warnings
- [ ] **Manual Test:** Browser testing (Desktop)
- [ ] **Performance:** LightHouse >70
- [ ] **Acessibilidade:** Teclado navega, sem ARIA errors
- [ ] **SEO:** Meta tags presentes
- [ ] **BR Env:** Apenas português-BR funciona OK

---

## Dependências

- ✅ Node.js 18+
- ✅ npm (ou bun)
- ✅ Vite (já instalado)
- ✅ TypeScript (já instalado)
- ✅ Todos componentes Shadcn (já cadastrados)

---

## Decisões Arquiteturais

1. **Desktop-first:** Foco em 1920px+, mobile é suportado mas não prioritário
2. **SPA:** React Router para future expansion (v2.0)
3. **Styling:** TailwindCSS + Shadcn (system único)
4. **Videos:** Armazenados em `/public`, não CDN em V1.0

---

## Risks & Contingencies

| Risco | Severidade | Mitigação |
|-------|-----------|-----------|
| Vídeo não carrega | 🟠 Med | Fallback image pronto |
| Performance ruim | 🟠 Med | Lazy load + optimize |
| SEO incompleto | 🟡 Low | Meta tags básicas OK |
| Bugs em mobile | 🟡 Low | Desktop-first is spec |

---

## Success Criteria

✅ Site live e acessível  
✅ Sem console errors  
✅ <3s load time desktop  
✅ Todas seções renderizam  
✅ Links funcionam  

---

**Epic Owner:** Morgan (PM) | **Created:** 14/04/2026 | **Target:** 15/04/2026
