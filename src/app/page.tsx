'use client';

import Link from 'next/link';
import { Heart, Stethoscope } from 'lucide-react';
import { DisclaimerBanner } from '@/components/DisclaimerBanner';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-4">
            <Heart className="w-8 h-8 text-sky-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Entre Sessões</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Exercícios e acompanhamento psicológico entre sessões
          </p>
        </div>

        {/* Disclaimer */}
        <DisclaimerBanner variant="full" />

        {/* Content */}
        <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-12 mb-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Como funciona</h2>
          <ul className="space-y-4 text-slate-700 mb-8">
            <li className="flex gap-4">
              <span className="text-sky-600 font-semibold text-lg">1.</span>
              <span>
                <strong>Pacientes:</strong> Complete exercícios de TCC, registre emoções e acesse materiais enviados pela psicóloga.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-sky-600 font-semibold text-lg">2.</span>
              <span>
                <strong>Psicóloga:</strong> Visualize o progresso dos pacientes, tarefas respondidas e dados úteis para preparar
                sessões.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-sky-600 font-semibold text-lg">3.</span>
              <span>
                <strong>Juntos:</strong> Melhore a qualidade das sessões com dados reais sobre experiências entre encontros.
              </span>
            </li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/paciente" className="block">
            <Button size="lg" variant="primary" className="w-full flex items-center justify-center gap-3">
              <Heart className="w-5 h-5" />
              Entrar como paciente
            </Button>
          </Link>
          <Link href="/psicologa" className="block">
            <Button size="lg" variant="outline" className="w-full flex items-center justify-center gap-3">
              <Stethoscope className="w-5 h-5" />
              Entrar como psicóloga
            </Button>
          </Link>
        </div>

        {/* Footer info */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>
            <strong>MVP fechado.</strong> Esta versão é para validação com a Larissa e alguns pacientes selecionados.
          </p>
        </div>
      </div>
    </div>
  );
}
