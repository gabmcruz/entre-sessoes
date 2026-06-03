import { Patient, CheckIn, Task, Material, FreeRegistration, ClinicalNote } from '@/types';

export const CURRENT_PATIENT_ID = 'patient-1';
export const CURRENT_PATIENT_NAME = 'Ana';

export const patients: Patient[] = [
  { id: 'patient-1', name: 'Ana Souza', avatarColor: 'bg-sky-400' },
  { id: 'patient-2', name: 'Marcos Lima', avatarColor: 'bg-slate-400' },
  { id: 'patient-3', name: 'Juliana Prado', avatarColor: 'bg-sky-300' },
  { id: 'patient-4', name: 'Fernanda Alves', avatarColor: 'bg-slate-300' },
  { id: 'patient-5', name: 'Roberto Martins', avatarColor: 'bg-sky-500' },
];

export const checkIns: CheckIn[] = [
  {
    id: 'check-1',
    patientId: 'patient-1',
    date: '2026-06-02',
    mood: 6,
    anxiety: 7,
    energy: 5,
    sleep: 'fair',
    emotion: 'ansiedade',
    notes: 'Tive uma cobrança no trabalho que me deixou ansioso.',
  },
  {
    id: 'check-2',
    patientId: 'patient-1',
    date: '2026-05-29',
    mood: 7,
    anxiety: 5,
    energy: 7,
    sleep: 'good',
    emotion: 'esperança',
    notes: 'Consegui conversar melhor com meu chefe sobre o projeto.',
  },
  {
    id: 'check-3',
    patientId: 'patient-1',
    date: '2026-05-26',
    mood: 5,
    anxiety: 8,
    energy: 4,
    sleep: 'poor',
    emotion: 'tristeza',
    notes: 'Fim de semana difícil, faltou energia.',
  },
  {
    id: 'check-4',
    patientId: 'patient-2',
    date: '2026-06-01',
    mood: 8,
    anxiety: 3,
    energy: 8,
    sleep: 'excellent',
    emotion: 'alegria',
    notes: 'Ótima semana, consegui relaxar nos fins de semana.',
  },
  {
    id: 'check-5',
    patientId: 'patient-3',
    date: '2026-05-31',
    mood: 4,
    anxiety: 9,
    energy: 3,
    sleep: 'poor',
    emotion: 'culpa',
    notes: 'Sinto que não consegui cumprir o exercício corretamente.',
  },
];

export const tasks: Task[] = [
  {
    id: 'task-1',
    patientId: 'patient-1',
    type: 'auto-thought',
    title: 'Registro de pensamento automático',
    objective: 'Identificar a relação entre situação, pensamento, emoção e resposta',
    dueDate: '2026-06-09',
    status: 'pending',
    createdAt: '2026-05-26',
  },
  {
    id: 'task-2',
    patientId: 'patient-1',
    type: 'auto-thought',
    title: 'Registro de pensamento automático',
    objective: 'Identificar a relação entre situação, pensamento, emoção e resposta',
    dueDate: '2026-05-26',
    status: 'completed',
    response: {
      situation: 'Meu chefe comentou que o projeto tem atraso',
      emotion: 'ansiedade',
      emotionIntensity: 8,
      thought: 'Vou decepcionar todo mundo, sou incompetente',
      supportingEvidence: 'O projeto realmente está atrasado',
      contradictingEvidence: 'Consegui entregar 3 grandes projetos bem em 2024, os clientes elogiaram meu trabalho',
      alternativeThought: 'Houve atrasos no cronograma, mas posso ajustar os prazos e terminar com qualidade',
      action: 'Vou conversar com meu chefe sobre um novo cronograma realista',
      submittedAt: '2026-05-27',
    },
    createdAt: '2026-05-19',
  },
  {
    id: 'task-3',
    patientId: 'patient-2',
    type: 'behavioral',
    title: 'Ativação comportamental',
    objective: 'Aumentar atividades que geram bem-estar',
    dueDate: '2026-06-08',
    status: 'pending',
    createdAt: '2026-05-28',
  },
  {
    id: 'task-4',
    patientId: 'patient-3',
    type: 'coping-plan',
    title: 'Plano de enfrentamento',
    objective: 'Desenvolver estratégias para lidar com ansiedade em situações sociais',
    dueDate: '2026-06-06',
    status: 'pending',
    createdAt: '2026-05-29',
  },
  {
    id: 'task-5',
    patientId: 'patient-4',
    type: 'emotional-diary',
    title: 'Diário emocional',
    objective: 'Registrar emoções e padrões ao longo da semana',
    dueDate: '2026-06-10',
    status: 'pending',
    createdAt: '2026-05-30',
  },
  {
    id: 'task-6',
    patientId: 'patient-5',
    type: 'relapse',
    title: 'Prevenção de recaída',
    objective: 'Identificar gatilhos e planejar respostas preventivas',
    dueDate: '2026-06-05',
    status: 'completed',
    response: {
      situation: 'Encontrei um amigo em uma festa que não via há muito tempo',
      emotion: 'alegria',
      emotionIntensity: 7,
      thought: 'Finalmente tenho a chance de recuperar meu relacionamento com essa pessoa',
      supportingEvidence: 'Ele me abraçou e pareceu feliz em me ver',
      contradictingEvidence: 'Tínhamos discordâncias sérias no passado',
      alternativeThought: 'Posso aproveitar o momento e manter contato sem expectations',
      action: 'Peguei seu contato e marcamos de tomar um café',
      submittedAt: '2026-05-30',
    },
    createdAt: '2026-05-22',
  },
];

