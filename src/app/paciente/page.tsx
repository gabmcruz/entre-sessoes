'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { DisclaimerBanner } from '@/components/DisclaimerBanner';
import { CURRENT_PATIENT_NAME, checkIns, tasks } from '@/lib/mock-data';
import { Calendar, CheckCircle2, Smile, FileText, BookOpen, TrendingUp } from 'lucide-react';

export default function PacientePage() {
  const lastWeekCheckIns = checkIns.slice(0, 3);
  const currentTask = tasks.find(t => t.patientId === 'patient-1' && t.status === 'pending');
  const lastMood = lastWeekCheckIns[0]?.mood || 6;

  const getAverageMood = () => {
    return lastWeekCheckIns.length > 0
      ? Math.round(lastWeekCheckIns.reduce((acc, c) => acc + c.mood, 0) / lastWeekCheckIns.length)
      : 6;
  };

  const getMoodLabel = (mood: number) => {
    if (mood <= 2) return 'Muito baixo';
    if (mood <= 4) return 'Baixo';
    if (mood <= 6) return 'Moderado';
    if (mood <= 8) return 'Bom';
    return 'Ótimo';
  };

  return (
    <>
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Olá, {CURRENT_PATIENT_NAME}.</h1>
        <p className="text-lg text-slate-600 mt-2">Bem-vindo ao seu espaço de apoio entre sessões</p>
      </div>

      <DisclaimerBanner variant="compact" />

      {/* Próxima Sessão - Destaque Importante */}
      <Card className="mb-8 border-l-4 border-sky-500 bg-sky-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-sky-600" />
              <div>
                <CardTitle className="text-sky-900">Próxima sessão com Larissa</CardTitle>
                <CardDescription className="text-sky-700">Quinta, 12 de junho às 14h30</CardDescription>
              </div>
            </div>
            <Link href="/paciente/check-in">
              <Button size="sm" variant="primary">
                Check-in
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>

      {/* Tarefa em Destaque - Prioridade Alta */}
      {currentTask && (
        <Card className="mb-8 border-2 border-emerald-200 bg-emerald-50">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <CardTitle className="text-emerald-900">Sua tarefa desta semana</CardTitle>
                <CardDescription className="text-emerald-700">{currentTask.objective}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 mb-4">
              {currentTask.title} — Prazo até {new Date(currentTask.dueDate).toLocaleDateString('pt-BR')}
            </p>
            <Link href="/paciente/tarefa">
              <Button size="sm" className="w-full sm:w-auto">
                Responder tarefa
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions Grid - Reorganizado */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Outras ações</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/paciente/check-in" className="block">
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <Smile className="w-5 h-5 text-sky-600" />
                  <CardTitle>Check-in</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">Registrar como você está hoje</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/paciente/registro" className="block">
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <FileText className="w-5 h-5 text-amber-600" />
                  <CardTitle>Registro</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">Anotar situações e reflexões</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/paciente/materiais" className="block">
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <CardTitle>Materiais</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">Conteúdos educacionais</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/paciente/progresso" className="block">
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <CardTitle>Progresso</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">Ver suas tendências</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Week Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Resumo da semana</CardTitle>
              <CardDescription>Últimos check-ins registrados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lastWeekCheckIns.map(checkin => (
                  <div key={checkin.id} className="pb-4 border-b border-slate-200 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-slate-900">{new Date(checkin.date).toLocaleDateString('pt-BR')}</p>
                        <p className="text-sm text-slate-600 capitalize">{checkin.emotion}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-900">Humor: {checkin.mood}/10</p>
                        <p className="text-sm text-slate-600">Ansiedade: {checkin.anxiety}/10</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 italic">"{checkin.notes}"</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Seu humor esta semana</CardTitle>
              <CardDescription>Média dos últimos check-ins</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-5xl font-bold text-sky-600 mb-2">{getAverageMood()}</div>
                <div className="text-sm text-slate-600 mb-6">{getMoodLabel(getAverageMood())}</div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-sky-600 h-2 rounded-full"
                    style={{ width: `${(getAverageMood() / 10) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-slate-600 mt-4">Escala de 0 a 10</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
