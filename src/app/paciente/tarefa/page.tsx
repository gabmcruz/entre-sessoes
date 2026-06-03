'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, TextArea } from '@/components/Input';
import { SuccessBanner } from '@/components/SuccessBanner';
import { tasks } from '@/lib/mock-data';
import { CheckCircle2, Clock } from 'lucide-react';

export default function TarefaPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    situation: '',
    emotion: '',
    emotionIntensity: '5',
    thought: '',
    supportingEvidence: '',
    contradictingEvidence: '',
    alternativeThought: '',
    action: '',
  });

  const currentTask = tasks.find(t => t.patientId === 'patient-1' && t.status === 'pending');
  const completedTask = tasks.find(t => t.patientId === 'patient-1' && t.status === 'completed');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({
        situation: '',
        emotion: '',
        emotionIntensity: '5',
        thought: '',
        supportingEvidence: '',
        contradictingEvidence: '',
        alternativeThought: '',
        action: '',
      });
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <SuccessBanner
          title="Tarefa enviada com sucesso"
          message="A Larissa receberá sua resposta e poderá usá-la para discutir na próxima sessão."
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Tarefa da Semana</h1>
        <p className="text-slate-600 mt-2">Complete o exercício abaixo para melhorar sua compreensão das emoções.</p>
      </div>

      {/* Current Task */}
      {currentTask && (
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{currentTask.title}</CardTitle>
                <CardDescription className="mt-2">{currentTask.objective}</CardDescription>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                <Clock className="w-3 h-3 mr-1" />
                Pendente
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
              <p className="text-sm text-blue-900">
                <strong>Como funciona:</strong> Este exercício ajuda você a entender a relação entre situação, pensamento,
                emoção e comportamento. Identifique uma situação que o afetou esta semana e trabalhe através de cada
                etapa.
              </p>
            </div>

            {!showForm ? (
              <Button onClick={() => setShowForm(true)} size="lg" variant="primary">
                Responder tarefa
              </Button>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <TextArea
                  label="1. Qual foi a situação?"
                  value={formData.situation}
                  onChange={e => setFormData({ ...formData, situation: e.target.value })}
                  placeholder="Descreva a situação de forma concreta e objetiva"
                  rows={3}
                  required
                />

                <Input
                  label="2. Que emoção apareceu?"
                  value={formData.emotion}
                  onChange={e => setFormData({ ...formData, emotion: e.target.value })}
                  placeholder="Ex: ansiedade, tristeza, raiva, culpa"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    3. Intensidade da emoção: {formData.emotionIntensity}/10
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={formData.emotionIntensity}
                    onChange={e => setFormData({ ...formData, emotionIntensity: e.target.value })}
                    className="w-full h-2 bg-slate-200 rounded-lg"
                  />
                </div>

                <TextArea
                  label="4. Que pensamento passou pela sua cabeça?"
                  value={formData.thought}
                  onChange={e => setFormData({ ...formData, thought: e.target.value })}
                  placeholder="O pensamento automático que surgiu"
                  rows={3}
                  required
                />

                <TextArea
                  label="5. Que evidências apoiam esse pensamento?"
                  value={formData.supportingEvidence}
                  onChange={e => setFormData({ ...formData, supportingEvidence: e.target.value })}
                  placeholder="Fatos que parecem confirmar o pensamento"
                  rows={3}
                  required
                />

                <TextArea
                  label="6. Que evidências mostram outra possibilidade?"
                  value={formData.contradictingEvidence}
                  onChange={e => setFormData({ ...formData, contradictingEvidence: e.target.value })}
                  placeholder="Fatos ou argumentos que contradizem o pensamento"
                  rows={3}
                  required
                />

                <TextArea
                  label="7. Qual pensamento alternativo mais equilibrado?"
                  value={formData.alternativeThought}
                  onChange={e => setFormData({ ...formData, alternativeThought: e.target.value })}
                  placeholder="Um pensamento mais realista e menos catastrofista"
                  rows={3}
                  required
                />

                <TextArea
                  label="8. Que pequena ação você pode escolher agora?"
                  value={formData.action}
                  onChange={e => setFormData({ ...formData, action: e.target.value })}
                  placeholder="Uma ação concreta e realizável"
                  rows={3}
                  required
                />

                <div className="flex gap-4 pt-4">
                  <Button type="submit" size="lg" variant="primary">
                    Enviar para Larissa
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="secondary"
                    onClick={() => setShowForm(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      )}

      {/* Completed Tasks */}
      {completedTask && (
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Tarefa anterior concluída</CardTitle>
                <CardDescription className="mt-2">{completedTask.title}</CardDescription>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Concluída
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {completedTask.response && (
                <>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Situação:</p>
                    <p className="text-sm text-slate-600 mt-1">{completedTask.response.situation}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Emoção:</p>
                    <p className="text-sm text-slate-600 mt-1">
                      {completedTask.response.emotion} (intensidade: {completedTask.response.emotionIntensity}/10)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Pensamento automático:</p>
                    <p className="text-sm text-slate-600 mt-1">"{completedTask.response.thought}"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Pensamento alternativo:</p>
                    <p className="text-sm text-slate-600 mt-1">"{completedTask.response.alternativeThought}"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Ação planejada:</p>
                    <p className="text-sm text-slate-600 mt-1">{completedTask.response.action}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Enviado em: {new Date(completedTask.response.submittedAt).toLocaleDateString('pt-BR')}
                  </p>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
