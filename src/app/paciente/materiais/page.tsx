'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import { Button } from '@/components/Button';
import { materials } from '@/lib/mock-data';
import { FileText, Headphones, BookOpen, X } from 'lucide-react';

export default function MateriaisPage() {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'text':
        return <FileText className="w-6 h-6 text-slate-600" />;
      case 'audio':
        return <Headphones className="w-6 h-6 text-blue-600" />;
      case 'exercise':
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
      case 'pdf':
        return <FileText className="w-6 h-6 text-red-600" />;
      default:
        return <FileText className="w-6 h-6 text-slate-600" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'text':
        return 'Texto';
      case 'audio':
        return 'Áudio';
      case 'exercise':
        return 'Exercício';
      case 'pdf':
        return 'PDF';
      default:
        return 'Material';
    }
  };

  const selectedContent = materials.find(m => m.id === selectedMaterial);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Materiais Educacionais</h1>
        <p className="text-slate-600 mt-2">Conteúdos enviados pela Larissa para apoiar sua jornada terapêutica.</p>
      </div>

      {selectedContent ? (
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{selectedContent.title}</CardTitle>
                <CardDescription className="mt-2">{getTypeLabel(selectedContent.type)}</CardDescription>
              </div>
              <button
                onClick={() => setSelectedMaterial(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              {selectedContent.content.split('\n').map((line, i) => (
                <p key={i} className="text-slate-700 mb-4 whitespace-pre-wrap">
                  {line}
                </p>
              ))}
            </div>
            <Button
              onClick={() => setSelectedMaterial(null)}
              variant="secondary"
              className="mt-6"
            >
              Fechar
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.map(material => (
            <Card key={material.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      {getIcon(material.type)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle>{material.title}</CardTitle>
                    <CardDescription className="mt-1">{material.description}</CardDescription>
                    <span className="inline-block mt-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {getTypeLabel(material.type)}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setSelectedMaterial(material.id)}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Abrir material
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
