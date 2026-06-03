# Entre Sessões

Plataforma fechada de apoio psicológico entre sessões, desenvolvida para validação com a psicóloga Larissa e pacientes adultos em Terapia Cognitivo-Comportamental (TCC).

## Visão Geral

**Entre Sessões** é um MVP navegável que permite:

- **Pacientes**: Registrar emoções, completar exercícios de TCC, acessar materiais educacionais e visualizar progresso
- **Psicóloga Larissa**: Acompanhar o progresso dos pacientes, visualizar tarefas respondidas e preparar sessões com dados reais

## Objetivo do MVP

Validar a hipótese: *"Pacientes completam pelo menos 1 tarefa terapêutica útil por semana, e isso melhora a qualidade da sessão."*

## Stack Técnico

- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript
- **Estilos**: Tailwind CSS
- **Ícones**: Lucide React
- **Dados**: Mockados em TypeScript (sem banco de dados)
- **Autenticação**: Não implementada (MVP)
- **APIs Externas**: Nenhuma

## Como Rodar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Acessar no navegador
# http://localhost:3000
```

### Build e Produção

```bash
# Fazer build
npm run build

# Rodar em produção
npm run start

# Lint (verificar código)
npm run lint
```

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx              # Layout raiz
│   ├── globals.css             # Estilos globais
│   ├── page.tsx                # Landing page (/)
│   ├── paciente/
│   │   ├── layout.tsx          # Layout paciente
│   │   ├── page.tsx            # Dashboard paciente (/paciente)
│   │   ├── check-in/page.tsx   # Check-in emocional
│   │   ├── tarefa/page.tsx     # Tarefa da semana
│   │   ├── registro/page.tsx   # Registro livre
│   │   ├── materiais/page.tsx  # Materiais educacionais
│   │   └── progresso/page.tsx  # Progresso visual
│   └── psicologa/
│       ├── layout.tsx          # Layout psicóloga
│       ├── page.tsx            # Dashboard psicóloga (/psicologa)
│       ├── pacientes/[id]/page.tsx  # Detalhe do paciente
│       └── nova-tarefa/page.tsx     # Enviar nova tarefa
├── components/
│   ├── Button.tsx              # Componente botão reutilizável
│   ├── Card.tsx                # Componentes de card
│   ├── Input.tsx               # Inputs, textarea, select
│   ├── Navigation.tsx          # Barra de navegação
│   ├── DisclaimerBanner.tsx    # Aviso de não substituição
│   └── SuccessBanner.tsx       # Banner de sucesso
├── lib/
│   └── mock-data.ts            # Dados fictícios (pacientes, tarefas, check-ins)
└── types/
    └── index.ts                # Interfaces TypeScript
```

## Decisões de UX

### Design e Hierarquia Visual

1. **DisclaimerBanner Discreto**: Versão compacta no dashboard (não assusta), versão completa apenas na landing page
2. **Dashboard Paciente Reordenado**: 
   - Próxima sessão em destaque (card destacado com cor azul)
   - Tarefa da semana em segundo destaque (borda espessa, fundo verde)
   - Outras opções em grid compacto (2-3 colunas)
3. **Dashboard Psicóloga Responsivo**:
   - KPIs em 2x2 em tablet, 1x4 em desktop
   - Tabela responsiva: desktop com tabela cheia, mobile com cards compactos
   - Alerta de "atenção necessária" integrado aos KPIs (não separado)
4. **Resumo Clínico em Destaque**: Prioridade máxima na página de detalhe do paciente (cor azul, borda esquerda)

### Linguagem e Tom

1. **Retirado "Dashboard"**: Substituído por "Seu espaço" (paciente) e "Seu espaço com os pacientes" (psicóloga)
2. **Retirado "Acompanhamento"**: Substituído por "Para preparar a sessão" (psicóloga)
3. **Mais acolhedor**: "Como você está se sentindo?" vs "Registre seu estado emocional"
4. **Avisos éticos discretos**: Usam tom amigável, cores azuis (não âmbar/vermelho), e são informativos, não assustadores

### Responsividade Mobile

1. **Grid de Cards**: 3 colunas → 2 em tablet → 1 em mobile
2. **Tabela → Cards**: Desktop mostra tabela completa, mobile mostra cards com informações essenciais
3. **Inputs Menores**: Texto reduzido, padding reduzido em mobile para melhor toque
4. **Disclaimer/Avisos**: Compactos em mobile, completos em desktop

### Estados Visuais

