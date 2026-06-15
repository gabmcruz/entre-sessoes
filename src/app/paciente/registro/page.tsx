'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, TextArea } from '@/components/Input';
import { SuccessBanner } from '@/components/SuccessBanner';

export default function RegistroPage() {
  type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
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
      setSubmitted(false);
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <SuccessBanner
          title="Registro salvo com sucesso"
          message="Você pode continuar registrando suas experiências sempre que precisar."
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Registro de Pensamento</h1>
        <p className="text-slate-600 mt-2">Use este espaço para registrar situações importantes ao longo da semana.</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Como usar este registro</CardTitle>
          <CardDescription>Sem prazo, sem pressão</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-sky-50 border border-sky-200 rounded p-4">
            <p className="text-sm text-sky-900">
              Este é um espaço livre para registrar suas experiências, pensamentos e emoções ao longo da semana. Não é
              uma tarefa obrigatória — use quando sentir necessidade. Seus registros ajudam você a reflectir e ajudam a
              Larissa a entender melhor sua semana na sessão.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Novo registro</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextArea
              label="Qual foi a situação?"
              value={formData.situation}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, situation: e.target.value })}
              placeholder="Descreva a situação"
              rows={3}
              required
            />

            <Input
              label="Que emoção apareceu?"
              value={formData.emotion}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, emotion: e.target.value })}
              placeholder="Ex: ansiedade, tristeza, raiva, culpa"
              required
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Intensidade: {formData.emotionIntensity}/10
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={formData.emotionIntensity}
                onChange={(e: ChangeEvent) => setFormData({ ...formData, emotionIntensity: e.target.value })}
                className="w-full h-2 bg-slate-200 rounded-lg"
              />
            </div>

            <TextArea
              label="Que pensamento passou pela sua cabeça?"
              value={formData.thought}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, thought: e.target.value })}
              placeholder="O pensamento automático"
              rows={3}
              required
            />

            <TextArea
              label="Que evidências apoiam esse pensamento?"
              value={formData.supportingEvidence}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, supportingEvidence: e.target.value })}
              placeholder="Fatos que parecem confirmar"
              rows={3}
            />

            <TextArea
              label="Que evidências mostram outra possibilidade?"
              value={formData.contradictingEvidence}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, contradictingEvidence: e.target.value })}
              placeholder="Fatos que contradizem o pensamento"
              rows={3}
            />

            <TextArea
              label="Qual pensamento alternativo?"
              value={formData.alternativeThought}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, alternativeThought: e.target.value })}
              placeholder="Um pensamento mais realista"
              rows={3}
            />

            <TextArea
              label="Que ação você pode tomar?"
              value={formData.action}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, action: e.target.value })}
              placeholder="Uma ação concreta"
              rows={3}
            />

            <Button type="submit" size="lg" variant="primary">
              Salvar registro
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
