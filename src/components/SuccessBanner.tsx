'use client';

import { Check } from 'lucide-react';

interface SuccessBannerProps {
  title: string;
  message: string;
}

export function SuccessBanner({ title, message }: SuccessBannerProps) {
  return (
    <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4 mb-6 shadow-sm">
      <div className="flex gap-3 items-start">
        <div className="flex-shrink-0 mt-0.5">
          <Check className="w-5 h-5 text-green-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-green-900">{title}</h3>
          <p className="text-green-800 text-sm mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
}