1. **SuccessBanner**: Aumentado de 3s para 5s (mais tempo para ler)
2. **Estados Vazios**: Cards mostram "—" ou "Nenhum/Nenhuma" de forma clara
3. **Alertas de Atenção**: Pacientes com ansiedade ≥8 têm borda vermelha e fundo rosa na tabela/lista

### Acesso Rápido

1. **Próxima Sessão com Botão de Check-in**: Direciona paciente para a ação mais importante
2. **Tarefa Destacada**: Paciente vê primeira coisa qual é a tarefa desta semana
3. **Dashboard Psicóloga Útil**: KPIs + Resumo Clínico = tudo que precisa para preparar sessão em 5 minutos

## Rotas Principais

### Para Pacientes

| Rota | Descrição |
|------|-----------|
| `/` | Landing page |
| `/paciente` | Dashboard do paciente |
| `/paciente/check-in` | Registrar emoções (humor, ansiedade, energia, sono) |
| `/paciente/tarefa` | Responder exercício da semana (TCC) |
| `/paciente/registro` | Registrar situações importantes |
| `/paciente/materiais` | Acessar materiais educacionais |
| `/paciente/progresso` | Visualizar tendências (gráficos simples) |

### Para Psicóloga

| Rota | Descrição |
|------|-----------|
| `/psicologa` | Dashboard com KPIs e lista de pacientes |
| `/psicologa/pacientes/[id]` | Detalhes de um paciente (check-ins, tarefas, resumo clínico) |
| `/psicologa/nova-tarefa` | Enviar novo exercício para um paciente |

## O que Está Mockado

- ✅ 5 pacientes fictícios com dados realistas
- ✅ Check-ins emocionais (humor, ansiedade, energia, sono, emoção)
- ✅ Tarefas de TCC (registro de pensamento automático, ativação comportamental, etc.)
- ✅ Registros de pensamento (livres)
- ✅ 5 materiais educacionais (texto, áudio, exercício, PDF)
- ✅ Anotações clínicas automáticas por paciente
- ✅ Progresso visual com gráficos simples
- ✅ Formulários com estado de sucesso

## O que NÃO Está Implementado

- ❌ Banco de dados real (tudo em memória)
- ❌ Autenticação (acesso direto aos dashboards)
- ❌ Persistência de dados (ao recarregar a página, dados voltam)
- ❌ Envio de e-mails ou notificações
- ❌ Integração com agenda / calendário
- ❌ Chatbot ou IA terapêutica
- ❌ Comunidade entre pacientes
- ❌ Cobrança ou pagamento
- ❌ APIs externas

## Avisos Clínicos e Éticos

A plataforma exibe avisos em pontos estratégicos:

1. **Landing page**: "Esta plataforma é uma ferramenta de apoio e não substitui psicoterapia. Em caso de emergência, procure atendimento de emergência."

2. **Dashboard do paciente**: Aviso repetido para reforço

3. **Progresso**: "Esses dados ajudam a observar padrões, mas não representam diagnóstico."

4. **Dashboard da psicóloga**: "Resumo visual de apoio. A interpretação clínica deve ser feita pela psicóloga."

## Dados Fictícios Inclusos

### Pacientes
- Ana Souza (id: patient-1) — paciente principal navegável
- Marcos Lima, Juliana Prado, Fernanda Alves, Roberto Martins

### Check-ins de Exemplo
- Datas: 2026-06-02, 2026-05-29, 2026-05-26, etc.
- Escalas: humor (0-10), ansiedade (0-10), energia (0-10)
- Emoções: ansiedade, tristeza, raiva, culpa, alegria, cansaço, esperança

### Tarefas de Exemplo
- Registro de Pensamento Automático (pending)
- Ativação Comportamental (pending)
- Plano de Enfrentamento (pending)
- Prevenção de Recaída (completed)
- Diário Emocional (pending)

### Materiais
1. Entendendo Pensamentos Automáticos (texto)
2. Como Funciona a Ansiedade (texto)
3. O Ciclo Pensamento–Emoção–Comportamento (texto)
4. Técnicas de Respiração (exercício)
5. Prevenção de Recaída (texto)

## Próximos Passos para Produção

Antes de levar para produção, é **crítico** implementar:

