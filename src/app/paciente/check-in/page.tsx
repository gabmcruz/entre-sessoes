'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { TextArea, Select } from '@/components/Input';
import { SuccessBanner } from '@/components/SuccessBanner';
import { emotions } from '@/lib/mock-data';

export default function CheckInPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    mood: '5',
    anxiety: '5',
    energy: '5',
    sleep: '',
    emotion: '',
    notes: '',
  });

  type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        mood: '5',
        anxiety: '5',
        energy: '5',
        sleep: '',
        emotion: '',
        notes: '',
      });
      setSubmitted(false);
    }, 5000);
  };

  const sleepOptions = [
    { value: 'poor', label: 'Ruim' },
    { value: 'fair', label: 'Regular' },
    { value: 'good', label: 'Boa' },
    { value: 'excellent', label: 'Ótima' },
  ];

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <SuccessBanner
          title="Check-in registrado com sucesso"
          message="A Larissa poderá usar isso para compreender melhor sua semana na próxima sessão."
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Check-in Emocional</h1>
        <p className="text-slate-600 mt-2">Como você está se sentindo hoje? Responda com sinceridade.</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-6 rounded text-sm text-blue-800">
        Seus dados são privados e usados apenas para a conversa com a Larissa. Não há julgamento aqui.
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Como você está hoje?</CardTitle>
          <CardDescription>Informações que nos ajudam a acompanhar você melhor</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mood */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Seu humor agora: {formData.mood}/10
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={formData.mood}
                onChange={(e: ChangeEvent) => setFormData({ ...formData, mood: e.target.value })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-600 mt-2">
                <span>Muito baixo</span>
                <span>Muito bom</span>
              </div>
            </div>

            {/* Anxiety */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Seu nível de ansiedade: {formData.anxiety}/10
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={formData.anxiety}
                onChange={(e: ChangeEvent) => setFormData({ ...formData, anxiety: e.target.value })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-600 mt-2">
                <span>Muito calmo</span>
                <span>Muito ansioso</span>
              </div>
            </div>

            {/* Energy */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Sua energia: {formData.energy}/10
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={formData.energy}
                onChange={(e: ChangeEvent) => setFormData({ ...formData, energy: e.target.value })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-600 mt-2">
                <span>Muito cansado</span>
                <span>Muita energia</span>
              </div>
            </div>

            {/* Sleep Quality */}
            <Select
              label="Qualidade do seu sono na última noite"
              value={formData.sleep}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, sleep: e.target.value })}
              options={sleepOptions}
              required
            />

            {/* Emotion */}
            <Select
              label="Emoção predominante"
              value={formData.emotion}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, emotion: e.target.value })}
              options={emotions}
              required
            />

            {/* Notes */}
            <TextArea
              label="O que mais marcou sua semana?"
              value={formData.notes}
              onChange={(e: ChangeEvent) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Descreva brevemente (opcional)"
              rows={4}
            />

            <Button type="submit" size="lg" variant="primary">
              Salvar check-in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
