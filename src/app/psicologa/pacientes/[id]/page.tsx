'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { patients, checkIns, tasks, clinicalNotes } from '@/lib/mock-data';
import { ArrowLeft } from 'lucide-react';

interface PatientDetailPageProps {
  params: {
    id: string;
  };
}

export default function PatientDetailPage({ params }: PatientDetailPageProps) {
  const patient = patients.find(p => p.id === params.id);
  const patientCheckIns = checkIns.filter(c => c.patientId === params.id);
  const patientTasks = tasks.filter(t => t.patientId === params.id);
  const clinicalNote = clinicalNotes[params.id];

  if (!patient) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">Paciente não encontrado</p>
      </div>
    );
  }

  const lastCheckIn = patientCheckIns[0];
  const completedTasks = patientTasks.filter(t => t.status === 'completed');

  return (
    <>
      {/* Header */}
      <Link href="/psicologa" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">{patient.name}</h1>
        <p className="text-slate-600 mt-2">Para preparar a próxima sessão</p>
      </div>

      {/* Clinical Summary - DESTAQUE PRINCIPAL */}
      {clinicalNote && (
        <Card className="mb-8 border-l-4 border-sky-500 bg-sky-50">
          <CardHeader>
            <CardTitle className="text-sky-900">Resumo da semana</CardTitle>
            <CardDescription className="text-sky-700">{clinicalNote.week}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-800 whitespace-pre-wrap mb-4 leading-relaxed">{clinicalNote.summary}</p>
            <div className="bg-white border border-sky-200 rounded p-3 text-xs text-slate-600 italic">
              💡 Resumo gerado a partir dos dados dos pacientes. Sua interpretação clínica é indispensável.
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
        <Card className="text-center">
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-slate-900">{patientCheckIns.length}</p>
            <p className="text-xs text-slate-600 mt-1">Check-ins</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-emerald-600">{completedTasks.length}/{patientTasks.length}</p>
            <p className="text-xs text-slate-600 mt-1">Tarefas feitas</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-slate-900">
              {lastCheckIn ? lastCheckIn.mood : '—'}
            </p>
            <p className="text-xs text-slate-600 mt-1">Último humor</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Check-ins */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Últimos check-ins</CardTitle>
          <CardDescription>{patientCheckIns.length} registros</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patientCheckIns.slice(0, 5).map(checkin => (
              <div key={checkin.id} className="pb-4 border-b border-slate-200 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-slate-900">{new Date(checkin.date).toLocaleDateString('pt-BR')}</p>
                    <p className="text-sm text-slate-600 capitalize">{checkin.emotion}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-semibold text-slate-900">Humor: {checkin.mood}/10</p>
                    <p className="text-slate-600">Ansiedade: {checkin.anxiety}/10</p>
                    <p className="text-slate-600">Energia: {checkin.energy}/10</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 italic">"{checkin.notes}"</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tarefas respondidas</CardTitle>
            <CardDescription>{completedTasks.length} tarefa(s)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {completedTasks.map(task => (
                <div key={task.id} className="pb-6 border-b border-slate-200 last:border-b-0">
                  <h3 className="font-semibold text-slate-900 mb-3">{task.title}</h3>
                  {task.response && (
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-slate-700">Situação:</p>
                        <p className="text-slate-600">{task.response.situation}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Pensamento automático:</p>
                        <p className="text-slate-600 italic">"{task.response.thought}"</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Pensamento alternativo:</p>
                        <p className="text-slate-600 italic">"{task.response.alternativeThought}"</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Ação planejada:</p>
                        <p className="text-slate-600">{task.response.action}</p>
                      </div>
                      <p className="text-xs text-slate-500">
                        Enviado em: {new Date(task.response.submittedAt).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action */}
      <div className="mb-8">
        <Link href={`/psicologa/nova-tarefa?patientId=${params.id}`}>
          <Button size="lg" variant="primary" className="w-full sm:w-auto">
            Enviar nova tarefa para {patient.name}
          </Button>
        </Link>
      </div>
    </>
  );
}
