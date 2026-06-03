# Design Review - Entre Sessões

**Data**: 2026-06-03  
**Revisão**: Design Product Senior + Frontend Engineer

## 📊 Resumo das Mudanças

Revisão de UX/Design focada em **hierarquia visual**, **responsividade mobile**, **linguagem acolhedora** e **redução de fricção**.

---

## 🎯 Problemas Identificados & Soluções

### 1️⃣ Disclaimer Banner - "Assusta" Usuários
**Problema**: Banner âmbar/vermelho pesado no topo toda vez  
**Solução**: 
- Versão `compact`: azul claro, 1 linha, apenas no dashboard
- Versão `full`: completa com 4 pontos positivos, apenas na landing page
- Tom amigável, não alarmista

**Arquivos**: `DisclaimerBanner.tsx`, `page.tsx` (landing), `paciente/page.tsx`

---

### 2️⃣ Dashboard Paciente - Falta Hierarquia
**Problema**: 6 cards em grid, nenhum em destaque  
**Solução**:
- ✅ Card "Próxima Sessão" em **destaque azul** no topo (informação crítica)
- ✅ Card "Tarefa da Semana" em **destaque verde** com borda espessa (CTA)
- ✅ Outras opções em grid **2-3 colunas** menor (ações secundárias)

**Resultado**: Paciente vê imediatamente próxima sessão + tarefa pendente

**Arquivos**: `paciente/page.tsx`

---

### 3️⃣ Dashboard Psicóloga - Tabela Não Responsiva
**Problema**: Tabela desaparece em mobile, 4 KPIs em 1 linha quebra em tablet  
**Solução**:
- ✅ KPIs em **2x2 responsivo** (1x4 desktop, 2x2 tablet, stack mobile)
- ✅ Tabela em desktop, **cards compactos em mobile** com métricas essenciais
- ✅ Alerta "atenção necessária" integrado aos KPIs

**Resultado**: Dashboard funciona perfeitamente em todos os tamanhos

**Arquivos**: `psicologa/page.tsx`

---

### 4️⃣ Página de Detalhe do Paciente - Resumo Clínico Perdido
**Problema**: Resumo clínico abaixo de vários cards, sem destaque  
**Solução**:
- ✅ **Resumo Clínico em primeiro lugar**, fundo azul, borda esquerda
- ✅ Stats rápidas em grid de 3 colunas (check-ins, tarefas, humor)
- ✅ Texto descritivo: "Para preparar a próxima sessão"

**Resultado**: Psicóloga vê imediatamente o contexto clínico sem rolar

**Arquivos**: `psicologa/pacientes/[id]/page.tsx`

---

### 5️⃣ Linguagem Técnica Demais
**Problema**: "Dashboard", "Acompanhamento", "Registre seu estado emocional"  
**Solução**:
- ✅ "Dashboard" → "Seu espaço" (paciente), "Seu espaço com os pacientes" (psicóloga)
- ✅ "Acompanhamento" → "Para preparar a sessão"
- ✅ "Registre..." → "Como você está se sentindo?"
- ✅ Tons mais acolhedores e menos técnicos

**Arquivos**: `page.tsx` (dashboard paciente), `psicologa/page.tsx`

---

### 6️⃣ SuccessBanner Desaparece Muito Rápido
**Problema**: Desaparecia em 3 segundos, muito rápido para ler  
**Solução**:
- ✅ Aumentado para **5 segundos**
- ✅ Design compactado (sem grande ícone redondo)
- ✅ Borda esquerda verde clara para destaque visual

**Arquivos**: `SuccessBanner.tsx`, `check-in/page.tsx`, `tarefa/page.tsx`, `registro/page.tsx`, `nova-tarefa/page.tsx`

---

### 7️⃣ Avisos Éticos Discretos Mas Presentes
**Problema**: Avisos importantes, mas visuais pesados  
**Solução**:
- ✅ Usar **azul (confiança)** em vez de âmbar/vermelho (alerta)
- ✅ Tom informativo, não assustador
- ✅ Coloca-los **discretamente no formulário** quando relevante

**Exemplo**: Check-in recebe aviso azul: "Seus dados são privados e usados apenas para conversa com Larissa"

**Arquivos**: `check-in/page.tsx`, `DisclaimerBanner.tsx`

---

### 8️⃣ Responsividade Mobile Inadequada
**Problema**: Cards em 3 colunas quebram, inputs muitos largos, tabela invisível  
**Solução**:
- ✅ Grid responsivo: **3 → 2 → 1 coluna** conforme viewport
- ✅ Inputs **menores em mobile**: `py-2` e `px-3` vs `py-3` e `px-4`
- ✅ Tabela → Cards em mobile com informações compactadas
- ✅ Disclaimer compacto em mobile (1 linha vs 4 linhas)