### 1. **Segurança e Conformidade**
- [ ] Autenticação real (OAuth, JWT ou similar)
- [ ] Controle de acesso por perfil (paciente só vê seus dados, psicóloga só seus pacientes)
- [ ] Criptografia de dados em trânsito (HTTPS obrigatório)
- [ ] Criptografia de dados em repouso (senhas, dados sensíveis)
- [ ] Conformidade LGPD (Lei Geral de Proteção de Dados):
  - Consentimento informado explícito
  - Direito de acesso, retificação, exclusão
  - Política de privacidade transparente
  - Data Retention Policy (quanto tempo manter dados)

### 2. **Banco de Dados**
- [ ] Banco de dados real (PostgreSQL, MongoDB, etc.)
- [ ] Migrations e versionamento de schema
- [ ] Backups automáticos
- [ ] Logs de acesso (audit trail)

### 3. **Validação Clínica**
- [ ] Revisão dos exercícios e materiais por psicólogo sênior
- [ ] Protocolo para situações de crise (risco de autoagressão)
- [ ] Integração com serviços de emergência / hotlines
- [ ] Disclaimer jurídico sobre não substituição de psicoterapia
- [ ] Consentimento informado do paciente

### 4. **Monitoramento e Observabilidade**
- [ ] Logs estruturados
- [ ] Monitoramento de performance (Sentry, DataDog, etc.)
- [ ] Alertas para comportamentos anormais
- [ ] Analytics (sem coletar dados pessoais)

### 5. **Testes**
- [ ] Testes unitários (componentes, funções)
- [ ] Testes de integração (fluxos completos)
- [ ] Testes de segurança (OWASP Top 10)
- [ ] Teste de usabilidade com pacientes reais

### 6. **Infraestrutura**
- [ ] Deploy em produção (Vercel, AWS, Google Cloud, etc.)
- [ ] CI/CD pipeline
- [ ] Gestão de versões e rollback
- [ ] Escalabilidade (suportar crescimento)

## Roteiro de Demonstração (10 minutos com Larissa)

### Fluxo 1: Experiência do Paciente (5 min)

1. **Landing Page** (30s)
   - Mostrar o design acolhedor
   - Ler os avisos sobre não substituição de psicoterapia

2. **Dashboard do Paciente** (2 min)
   - Saudação personalizada ("Olá, Ana")
   - Cards de ações rápidas (check-in, tarefa, materiais, etc.)
   - Resumo da semana com últimos check-ins
   - Visualização do humor da semana

3. **Check-in Emocional** (1 min)
   - Preencher um check-in de teste
   - Mostrar as escalas (humor, ansiedade, energia)
   - Enviar e visualizar mensagem de sucesso

4. **Tarefa da Semana** (1 min)
   - Mostrar tarefa pendente com instruções
   - Explicar o exercício de Registro de Pensamento Automático
   - (Opcional) Responder parcialmente para mostrar o fluxo

### Fluxo 2: Experiência da Psicóloga (5 min)

1. **Dashboard da Psicóloga** (2 min)
   - KPIs: pacientes ativos, tarefas pendentes, check-ins da semana
   - Atenção necessária (pacientes com ansiedade alta)
   - Tabela de pacientes com status rápido

2. **Detalhe do Paciente** (2 min)
   - Selecionar Ana Souza
   - Mostrar: últimos check-ins, tarefas respondidas, resumo clínico
   - Interpretar os dados (padrão de ansiedade em situações de cobrança)

3. **Enviar Nova Tarefa** (1 min)
   - Demonstrar como enviar um exercício personalizado
   - Mostrar que a tarefa chegaria ao paciente

### Perguntas e Feedback (5 min extra, se houver)

- "Como você usaria os dados de um paciente para preparar uma sessão?"
- "Que informações faltam?"
- "O visual é acolhedor? Infantil demais? Muito clínico?"
- "Quais tipos de tarefas você mais gostaria de enviar?"

## Notas Técnicas

### Performance
- Página carrega em < 2s
- Sem chamadas de API reais
- Dados mockados em memória

### Acessibilidade
- Contraste de cores (WCAG AA)
- Labels associados aos inputs
- Navegação por teclado funcional

### Responsividade
- Design mobile-first
- Testado em telas de 375px a 1280px
- Formulários otimizados para toque

## Como Contribuir Melhorias

1. Clone ou faça fork do repositório
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Implemente a melhoria
4. Teste localmente (`npm run dev`)
5. Faça commit (`git commit -m "Add: descrição"`)
6. Push e abra um Pull Request

## Licença

Uso interno — Larissa e pacientes selecionados.

---

**Desenvolvido como MVP para validação clínica e UX.**

Dúvidas? Abra uma issue ou entre em contato com o desenvolvimento.
