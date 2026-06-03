# Entre Sessões - Documentação do Projeto

## O que é este projeto?

MVP navegável de uma plataforma de apoio psicológico entre sessões para a psicóloga Larissa e seus pacientes adultos. Usa Terapia Cognitivo-Comportamental (TCC) como base.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilos**: Tailwind CSS
- **Ícones**: Lucide React
- **Dados**: Mockados em memória (sem banco de dados)

## Estrutura

```
src/
├── app/              # Rotas e páginas
├── components/       # Componentes reutilizáveis
├── lib/              # Lógica, tipos, dados mockados
└── types/            # Interfaces TypeScript
```

## Principais Rotas

### Paciente (Ana Souza)
- `/` - Landing
- `/paciente` - Dashboard
- `/paciente/check-in` - Registrar emoções
- `/paciente/tarefa` - Tarefa da semana
- `/paciente/registro` - Registro livre
- `/paciente/materiais` - Materiais educacionais
- `/paciente/progresso` - Progresso e gráficos

### Psicóloga (Larissa)
- `/psicologa` - Dashboard com KPIs e lista de pacientes
- `/psicologa/pacientes/[id]` - Detalhes e histórico do paciente
- `/psicologa/nova-tarefa` - Enviar nova tarefa

## Dados Mockados

Arquivo: `src/lib/mock-data.ts`

- 5 pacientes fictícios
- Check-ins emocionais com escalas (humor, ansiedade, energia, sono)
- 5+ tarefas de TCC (registro de pensamento, ativação, etc.)
- 5 materiais educacionais
- Anotações clínicas geradas automaticamente

## Como Rodar

```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

## Segurança e Conformidade

**Avisos Clínicos**:
- Exibir em todas as telas principais que não substitui psicoterapia
- Orientação sobre emergências / crise

**O que AINDA NÃO está implementado para produção**:
- Autenticação real
- Banco de dados
- Criptografia
- LGPD compliance
- Logs e audit trail
- Integração com emergência
- Validação clínica dos exercícios

## Próximas Etapas

1. **Feedback da Larissa**: Teste com ela e 2-3 pacientes
2. **Ajustes UX**: Baseado no feedback
3. **Backend Real**: Implementar autenticação e banco de dados
4. **Conformidade LGPD**: Consentimento, privacidade, retenção
5. **Validação Clínica**: Revisão dos exercícios por especialista
6. **Testes**: Unitários, integração, segurança

## Notas para Desenvolvedor

- Componentes estão em `src/components/`
- Dados mockados estão centralizados em `src/lib/mock-data.ts`
- Tipos estão em `src/types/index.ts`
- Não há validação backend (MVP)
- Formulários mostram sucesso por 3 segundos e limpam
- Design responsivo: mobile-first com Tailwind

## Contato

Desenvolvido como MVP para validação. Dúvidas ou sugestões, abra uma issue.
