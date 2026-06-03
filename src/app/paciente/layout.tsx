import { Navigation } from '@/components/Navigation';

export default function PacienteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation role="paciente" />
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
