# 👋 Entre Sessões - Para Larissa

Bem-vinda ao **Entre Sessões**, uma plataforma de apoio psicológico entre sessões desenvolvida especificamente para você e seus pacientes adultos.

---

## 🌐 Acesse Agora

### 🏠 Home (Informações)
```
https://entre-sessoes.vercel.app
```

### 👤 Seu Dashboard (Psicóloga)
```
https://entre-sessoes.vercel.app/psicologa
```

Aqui você verá:
- KPIs: Pacientes ativos, tarefas pendentes, check-ins da semana
- Lista de pacientes com status emocional
- Alerta para quem precisa de atenção

### 📋 Detalhe de Cada Paciente
```
https://entre-sessoes.vercel.app/psicologa/pacientes/patient-1
```

Aqui você encontra:
- Resumo clínico da semana
- Últimos check-ins (emoções registradas)
- Tarefas respondidas
- Dados para preparar a sessão

---

## 👥 Acessar como Paciente (Demonstração)

### 🏠 Dashboard do Paciente (Ana)
```
https://entre-sessoes.vercel.app/paciente
```

Aqui o paciente vê:
- Próxima sessão em destaque
- Tarefa da semana
- Ações rápidas (check-in, registros, materiais)

### ✅ Fazer Check-in
```
https://entre-sessoes.vercel.app/paciente/check-in
```

Paciente registra:
- Humor (escala 0-10)
- Ansiedade (escala 0-10)
- Energia (escala 0-10)
- Qualidade do sono
- Emoção predominante
- Notas livres

### 📝 Responder Tarefa TCC
```
https://entre-sessoes.vercel.app/paciente/tarefa
```

Estrutura: Registro de Pensamento Automático
1. Qual foi a situação?
2. Que emoção apareceu?
3. Que pensamento passou?
4. Evidências a favor e contra
5. Pensamento alternativo
6. Ação que pode tomar

### 📚 Materiais Educacionais
```
https://entre-sessoes.vercel.app/paciente/materiais
```

Inclui:
- Entendendo pensamentos automáticos
- Como funciona a ansiedade
- O ciclo pensamento-emoção-comportamento
- Técnicas de respiração
- Prevenção de recaída

---

## 🎯 Como Usar

### 1️⃣ Primeira Visita
- Acesse `/psicologa` para ver o dashboard
- Veja a lista de pacientes (dados fictícios para demo)
- Clique em um paciente para ver detalhes

### 2️⃣ Preparar Sessão (5 minutos)
- Vá para `/psicologa/pacientes/[id]`
- Leia o **resumo clínico** da semana
- Veja os **check-ins** recentes
- Observe **tarefas respondidas**
- Use para preparar a sessão

### 3️⃣ Enviar Tarefa
- Vá para `/psicologa/nova-tarefa`
- Escolha um paciente
- Selecione tipo de exercício (5 tipos de TCC)
- Adicione instrução personalizada
- Define prazo
- Clique em "Enviar"

### 4️⃣ Ver Resposta
- O paciente acessa `/paciente/tarefa`
- Completa o formulário
- Você vê a resposta em `/psicologa/pacientes/[id]`

---

## 📊 O que Você Verá no Dashboard

### KPIs (Topo)
```
┌─────────────────────────────────────────┐
│ Pacientes: 5  │ Tarefas: 3  │ Check-ins: 4  │
└─────────────────────────────────────────┘
```

### Tabela de Pacientes
| Nome | Último Check-in | Tarefa | Humor | Ansiedade |
|------|---|---|---|---|
| Ana Souza | 02/06 | ✓ Pendente | 6 | 7 |
| Marcos Lima | 01/06 | — | 8 | 3 |
| ... | ... | ... | ... | ... |

Clique em **"Ver"** para detalhes de cada paciente.

---

## 🔐 Informações Importantes