**Arquivos**: `Input.tsx`, `paciente/page.tsx`, `psicologa/page.tsx`, `DisclaimerBanner.tsx`

---

## 📝 Arquivos Alterados

```
✅ src/components/DisclaimerBanner.tsx        (novo variant system)
✅ src/components/Input.tsx                   (helper text, mobile sizing)
✅ src/components/SuccessBanner.tsx           (design simplificado)
✅ src/app/paciente/page.tsx                  (hierarquia reordenada)
✅ src/app/paciente/check-in/page.tsx         (timeout 5s, aviso ético)
✅ src/app/paciente/tarefa/page.tsx           (timeout 5s)
✅ src/app/paciente/registro/page.tsx         (timeout 5s)
✅ src/app/psicologa/page.tsx                 (KPIs responsivos, tabela responsiva)
✅ src/app/psicologa/nova-tarefa/page.tsx     (timeout 5s)
✅ src/app/psicologa/pacientes/[id]/page.tsx  (resumo clínico em destaque)
✅ src/app/page.tsx                           (DisclaimerBanner variant=full)
✅ README.md                                   (seção "Decisões de UX")
```

**Total**: 12 arquivos alterados, 0 arquivos novos, 0 arquivos deletados

---

## 🎨 Paleta de Cores - Uso Otimizado

| Cor | Uso | Antes | Depois |
|-----|-----|-------|--------|
| **Azul (Sky)** | Ações primárias, próxima sessão, avisos informativos | Neutro | Destaque confiável |
| **Verde (Emerald)** | Sucesso, tarefas concluídas, tarefa destacada | Cards sem destaque | Ação incentivada |
| **Vermelho (Red)** | ⚠️ **RETIRADO** de disclaimers | Usado em aviso "assustador" | Apenas para alertas reais (ansiedade ≥8) |
| **Âmbar (Amber)** | ⚠️ **RETIRADO** de disclaimers | Usado em aviso | Apenas para tarefas pendentes |
| **Cinza (Slate)** | Textos, fundos neutros, secundário | Predominante | Suporte |

---

## 📱 Responsividade - Breakpoints

| Dispositivo | Behavior |
|-------------|----------|
| **Mobile (<640px)** | Stack vertical, cards compactos, disclaimer 1 linha, tabela → cards |
| **Tablet (640px-1024px)** | 2 colunas, KPIs 2x2, tabela visível |
| **Desktop (>1024px)** | 3+ colunas, KPIs 1x4, tabela completa |

---

## ✨ Melhorias de UX - Antes vs Depois

| Aspecto | Antes | Depois |
|---------|-------|--------|
| **Próxima Sessão** | Card 6/6 em grid | Card destacado no topo |
| **Tarefa da Semana** | Card 2/6 em grid | Card destacado, 2º lugar |
| **Resumo Clínico** | Abaixo de 3 cards | Primeiro lugar, em destaque |
| **Mobile Dashboard** | Cards quebram, difícil ler | Responsivo, legível |
| **Tabela Pacientes** | Desaparece em mobile | Cards compactos, legível |
| **Disclaimer** | Assustador (âmbar/vermelho) | Informativo (azul) |
| **SuccessBanner** | 3s (rápido) | 5s (legível) |
| **Linguagem** | Técnica ("Dashboard") | Amigável ("Seu espaço") |

---

## 🚀 Próximos Passos (Não Implementados)

1. **Animações**: Micro-interactions ao responder formulários
2. **Loading States**: Esqueletos durante carregamento
3. **Modo Escuro**: CSS variables para dark mode
4. **Accessibility**: ARIA labels, keyboard navigation
5. **Dados Persistentes**: LocalStorage para não perder dados ao recarregar
6. **Toast Notifications**: Notificações flutuantes para ações

---

## ✅ Validação

- [x] Sem backend novo
- [x] Sem banco de dados novo
- [x] Sem autenticação real
- [x] Sem IA/Chatbot
- [x] Sem pagamento
- [x] Sem comunidade
- [x] MVP navegável mantido
- [x] Hierarquia visual clara
- [x] Responsividade mobile
- [x] Linguagem acolhedora
- [x] Avisos éticos discretos
- [x] Nenhuma promessa clínica

---

**Revisão concluída**: Pronto para teste com Larissa e pacientes! 🎉