export const materials: Material[] = [
  {
    id: 'mat-1',
    title: 'Entendendo pensamentos automáticos',
    description: 'Como identificar e questionar pensamentos que surgem automaticamente',
    type: 'text',
    content: `Os pensamentos automáticos são ideias que surgem rapidamente em resposta a situações. Eles são frequentemente:

• Involuntários
• Plausíveis (parecem verdadeiros)
• Podem ser distorcidos

A TCC trabalha com esses pensamentos através da identificação e teste de realidade. Você não precisa acreditar em cada pensamento que surge.

Exercício: Observe seus pensamentos como um pesquisador neutro observaria um fenômeno natural. Sem julgamento.`,
  },
  {
    id: 'mat-2',
    title: 'Como funciona a ansiedade',
    description: 'Compreender o ciclo da ansiedade e como intervir',
    type: 'text',
    content: `A ansiedade segue um ciclo previsível:

1. Situação ou gatilho
2. Pensamento interpretativo
3. Resposta física (aumento do coração, suor, respiração rápida)
4. Comportamento de segurança (evitar, fugir, rituais)
5. Alívio temporário → reforço do ciclo

Intervir em qualquer ponto quebra o ciclo. Os exercícios de respiração, ativação comportamental e questionamento de pensamentos são formas de intervir.`,
  },
  {
    id: 'mat-3',
    title: 'O ciclo pensamento–emoção–comportamento',
    description: 'Visualizar como essas três dimensões se conectam',
    type: 'text',
    content: `Tudo está conectado:

Situação → Pensamento → Emoção → Comportamento → Consequência

Exemplo:
• Situação: Seu chefe o chama para uma reunião
• Pensamento: "Vai me demitir"
• Emoção: Pânico, ansiedade
• Comportamento: Você fica silencioso, não contribui
• Consequência: A reunião não sai bem, você se sente mal

Mudando o pensamento ou o comportamento, a emoção muda também.`,
  },
  {
    id: 'mat-4',
    title: 'Técnicas de respiração: quando usar',
    description: 'Respiração diafragmática e quando é realmente útil',
    type: 'exercise',
    content: `Respiração 4-7-8:

1. Inspire pelo nariz contando até 4
2. Prenda a respiração contando até 7
3. Expire pela boca contando até 8

Use quando:
• Sinta os primeiros sinais de ansiedade
• Antes de uma situação desafiadora
• À noite se estiver com insônia leve

NÃO substitui o tratamento e não funciona para todos. Se não funcionar para você, é ok, existem outras estratégias.`,
  },
  {
    id: 'mat-5',
    title: 'Prevenção de recaída',
    description: 'Reconhecer sinais precoces e planejar respostas',
    type: 'text',
    content: `Prevenção de recaída é sobre:

1. Reconhecer seus gatilhos pessoais
2. Identificar sinais precoces (físicos e emocionais)
3. Ter um plano pronto (pessoas, técnicas, ações)
4. Ser compassivo com você mesmo se escorregar

Escorregar não é fracasso. Recaída é uma oportunidade de aprender mais sobre si mesmo.

Seu plano pode incluir: ligar para alguém, sair de casa, usar um exercício de respiração, escrever seus pensamentos.`,
  },
];