### ⚠️ Avisos Éticos
- "Esta plataforma é ferramenta de apoio e não substitui psicoterapia"
- "Em caso de emergência, procure atendimento imediatamente"
- Estes avisos aparecem em locais estratégicos

### 📝 Dados são Fictícios (MVP)
- 5 pacientes fictícios (Ana, Marcos, Juliana, Fernanda, Roberto)
- Check-ins de demonstração
- Tarefas respondidas de exemplo
- Nenhum dado real armazenado

### 🔄 Próximas Fases
- Fase 1 (Agora): Validar fluxo e UX com você
- Fase 2: Feedback de 2-3 pacientes reais
- Fase 3: Backend real (autenticação + banco de dados)
- Fase 4: Produção com LGPD compliance

---

## 💡 Recursos Principais

### ✨ Design
- **Premium e acolhedor**: Tons azuis e verdes
- **Responsivo**: Funciona perfeitamente em mobile
- **Claro**: Hierarquia visual bem definida
- **Rápido**: Sem latência, tudo local

### 🎯 Funcionalidades
- Check-in emocional com escalas
- Tarefas TCC estruturadas
- Registro livre de pensamentos
- Materiais educacionais
- Progresso com gráficos
- Resumo clínico automático

### 🛡️ Segurança
- Sem exposição de dados reais
- Avisos claros sobre limitações
- Dados mockados (não persistem)
- Interface segura para validação

---

## 📞 Feedback

Após testar, gostaríamos saber:

### 🎨 Design
- [ ] Interface é acolhedora?
- [ ] Cores e layout agradáveis?
- [ ] Funciona bem no mobile?

### 🧭 Navegação
- [ ] Fluxo é intuitivo?
- [ ] Encontra tudo facilmente?
- [ ] Menos cliques seria melhor?

### 📋 Funcionalidades
- [ ] Check-in atende necessidade?
- [ ] Tarefas TCC fazem sentido?
- [ ] Materiais são úteis?
- [ ] Falta algo importante?

### 🎓 Clínico
- [ ] Exercícios estão corretos?
- [ ] Linguagem é apropriada?
- [ ] Avisos éticos estão bem?
- [ ] Não promete cura/diagnóstico?

---

## 🚀 Próximas Etapas

### Semana 1
- Explore a plataforma
- Teste como paciente e psicóloga
- Envie feedback

### Semana 2-3
- Testes com 2-3 pacientes reais
- Coletar impressões deles
- Documentar mudanças necessárias

### Semana 4+
- Implementar feedback
- Preparar para produção
- Lançar com 20-30 pacientes

---

## ❓ Dúvidas Frequentes

**P: Preciso criar conta?**  
R: Não! É um MVP aberto (sem autenticação real).

**P: Dados são salvos?**  
R: Não, tudo é fictício. Em produção, será com banco de dados real.

**P: Posso usar com pacientes reais agora?**  
R: Ainda não. Falta banco de dados, autenticação e LGPD. Use para validar conceito.

**P: O que acontece se atualizar a página?**  
R: Dados voltam ao estado inicial (ficção). Previsto para produção.

**P: Quando estará pronto para produção?**  
R: Dependendo do feedback, 2-4 semanas para backend real.

---

## 📚 Documentação

Se quiser explorar mais:
- `README.md` - Informações técnicas gerais
- `DESIGN_REVIEW.md` - Decisões de UX/design
- `CLAUDE.md` - Estrutura do projeto

---

## 🎉 Bem-vinda!

Esperamos que o **Entre Sessões** seja útil para sua prática clínica e melhore a qualidade das suas sessões com os pacientes.

**Seu feedback é essencial para o sucesso deste projeto.**

---

**Desenvolvido com cuidado para a prática clínica responsável.**

Perguntas? Sugestões? Feedback?  
Compartilhe seus pensamentos! 💭

---

*Este é um MVP (Minimum Viable Product) - versão inicial para validar a ideia.*  
*Conforme feedback, evoluiremos para uma plataforma production-ready.*
