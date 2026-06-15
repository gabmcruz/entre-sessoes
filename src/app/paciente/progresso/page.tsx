'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import { checkIns, tasks, freeRegistrations } from '@/lib/mock-data';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function ProgressoPage() {
  const patientCheckIns = checkIns.filter(c => c.patientId === 'patient-1');
  const patientTasks = tasks.filter(t => t.patientId === 'patient-1');
  const patientRegistrations = freeRegistrations.filter(r => r.patientId === 'patient-1');

  const completedTasksCount = patientTasks.filter(t => t.status === 'completed').length;
  const moodAverage =
    patientCheckIns.length > 0 ? Math.round(patientCheckIns.reduce((acc, c) => acc + c.mood, 0) / patientCheckIns.length) : 0;
  const anxietyAverage =
    patientCheckIns.length > 0 ? Math.round(patientCheckIns.reduce((acc, c) => acc + c.anxiety, 0) / patientCheckIns.length) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Seu Progresso</h1>
        <p className="text-slate-600 mt-2">Visualize seus padrões emocionais e tarefas concluídas.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Check-ins registrados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-sky-600">{patientCheckIns.length}</div>
            <p className="text-sm text-slate-600 mt-2">Últimas semanas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tarefas concluídas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-emerald-600">{completedTasksCount}</div>
            <p className="text-sm text-slate-600 mt-2">De {patientTasks.length} tarefas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Registros livres</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-purple-600">{patientRegistrations.length}</div>
            <p className="text-sm text-slate-600 mt-2">Reflexões adicionais</p>
          </CardContent>
        </Card>
      </div>

      {/* Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Humor - Últimas semanas</CardTitle>
            <CardDescription>Média: {moodAverage}/10</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {patientCheckIns.map((checkin, idx) => (
                <div key={checkin.id} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-slate-600">
                    {new Date(checkin.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-sky-600 h-2 rounded-full"
                        style={{ width: `${(checkin.mood / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-12 text-right text-sm font-semibold text-slate-900">{checkin.mood}/10</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ansiedade - Últimas semanas</CardTitle>
            <CardDescription>Média: {anxietyAverage}/10</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {patientCheckIns.map((checkin, idx) => (
                <div key={checkin.id} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-slate-600">
                    {new Date(checkin.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${(checkin.anxiety / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-12 text-right text-sm font-semibold text-slate-900">{checkin.anxiety}/10</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <CardTitle className="text-base">Informação importante</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-900">
            Esses dados ajudam a observar padrões e tendências ao longo do tempo, mas não representam diagnóstico ou
            prognóstico. A interpretação clínica deve ser feita pela psicóloga na sessão.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
