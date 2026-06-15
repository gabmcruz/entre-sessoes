'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { patients, checkIns, tasks } from '@/lib/mock-data';

export default function PsicologaPage() {
  const activePatients = patients.length;
  const pendingTasks = tasks.filter(t => t.status === 'pending').length;
  const weekCheckIns = checkIns.filter(c => {
    const date = new Date(c.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return date > weekAgo;
  }).length;

  const getAverageMood = (patientId: string) => {
    const patientCheckIns = checkIns.filter(c => c.patientId === patientId);
    return patientCheckIns.length > 0
      ? Math.round(patientCheckIns.reduce((acc, c) => acc + c.mood, 0) / patientCheckIns.length)
      : 0;
  };

  const getAverageAnxiety = (patientId: string) => {
    const patientCheckIns = checkIns.filter(c => c.patientId === patientId);
    return patientCheckIns.length > 0
      ? Math.round(patientCheckIns.reduce((acc, c) => acc + c.anxiety, 0) / patientCheckIns.length)
      : 0;
  };

  const getLastCheckIn = (patientId: string) => {
    const patientCheckIns = checkIns.filter(c => c.patientId === patientId);
    return patientCheckIns[0];
  };

  const getPatientTask = (patientId: string) => {
    return tasks.find(t => t.patientId === patientId && t.status === 'pending');
  };

  const needsAttention = patients.filter(p => {
    const anxiety = getAverageAnxiety(p.id);
    return anxiety >= 8;
  }).length;

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Seu espaço com os pacientes</h1>
        <p className="text-slate-600 mt-2">Visão rápida para preparar as sessões</p>
      </div>

      {/* KPI Cards - Responsivo 2x2 ou 1x4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <CardDescription className="text-xs uppercase tracking-wide mb-2">Pacientes ativos</CardDescription>
            <div className="text-3xl font-bold text-sky-600">{activePatients}</div>
          </CardContent>
        </Card>

        <Card className={pendingTasks > 0 ? 'border-l-4 border-amber-400' : ''}>
          <CardContent className="pt-6">
            <CardDescription className="text-xs uppercase tracking-wide mb-2">Tarefas pendentes</CardDescription>
            <div className="text-3xl font-bold text-amber-600">{pendingTasks}</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <CardDescription className="text-xs uppercase tracking-wide mb-2">Check-ins esta semana</CardDescription>
            <div className="text-3xl font-bold text-emerald-600">{weekCheckIns}</div>
          </CardContent>
        </Card>

        {needsAttention > 0 && (
          <Card className="border-l-4 border-red-400 bg-red-50">
            <CardContent className="pt-6">
              <CardDescription className="text-xs uppercase tracking-wide mb-2 text-red-700">⚠ Atenção necessária</CardDescription>
              <div className="text-3xl font-bold text-red-600">{needsAttention} paciente{needsAttention > 1 ? 's' : ''}</div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Patients List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Seus pacientes</CardTitle>
              <CardDescription>Status emocional e tarefas</CardDescription>
            </div>
            <Link href="/psicologa/nova-tarefa">
              <Button size="sm" variant="primary">
                + Nova Tarefa
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          {/* Desktop: Table */}
          <div className="hidden md:overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-3 font-semibold text-slate-700 text-xs uppercase">Nome</th>
                  <th className="text-left py-3 px-3 font-semibold text-slate-700 text-xs uppercase">Último check-in</th>
                  <th className="text-left py-3 px-3 font-semibold text-slate-700 text-xs uppercase">Tarefa</th>
                  <th className="text-center py-3 px-3 font-semibold text-slate-700 text-xs uppercase">Humor</th>
                  <th className="text-center py-3 px-3 font-semibold text-slate-700 text-xs uppercase">Ansiedade</th>
                  <th className="text-right py-3 px-3 font-semibold text-slate-700 text-xs uppercase">Ação</th>
                </tr>
              </thead>
              <tbody>
                {patients.map(patient => {
                  const lastCheck = getLastCheckIn(patient.id);
                  const currentTask = getPatientTask(patient.id);
                  const avgMood = getAverageMood(patient.id);
                  const avgAnxiety = getAverageAnxiety(patient.id);
                  const highlight = avgAnxiety >= 8;

                  return (
                    <tr
                      key={patient.id}
                      className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                        highlight ? 'bg-red-50 border-b border-red-100' : ''
                      }`}
                    >
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 ${patient.avatarColor} rounded-full`} />
                          <span className="font-medium text-slate-900 text-sm">{patient.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-xs text-slate-600">
                        {lastCheck ? new Date(lastCheck.date).toLocaleDateString('pt-BR') : '—'}
                      </td>
                      <td className="py-3 px-3 text-xs">
                        {currentTask ? (
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                              currentTask.status === 'pending'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {currentTask.title.substring(0, 18)}
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <div className="text-sm font-semibold text-slate-900">{avgMood}</div>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <div
                          className={`text-sm font-semibold ${
                            avgAnxiety >= 8 ? 'text-red-600 font-bold' : 'text-slate-900'
                          }`}
                        >
                          {avgAnxiety}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <Link href={`/psicologa/pacientes/${patient.id}`}>
                          <Button size="sm" variant="outline">
                            Ver
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile: Card List */}
          <div className="md:hidden space-y-3">
            {patients.map(patient => {
              const lastCheck = getLastCheckIn(patient.id);
              const currentTask = getPatientTask(patient.id);
              const avgMood = getAverageMood(patient.id);
              const avgAnxiety = getAverageAnxiety(patient.id);
              const highlight = avgAnxiety >= 8;

              return (
                <div
                  key={patient.id}
                  className={`border rounded-lg p-4 ${
                    highlight ? 'border-red-200 bg-red-50' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 ${patient.avatarColor} rounded-full`} />
                      <div>
                        <p className="font-semibold text-slate-900">{patient.name}</p>
                        <p className="text-xs text-slate-600">
                          {lastCheck ? `Check-in em ${new Date(lastCheck.date).toLocaleDateString('pt-BR')}` : 'Sem check-in'}
                        </p>
                      </div>
                    </div>
                    <Link href={`/psicologa/pacientes/${patient.id}`}>
                      <Button size="sm" variant="outline">
                        Ver
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
                    <div>
                      <p className="text-slate-600">Humor</p>
                      <p className="font-bold text-base text-slate-900">{avgMood}</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Ansiedade</p>
                      <p className={`font-bold text-base ${avgAnxiety >= 8 ? 'text-red-600' : 'text-slate-900'}`}>
                        {avgAnxiety}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600">Tarefa</p>
                      <p className="font-bold text-base text-slate-900">{currentTask ? '✓' : '—'}</p>
                    </div>
                  </div>

                  {currentTask && (
                    <p className="text-xs bg-white px-2 py-1 rounded text-slate-700">
                      Tarefa: <strong>{currentTask.title}</strong>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