export const freeRegistrations: FreeRegistration[] = [
  {
    id: 'reg-1',
    patientId: 'patient-1',
    date: '2026-06-01',
    situation: 'Meu colega comentou que deveria ter feito a apresentação diferente',
    emotion: 'defensiva/envergonhada',
    emotionIntensity: 7,
    thought: 'Eu fiz tudo errado, sou uma fraude',
    supportingEvidence: 'Ele apontou dois erros na minha apresentação',
    contradictingEvidence: 'Meu gerente disse que foi bem feita, o cliente pediu para trabalhar comigo novamente',
    alternativeThought: 'Ninguém é perfeito. Recebi feedback construtivo que posso usar na próxima vez',
    action: 'Vou agradecer o feedback e não vou levar para o pessoal',
  },
];

export const clinicalNotes: Record<string, ClinicalNote> = {
  'patient-1': {
    patientId: 'patient-1',
    week: 'semana 1-6',
    summary: `Nesta semana, Ana registrou aumento de ansiedade em situações de cobrança no trabalho. O pensamento recorrente foi "vou decepcionar as pessoas".

Pontos positivos:
• Completou um registro de pensamento bem estruturado
• Conseguiu identificar evidências contra o pensamento catastrofista
• Conversou com seu chefe sobre cronograma

Áreas para exploração:
• Padrão de auto-exigência e perfeccionismo
• Estratégias de comunicação assertiva para solicitar ajudas
• Diferença entre responsabilidade e responsabilidade excessiva

Resumo visual de apoio. A interpretação clínica deve ser feita pela psicóloga.`,
    averageMood: 6,
    averageAnxiety: 6.7,
    completedTasks: 1,
    checkInsCount: 3,
  },
  'patient-2': {
    patientId: 'patient-2',
    week: 'semana 1-6',
    summary: `Marcos teve uma semana positiva com humor estável e ansiedade baixa. Não completou a tarefa de ativação comportamental ainda.

Pontos positivos:
• Sono excelente
• Humor estável e positivo
• Participação consistente nos check-ins

Próximos passos:
• Incentivá-lo a completar o exercício de ativação comportamental
• Manter estratégias que estão funcionando`,
    averageMood: 8,
    averageAnxiety: 3,
    completedTasks: 0,
    checkInsCount: 1,
  },
  'patient-3': {
    patientId: 'patient-3',
    week: 'semana 1-6',
    summary: `Juliana apresentou níveis altos de ansiedade e sentimentos de culpa. Pode estar relacionado a dificuldades em cumprir tarefas. Resgatar motivação e quebrar em passos menores é importante.

Sinais de alerta:
• Ansiedade em nível 9
• Energia baixa (3)
• Sentimento de culpa associado ao não cumprimento de tarefas

Estratégia:
• Simplificar os exercícios em passos muito pequenos
• Validar o esforço, não só o resultado final
• Explorar perfeccionismo`,
    averageMood: 4,
    averageAnxiety: 9,
    completedTasks: 0,
    checkInsCount: 1,
  },
};

export const emotions = [
  { value: 'ansiedade', label: 'Ansiedade' },
  { value: 'tristeza', label: 'Tristeza' },
  { value: 'raiva', label: 'Raiva' },
  { value: 'culpa', label: 'Culpa' },
  { value: 'alegria', label: 'Alegria' },
  { value: 'cansaco', label: 'Cansaço' },
  { value: 'esperanca', label: 'Esperança' },
  { value: 'outra', label: 'Outra' },
];
