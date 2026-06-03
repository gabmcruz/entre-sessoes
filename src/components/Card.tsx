'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: CardProps) {
  return <h2 className={`text-lg font-semibold text-slate-900 ${className}`}>{children}</h2>;
}

export function CardDescription({ children, className = '' }: CardProps) {
  return <p className={`text-sm text-slate-600 mt-1 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }: CardProps) {
  return <div className={className}>{children}</div>;
}
