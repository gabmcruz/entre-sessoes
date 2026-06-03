'use client';

import { Info } from 'lucide-react';

interface DisclaimerBannerProps {
  variant?: 'full' | 'compact';
}

export function DisclaimerBanner({ variant = 'compact' }: DisclaimerBannerProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-200 p-3 mb-6 rounded">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-blue-700">
            Ferramenta de apoio. <strong>Não substitui psicoterapia.</strong> Em emergências, procure atendimento imediatamente.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border border-blue-200 p-6 mb-8 rounded-lg">
      <div className="flex gap-4">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-blue-900 mb-2">Informações importantes</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>✓ Esta é uma ferramenta de apoio entre sessões</li>
            <li>✓ Não substitui atendimento psicológico real</li>
            <li>✓ Em caso de emergência, procure atendimento imediatamente</li>
            <li>✓ Seus dados são para uso clínico apenas com a Larissa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
