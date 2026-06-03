'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';

interface NavigationProps {
  role: 'paciente' | 'psicologa';
}

export function Navigation({ role }: NavigationProps) {
  const pathname = usePathname();

  const navigationItems =
    role === 'paciente'
      ? [
          { href: '/paciente', label: 'Dashboard', active: pathname === '/paciente' },
          { href: '/paciente/check-in', label: 'Check-in', active: pathname === '/paciente/check-in' },
          { href: '/paciente/tarefa', label: 'Tarefa', active: pathname === '/paciente/tarefa' },
          { href: '/paciente/registro', label: 'Registro', active: pathname === '/paciente/registro' },
          { href: '/paciente/materiais', label: 'Materiais', active: pathname === '/paciente/materiais' },
          { href: '/paciente/progresso', label: 'Progresso', active: pathname === '/paciente/progresso' },
        ]
      : [
          { href: '/psicologa', label: 'Dashboard', active: pathname === '/psicologa' },
          { href: '/psicologa/nova-tarefa', label: 'Nova Tarefa', active: pathname === '/psicologa/nova-tarefa' },
        ];

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={role === 'paciente' ? '/paciente' : '/psicologa'} className="font-semibold text-sky-600">
            Entre Sessões
          </Link>
          <div className="flex gap-6">
            {navigationItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.active ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/" className="text-slate-600 hover:text-slate-900 flex items-center gap-2 text-sm">
            <LogOut className="w-4 h-4" />
            Sair
          </Link>
        </div>
      </div>
    </nav>
  );
}
