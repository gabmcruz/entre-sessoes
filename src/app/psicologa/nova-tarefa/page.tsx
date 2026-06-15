'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, TextArea, Select } from '@/components/Input';
import { SuccessBanner } from '@/components/SuccessBanner';
import { patients } from '@/lib/mock-data';

export default function NovaTarefaPage() {
  type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

  const searchParams = useSearchParams();
  const patientIdFromUrl = searchParams.get('patientId');

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientId: patientIdFromUrl || '',
    type: '',
    instruction: '',
    dueDate: '',
  });

  const taskTypes = [
    { value: 'auto-thought', label: 'Registro de pensamento automático' },
    { value: 'behavioral', label: 'Ativação comportamental' },
    { value: 'coping-plan', label: 'Plano de enfrentamento' },
    { value: 'relapse', label: 'Prevenção de recaída' },
    { value: 'emotional-diary', label: 'Diário emocional' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        patientId: '',
        type: '',
        instruction: '',
        dueDate: '',
      });
      setSubmitted(false);
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <SuccessBanner
          title="Tarefa enviada com sucesso"
          message="O paciente receberá a nova tarefa e poderá respondê-la na plataforma."
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Enviar Nova Tarefa</h1>
        <p className="text-slate-600 mt-2">Escolha um paciente e crie um exercício personalizado.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configurar nova tarefa</CardTitle>
          <CardDescription>Os exercícios podem ser adaptados ao progresso do paciente</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Selection */}
            <Select
              label="Selecionar paciente"
              value={formData.patientId}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, patientId: e.target.value })}
              options={patients.map(p => ({ value: p.id, label: p.name }))}
              required
            />

            {/* Task Type */}
            <Select
              label="Tipo de exercício"
              value={formData.type}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, type: e.target.value })}
              options={taskTypes}
              required
            />

            {/* Instructions */}
            <TextArea
              label="Instrução personalizada (opcional)"
              value={formData.instruction}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, instruction: e.target.value })}
              placeholder="Adicione contexto específico do paciente ou ajustes à tarefa padrão"
              rows={5}
            />

            {/* Due Date */}
            <Input
              label="Prazo para resposta"
              type="date"
              value={formData.dueDate}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, dueDate: e.target.value })}
              required
            />

            <Button type="submit" size="lg" variant="primary">
              Enviar tarefa
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Info */}
      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-base">Dica de personalização</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-900">
            Você pode adicionar instruções personalizadas com base no que discutiu na sessão anterior. Isso ajuda o
            paciente a aplicar os conceitos ao seu contexto específico.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
